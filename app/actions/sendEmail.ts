'use server';

import { Resend } from 'resend';

// You'll get this key from resend.com (it's free for 3,000 emails/mo)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiry(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const date = formData.get('date');
  const guests = formData.get('guests');
  const requirements = formData.get('requirements');
  const tour = formData.get('tour');

  try {
    const data = await resend.emails.send({
      from: 'Ethio Journey <onboarding@resend.dev>', // Later use your domain
      to: ['ethiojourney@gmail.com'], // YOUR EMAIL HERE
      subject: `New VIP Inquiry: ${name}`,
      html: `
        <h1>New Journey Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Travel Date:</strong> ${date}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        ${tour ? `<p><strong>Tour:</strong> ${tour}</p>` : ''}
        <p><strong>Special Requirements:</strong> ${requirements}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}