'use server';

import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Simple email template
const simpleEmailTemplate = (data: any) => `
  <h1>New Booking Request</h1>
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
  ${data.date ? `<p><strong>Date:</strong> ${data.date}</p>` : ''}
  ${data.guests ? `<p><strong>Guests:</strong> ${data.guests}</p>` : ''}
  ${data.tour ? `<p><strong>Tour/Hotel:</strong> ${data.tour}</p>` : ''}
  ${data.requirements ? `<p><strong>Requirements:</strong> ${data.requirements}</p>` : ''}
`;

// Input validation functions
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string) => {
  const phoneRegex = /^(?:\+251|0)[1-9]\d{8}$/;
  return phoneRegex.test(phone);
};

export async function sendInquiry(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const date = formData.get('date');
  const guests = formData.get('guests');
  const requirements = formData.get('requirements');
  const tour = formData.get('tour');

  if (!name || !email) {
    return { success: false, error: 'Missing required fields' };
  }

  if (!validateEmail(email.toString())) {
    return { success: false, error: 'Invalid email format' };
  }

  if (phone && !validatePhone(phone.toString())) {
    return { success: false, error: 'Invalid phone number format' };
  }

  try {
    console.log('Resend API Key exists:', !!process.env.RESEND_API_KEY);
    
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ethiojourney@gmail.com', // Verified email address
      subject: `New Booking: ${name}`,
      html: simpleEmailTemplate({
        name,
        email,
        phone,
        date,
        guests,
        requirements,
        tour,
      }),
    });

    console.log('Email sent:', result);
    return { success: true, data: result };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message || 'Failed to send email' };
  }
}