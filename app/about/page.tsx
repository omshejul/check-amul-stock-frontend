import Link from "next/link";
import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About the Amul Stock Checker",
  description:
    "Learn why the independent Amul Stock Checker was built, how it works, and where to find the open-source code.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SeoPage
      title="About the Amul Stock Checker"
      description="A free, independent tool that checks Amul Shop products for your pincode and sends WhatsApp restock alerts."
      path="/about"
    >
      <section className="space-y-4">
        <h2>Why this project exists</h2>
        <p>
          Popular products can sell out quickly, and stock can change by
          delivery pincode. Refreshing the same page all day is frustrating.
          This project checks it for you on a schedule and sends a WhatsApp
          message when it finds stock.
        </p>
      </section>

      <section className="space-y-4">
        <h2>How it works behind the scenes</h2>
        <p>
          The website handles Google sign-in and your stock alerts. Secure
          server-side routes send each alert to a separate service that runs the
          scheduled checks and sends the WhatsApp message. Private backend
          credentials are never sent to your browser.
        </p>
        <p>
          The project stops at the alert. It does not sell products, buy anything
          for you, hold stock, or take payment.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Open source and maintained by Om Shejul</h2>
        <p>
          The frontend code is available on GitHub under the MIT License. You can
          inspect it, report a problem, or contribute an improvement. Please do
          not share account details, phone numbers, or location information in a
          public issue.
        </p>
        <p>
          View the <a className="text-primary underline" href="https://github.com/omshejul/check-amul-stock-frontend" target="_blank" rel="noopener noreferrer">frontend repository</a> or
          read <Link className="text-primary underline" href="/how-it-works">how to create an alert</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Independence and brand disclaimer</h2>
        <p>
          Amul Stock Checker is not affiliated with, endorsed by, or sponsored
          by Amul or the Gujarat Cooperative Milk Marketing Federation (GCMMF).
          We use the Amul name only to explain which store pages the tool checks.
          Amul Shop remains the source of truth for product details, stock,
          prices, delivery, and orders.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Service limitations</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Checks run on a schedule and are not continuous or real-time.</li>
          <li>Stock can change before you open the WhatsApp message.</li>
          <li>An alert does not reserve a product or guarantee checkout.</li>
          <li>Store changes, outages, or messaging failures can interrupt checks.</li>
          <li>The project may change over time.</li>
        </ul>
      </section>
    </SeoPage>
  );
}
