import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Track Amul Protein Product Stock by Pincode",
  description:
    "Monitor Amul whey protein, high-protein buttermilk, lassi, and other Amul Shop protein products by pincode and request WhatsApp restock alerts.",
  path: "/amul-protein-stock",
});

export default function AmulProteinStockPage() {
  return (
    <SeoPage
      title="Track Amul Protein Product Stock by Pincode"
      description="Use a product-specific monitor for eligible Amul Shop protein products and get a WhatsApp alert after stock is detected for your delivery area."
      path="/amul-protein-stock"
    >
      <section className="space-y-4">
        <h2>Why protein product availability changes</h2>
        <p>
          Popular protein products can move in and out of stock, and the result
          visible on Amul Shop may depend on the delivery pincode. A product that
          is available in one area may not be ready for delivery in another.
          Pack sizes and variants also have their own product pages and can have
          different availability.
        </p>
        <p>
          The Amul Stock Checker reduces repeated manual visits by checking the
          exact product URL and pincode you submit. It does not maintain or sell
          inventory itself, and it does not predict when Amul will replenish a
          product.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Protein products you can monitor</h2>
        <p>
          You can create a monitor for an eligible individual product listed on
          shop.amul.com. That may include whey protein, high-protein buttermilk,
          high-protein lassi, or other products in the official protein range.
          Product names, sizes, URLs, and availability may change, so always use
          the current official product page rather than relying on an old link.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Choose the exact flavour, format, or pack size you intend to buy.</li>
          <li>Create separate monitors for different product variants.</li>
          <li>Use the pincode where the order would actually be delivered.</li>
          <li>Confirm current price and product information on Amul Shop.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Choose an appropriate check interval</h2>
        <p>
          For a product that tends to sell quickly, the one-hour option provides
          the most frequent supported checks. Six-, twelve-, and twenty-four-hour
          intervals are available when an immediate alert is less important. The
          interval is not a promise that stock will last that long or that every
          brief availability window will be detected.
        </p>
      </section>

      <section className="space-y-4">
        <h2>What happens when protein stock is found</h2>
        <p>
          A successful check triggers a WhatsApp notification to the number on
          the subscription. The monitor then expires to avoid repeated alerts.
          Visit the official store from the subscription link, set or confirm
          your pincode, and review availability before buying. If the product has
          sold out again, create another monitor for a future restock.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Important limitations</h2>
        <p>
          This is not an official Amul or GCMMF service. It cannot reserve stock,
          complete checkout, verify nutrition claims, or provide a guaranteed
          restock time. The source of truth for product information and purchase
          availability is always shop.amul.com.
        </p>
      </section>
    </SeoPage>
  );
}
