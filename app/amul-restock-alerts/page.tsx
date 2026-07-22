import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Amul Restock Alerts on WhatsApp",
  description:
    "Learn how Amul restock alerts work, when checks run, what the WhatsApp message means, and how to remove an alert.",
  path: "/amul-restock-alerts",
});

export default function AmulRestockAlertsPage() {
  return (
    <SeoPage
      title="Amul Restock Alerts on WhatsApp"
      description="See what happens from the moment you choose a product and pincode to the moment you get a WhatsApp message."
      path="/amul-restock-alerts"
    >
      <section className="space-y-4">
        <h2>What a restock alert does</h2>
        <p>
          Each alert checks one Amul Shop product for one delivery pincode. We
          check it on the schedule you choose. When we find stock, we send a
          message to the WhatsApp number you provided.
        </p>
        <p>
          This saves you from opening the same product page throughout the day.
          The message is only a heads-up. It is not a reservation or an order.
        </p>
      </section>

      <section className="space-y-4">
        <h2>When checks happen</h2>
        <p>
          If you choose every six hours, we may not spot a restock until the next
          check. Every hour is the most frequent option. Stock can come and go
          between checks, so no schedule can catch every short restock.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Why we ask for your pincode</h2>
        <p>
          Amul Shop may show different stock for different delivery areas. Your
          alert uses the pincode where you plan to order. If you switch to
          another pincode on Amul Shop, you may see a different result.
        </p>
      </section>

      <section className="space-y-4">
        <h2>What to do after receiving a WhatsApp alert</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Open the product link on Amul Shop.</li>
          <li>Confirm that the correct delivery pincode is selected.</li>
          <li>Check the product, pack size, price, and current stock.</li>
          <li>Complete the purchase directly on Amul Shop.</li>
        </ol>
        <p>
          Popular products may sell out quickly, but take a moment to review the
          order. We never buy anything or complete checkout for you.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Completed and removed alerts</h2>
        <p>
          An alert is marked complete after it finds stock and sends a message.
          This stops repeat messages from the same alert. You can remove any
          alert from Your stock alerts. If you still need the product, create a
          new alert with the current link and pincode.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Responsible use</h2>
        <p>
          Use a WhatsApp number you control and remove alerts you no longer need.
          Do not add someone else&apos;s number without their permission. This is an
          independent open-source project and is not affiliated with Amul or GCMMF.
        </p>
      </section>
    </SeoPage>
  );
}
