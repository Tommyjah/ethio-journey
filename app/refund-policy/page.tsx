import LegalLayout from '@/components/LegalLayout';

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy">
      <div className="space-y-10">
        <section>
          <h2 className="text-white text-xl font-bold mb-4 italic">1. Cancellation Schedule</h2>
          <p className="mb-6">Refunds are processed based on the timeframe prior to the expedition commencement:</p>
          <div className="border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-[#D4AF37]">
                <tr>
                  <th className="p-4 border-b border-white/10">Cancellation Period</th>
                  <th className="p-4 border-b border-white/10">Refund Amount</th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                <tr>
                  <td className="p-4 border-b border-white/10">60+ Days Prior</td>
                  <td className="p-4 border-b border-white/10">100% (Less 30% Non-refundable Deposit)</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-white/10">30 - 59 Days Prior</td>
                  <td className="p-4 border-b border-white/10">50% of Total Package Cost</td>
                </tr>
                <tr>
                  <td className="p-4">Less than 15 Days</td>
                  <td className="p-4 text-[#F15A24]">Non-refundable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-4 italic">2. Force Majeure</h2>
          <p>
            Ethio Journey is not liable for cancellations caused by natural disasters, government travel restrictions, 
            or airport closures. In such cases, we provide a <strong>24-month Travel Credit</strong> to reschedule your journey.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}