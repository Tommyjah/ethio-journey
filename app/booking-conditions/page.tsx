import LegalLayout from '@/components/LegalLayout';

export default function BookingConditions() {
  return (
    <LegalLayout title="Booking Conditions">
      <div className="space-y-10">
        <section>
          <h2 className="text-white text-xl font-bold mb-4 italic">1. Reservation & Deposit</h2>
          <p>
            To confirm a signature expedition or a luxury fleet block-booking, a <strong>30% non-refundable deposit</strong> 
            is required. No booking is deemed "Confirmed" until the deposit is cleared in our accounts.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-4 italic">2. Payment Methods</h2>
          <p>
            We accept Swift Wire Transfers, major International Credit Cards, and local digital payments 
            via <strong>Telebirr</strong> or Commercial Bank of Ethiopia (CBE) for local residents.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-4 italic">3. Heritage Site Etiquette</h2>
          <p>
            Many of our expeditions visit UNESCO World Heritage sites and active religious locations. 
            Booking conditions require all clients to adhere to local dress codes and photography 
            regulations as set by the <strong>Ethiopian Heritage Authority</strong>.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}