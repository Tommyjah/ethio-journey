import LegalLayout from '@/components/LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service">
      <div className="space-y-10">
        <section>
          <h2 className="text-white text-xl font-bold mb-4 italic">1. The Service Agreement</h2>
          <p>
            By engaging Ethio Journey, you enter into a service contract governed by the <strong>Civil Code of Ethiopia</strong>. 
            We provide luxury travel logistics, chauffeured fleet services, and curated expeditions.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-4 italic">2. Pricing & Taxation</h2>
          <p>
            All rates are quoted in USD or ETB at the prevailing bank exchange rate. In compliance with 
            Ethiopian tax law, a <strong>15% Value Added Tax (VAT)</strong> is applicable to all services provided within the country.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-4 italic">3. Fleet & Liability</h2>
          <p>
            Our luxury fleet is maintained to international safety standards. While we provide comprehensive 
            insurance for our vehicles and drivers, clients are strongly advised to maintain independent 
            international travel insurance for personal belongings and health.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}