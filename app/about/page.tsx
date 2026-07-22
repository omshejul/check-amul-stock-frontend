import Link from "next/link";
import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About the Amul Stock Checker",
  description:
    "Learn why the independent Amul Stock Checker was built, how it monitors availability, who maintains it, and where to inspect the open-source code.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SeoPage
      title="About the Amul Stock Checker"
      description="An independent open-source utility for people who want a simpler way to watch Amul Shop product availability by delivery pincode."
      path="/about"
    >
      <section className="space-y-4">
        <h2>Why this project exists</h2>
        <p>
          Products that attract a lot of interest can be unavailable when a
          customer visits the store. Repeatedly refreshing a product page is
          inconvenient, especially when the result depends on a delivery
          pincode. This project turns that repetitive check into a scheduled
          monitor and sends a WhatsApp alert after availability is detected.
        </p>
      </section>

      <section className="space-y-4">
        <h2>How the service is designed</h2>
        <p>
          The website handles Google sign-in, monitor creation, and subscription
          management. Authenticated requests pass through server-side API routes
          to a separate monitoring service. That service performs scheduled
          availability checks and triggers the notification workflow. The
          browser never receives the backend bearer token used by those routes.
        </p>
        <p>
          The project intentionally stops at notification. It does not sell
          products, automate purchasing, hold inventory, or take payment.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Open source and maintained by Om Shejul</h2>
        <p>
          The frontend source is available on GitHub under the MIT License. You
          can inspect the implementation, report a reproducible problem, or
          contribute an improvement through the repository. Please keep personal
          account, phone, and location information out of public issues.
        </p>
        <p>
          View the <a className="text-primary underline" href="https://github.com/omshejul/check-amul-stock-frontend" target="_blank" rel="noopener noreferrer">frontend repository</a> or
          read <Link className="text-primary underline" href="/how-it-works">how monitoring works</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Independence and brand disclaimer</h2>
        <p>
          Amul Stock Checker is not affiliated with, endorsed by, or sponsored
          by Amul or the Gujarat Cooperative Milk Marketing Federation (GCMMF).
          The Amul name is used descriptively to explain which official store
          product pages the tool can monitor. The official store remains the
          source of truth for product details, stock, prices, delivery, and orders.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Service limitations</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Checks are scheduled and are not continuous or real-time.</li>
          <li>Availability can change before a notification is opened.</li>
          <li>An alert does not reserve a product or guarantee checkout.</li>
          <li>Store changes, third-party outages, or messaging failures can interrupt monitoring.</li>
          <li>The service may change as the open-source project evolves.</li>
        </ul>
      </section>
    </SeoPage>
  );
}
