import Link from "next/link";
import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "How to Set Up an Amul Stock Alert",
  description:
    "Learn how to track an Amul Shop product by pincode and get a WhatsApp message when a scheduled check finds stock.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <SeoPage
      title="How to Set Up an Amul Stock Alert"
      description="Follow these steps to track an Amul Shop product for your pincode and get a WhatsApp message when we find stock."
      path="/how-it-works"
    >
      <section className="space-y-4">
        <h2>1. Copy the product link</h2>
        <p>
          Go to shop.amul.com and open the exact product you want. Copy the link
          from that page, not a category or search page. If there are different
          pack sizes or flavours, choose the one you actually plan to buy.
        </p>
        <p>
          We only check the link you give us. Amul Shop is still the place to
          confirm the price, delivery details, and current stock.
        </p>
      </section>

      <section className="space-y-4">
        <h2>2. Add your delivery pincode</h2>
        <p>
          Stock can vary by delivery area, so enter the six-digit pincode where
          you want the order delivered. You can type it yourself or use the
          location button. If you use your location, check the pincode before you
          create the alert.
        </p>
        <p>
          Each alert checks one product for one pincode. Create another alert if
          you want to check a second delivery area.
        </p>
      </section>

      <section className="space-y-4">
        <h2>3. Enter your WhatsApp number</h2>
        <p>
          Choose the right country code and enter the number where you want the
          message sent. Check it carefully before you continue. Our <Link className="text-primary underline" href="/privacy">privacy page</Link> explains
          how the site uses this information.
        </p>
      </section>

      <section className="space-y-4">
        <h2>4. Choose a check schedule</h2>
        <p>
          You can ask us to check every 1, 6, 12, or 24 hours. Checking every
          hour gives us more chances to spot a short restock. The checks run on a
          schedule, so they are not continuous or real-time.
        </p>
      </section>

      <section className="space-y-4">
        <h2>5. Open the message and check Amul Shop</h2>
        <p>
          When we find stock, we send a WhatsApp message and mark the alert as
          complete. Open the product link and check the pincode and stock on Amul
          Shop. The message does not reserve the product or guarantee checkout.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Change or remove an alert</h2>
        <p>
          Sign in with the same Google account to see your alerts. Active alerts
          are still being checked. Expired alerts have already found stock and
          sent a message. Select Remove when you no longer need an alert. If a
          product sells out again, create a new one.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Troubleshooting</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Make sure the link opens one product on shop.amul.com.</li>
          <li>Use a valid six-digit Indian delivery pincode.</li>
          <li>Include the correct international country code for the WhatsApp number.</li>
          <li>Remember that the next check depends on the schedule you chose.</li>
          <li>If Amul Shop changes the product page, remove the old alert and create a new one with the current link.</li>
        </ul>
      </section>
    </SeoPage>
  );
}
