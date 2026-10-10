import Link from "next/link";
import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "When does Amul protein restock?",
  description:
    "Waiting for Amul whey protein, lassi or buttermilk? Learn about restock timing, check stock for your pincode and set up a WhatsApp alert.",
  path: "/amul-protein-stock",
});

export default function AmulProteinStockPage() {
  return (
    <SeoPage
      title="When does Amul protein restock?"
      description="We do not have a confirmed daily restock time for Amul protein products. Check your exact product and delivery pincode, or set a WhatsApp alert for when a check finds stock."
      path="/amul-protein-stock"
    >
      <section className="space-y-4">
        <h2>Is there a best time or day to check?</h2>
        <p>
          We cannot confirm a fixed morning, evening, or weekly restock slot for
          whey protein, high-protein lassi, or buttermilk. A previous restock for
          one product or pincode does not tell you when another will be available.
          This tool checks current availability; it cannot predict the next batch.
        </p>
        <p>
          Our checks run every minute. That is our checking schedule, not
          Amul&apos;s restock schedule. Stock can change between checks and before
          you finish checkout.
        </p>
      </section>

      <section className="space-y-4">
        <h2>How to check for the next restock</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Open the{" "}
            <a href="https://shop.amul.com/en/browse/protein" className="text-primary underline">
              official Amul Shop protein range
            </a>{" "}
            and select the exact flavour and pack size you want.
          </li>
          <li>
            Enter your delivery pincode and check the individual product page.
            Availability for another variant or delivery area may differ.
          </li>
          <li>
            If it is sold out, use Amul Shop&apos;s Notify Me option if offered,
            or{" "}
            <Link href="/#stock-monitor" className="text-primary underline">
              create a WhatsApp stock alert
            </Link>{" "}
            with that product link and pincode.
          </li>
          <li>
            After an alert arrives, open Amul Shop and confirm the pincode and
            current stock before ordering. An alert does not reserve the product.
          </li>
        </ol>
        <p>
          Read the{" "}
          <Link href="/how-it-works" className="text-primary underline">
            alert setup steps
          </Link>{" "}
          or learn{" "}
          <Link href="/amul-restock-alerts" className="text-primary underline">
            what happens after a restock alert
          </Link>
          . If the product has sold out again, create a new alert.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Why stock can change by pincode</h2>
        <p>
          Popular protein products can sell out quickly. Amul Shop may also show
          different stock for different delivery areas. A product available in
          one pincode may be unavailable in another. Pack sizes and flavours can
          have different stock too.
        </p>
        <p>
          We check the exact product link and pincode you provide, so you do not
          have to keep refreshing the page. We do not sell products or predict
          when Amul will restock them.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Protein products you can track</h2>
        <p>
          You can create an alert for an individual product listed on
          shop.amul.com. This may include whey protein, high-protein buttermilk,
          high-protein lassi, and other items in the protein range. Product links
          can change, so copy the current page from Amul Shop.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Choose the exact flavour, format, or pack size you intend to buy.</li>
          <li>Create separate alerts for different product variants.</li>
          <li>Use the pincode where the order would actually be delivered.</li>
          <li>Confirm current price and product information on Amul Shop.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Checks run every minute</h2>
        <p>
          We check the Amul catalog for your delivery area every minute. No schedule
          can guarantee that we will catch every short restock.
        </p>
      </section>

      <section className="space-y-4">
        <h2>What happens when we find stock</h2>
        <p>
          We send a WhatsApp message and mark the alert as complete. Open Amul
          Shop from the alert, confirm your pincode, and check the current stock
          before buying. If it has sold out again, create a new alert.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Important limitations</h2>
        <p>
          This is not an official Amul or GCMMF service. We cannot reserve stock,
          complete checkout, verify nutrition claims, or promise a restock time.
          Always use shop.amul.com for product details and current stock.
        </p>
      </section>
    </SeoPage>
  );
}
