import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Track Amul Protein Product Stock by Pincode",
  description:
    "Track Amul whey protein, high-protein buttermilk, lassi, and other protein products by pincode with WhatsApp restock alerts.",
  path: "/amul-protein-stock",
});

export default function AmulProteinStockPage() {
  return (
    <SeoPage
      title="Track Amul Protein Product Stock by Pincode"
      description="Choose the exact Amul Shop protein product you want and get a WhatsApp message when a scheduled check finds stock for your pincode."
      path="/amul-protein-stock"
    >
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
        <h2>Choose how often to check</h2>
        <p>
          Every hour is the most frequent option and may help with products that
          sell quickly. You can also choose every 6, 12, or 24 hours. No schedule
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
