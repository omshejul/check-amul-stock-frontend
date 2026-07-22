import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Amul Restock Alerts on WhatsApp",
  description:
    "Learn how Amul product restock alerts work, how often stock is checked, what a WhatsApp notification means, and how to stop a monitor.",
  path: "/amul-restock-alerts",
});

export default function AmulRestockAlertsPage() {
  return (
    <SeoPage
      title="Amul Restock Alerts on WhatsApp"
      description="Understand the full alert lifecycle—from choosing a product and pincode to receiving a notification and confirming stock on Amul Shop."
      path="/amul-restock-alerts"
    >
      <section className="space-y-4">
        <h2>What an Amul restock alert does</h2>
        <p>
          A restock alert watches one Amul Shop product for one delivery pincode.
          At the interval you select, the monitoring service checks whether the
          product appears available. When availability is detected, it sends a
          WhatsApp notification using the phone number attached to your
          subscription.
        </p>
        <p>
          This is useful when you know which item you want but do not want to
          revisit its product page throughout the day. The alert is informational:
          it does not represent a reservation, order, or guarantee of purchase.
        </p>
      </section>

      <section className="space-y-4">
        <h2>How alert timing works</h2>
        <p>
          Monitoring runs on a schedule. If you choose every six hours, a
          restock may be noticed at the next scheduled check rather than the
          moment inventory changes. The supported one-hour interval is the most
          frequent option. Because stock can appear and disappear between checks,
          no interval can guarantee detection of every availability window.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Why the delivery pincode matters</h2>
        <p>
          Online availability can depend on fulfilment for the delivery area.
          The monitor includes your six-digit pincode so its result is relevant
          to the location where you intend to receive the order. If you enter a
          different pincode on Amul Shop after opening an alert, the store may
          show a different result.
        </p>
      </section>

      <section className="space-y-4">
        <h2>What to do after receiving a WhatsApp alert</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Open the product link on the official Amul Shop.</li>
          <li>Confirm that the correct delivery pincode is selected.</li>
          <li>Review the exact product variant, pack size, price, and availability.</li>
          <li>Complete any purchase directly with the official store.</li>
        </ol>
        <p>
          Move promptly if the product is popular, but review the order carefully.
          The checker never needs to complete checkout on your behalf.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Expired and deleted alerts</h2>
        <p>
          A monitor expires after it detects stock and triggers its notification.
          This prevents the same monitor from sending repeated messages. You can
          delete an active or expired subscription from Your Subscriptions. If
          you still need the product after an alert expires, create a fresh
          monitor with the current product URL and pincode.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Responsible use</h2>
        <p>
          Use a WhatsApp number you control and remove monitors you no longer
          need. Do not submit another person&apos;s contact information without
          their permission. This independent open-source service is intended for
          personal availability notifications and is not affiliated with Amul or
          GCMMF.
        </p>
      </section>
    </SeoPage>
  );
}
