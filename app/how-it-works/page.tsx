import Link from "next/link";
import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "How Amul Stock Monitoring Works",
  description:
    "Learn how to monitor an Amul Shop product by delivery pincode, choose a checking interval, receive a WhatsApp restock alert, and manage subscriptions.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <SeoPage
      title="How Amul Stock Monitoring Works"
      description="A practical guide to creating, receiving, and managing pincode-based WhatsApp restock alerts for products listed on Amul Shop."
      path="/how-it-works"
    >
      <section className="space-y-4">
        <h2>1. Find the official Amul product page</h2>
        <p>
          Start on shop.amul.com and open the individual page for the product you
          want to buy. Copy that page&apos;s full URL rather than a category or
          search-results URL. The monitor uses this address to identify the item
          during future checks, so it should point to the exact pack or variant
          you care about.
        </p>
        <p>
          The checker is an independent notification tool. Product details,
          pricing, delivery eligibility, and checkout remain on the official
          Amul Shop and can change without notice.
        </p>
      </section>

      <section className="space-y-4">
        <h2>2. Enter the delivery pincode</h2>
        <p>
          Amul product availability may differ between delivery areas. Enter the
          six-digit pincode where you expect to place the order. You can type it
          manually or use the location button to request an approximate postal
          code from your browser. Review an automatically detected pincode before
          creating the monitor.
        </p>
        <p>
          One monitor represents one product and one delivery pincode. If you
          want to watch the same product for multiple locations, create a
          separate monitor for each delivery area.
        </p>
      </section>

      <section className="space-y-4">
        <h2>3. Add the WhatsApp number</h2>
        <p>
          Select the correct country code and enter the WhatsApp number that
          should receive the alert. Check the number carefully: the service can
          only deliver a notification using the contact information submitted
          with the monitor. Read the <Link className="text-primary underline" href="/privacy">privacy page</Link> for
          an explanation of the data involved.
        </p>
      </section>

      <section className="space-y-4">
        <h2>4. Choose how often to check</h2>
        <p>
          Available intervals are every 1, 6, 12, or 24 hours. A one-hour
          interval gives the checker more opportunities to notice a short-lived
          restock. Longer intervals reduce the frequency of checks but may detect
          availability later. Monitoring is scheduled rather than continuous or
          real-time.
        </p>
      </section>

      <section className="space-y-4">
        <h2>5. Confirm availability after the alert</h2>
        <p>
          When a scheduled check detects stock, the service sends a WhatsApp
          alert and marks that subscription as expired. Open the product link and
          confirm the delivery pincode and availability directly on Amul Shop.
          An alert does not reserve inventory, add an item to a basket, or
          guarantee that it will remain available through checkout.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Manage or stop monitoring</h2>
        <p>
          Sign in with the same Google account to see your monitors. Active
          subscriptions are still checking; expired subscriptions have already
          detected availability and sent an alert. Select Delete to stop and
          remove a subscription from your visible list. If an alert expires and
          you still need the item, create a new monitor.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Troubleshooting</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Confirm that the URL opens an individual product on shop.amul.com.</li>
          <li>Use a valid six-digit Indian delivery pincode.</li>
          <li>Include the correct international country code for the WhatsApp number.</li>
          <li>Remember that the next check depends on the interval you selected.</li>
          <li>If the official store changes its page, delete the old monitor and create a new one with the current URL.</li>
        </ul>
      </section>
    </SeoPage>
  );
}
