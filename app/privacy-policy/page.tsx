import LegalLayout from '@/components/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <div className="space-y-10">
        <section>
          <h2 className="text-white text-xl font-bold mb-4 italic">1. Compliance with Ethiopian Law</h2>
          <p>
            Ethio Journey Luxury Travel operates in strict accordance with the <strong>Ethiopian Proclamation on Personal Data Protection</strong>. 
            We are committed to safeguarding the sensitive information of our global clientele.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-4 italic">2. Data Acquisition</h2>
          <p>To facilitate high-end expeditions, we acquire specific data points including:</p>
          <ul className="list-disc pl-5 mt-4 space-y-3">
            <li>Passport details for <strong>Ethiopian Civil Aviation</strong> and domestic flight bookings.</li>
            <li>Permit-related data for the <strong>Ethiopian Wildlife Conservation Authority (EWCA)</strong>.</li>
            <li>Dietary and medical requirements to ensure safety in remote regions like Danakil or the Simien Mountains.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-4 italic">3. Secure Storage</h2>
          <p>
            Your data is stored on encrypted servers. We do not share information with third parties except for 
            authorized government bodies required to issue travel permits or luxury lodge partners for check-in procedures.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}