import Link from "next/link";
import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Amul Stock Checker FAQ",
  description:
    "Answers about Amul product availability checks, delivery pincodes, WhatsApp restock notifications, monitoring intervals, privacy, and deleting alerts.",
  path: "/faq",
});

const questions = [
  {
    question: "Is this an official Amul stock checker?",
    answer:
      "No. Amul Stock Checker is an independent, unofficial open-source project. It is not affiliated with, endorsed by, or sponsored by Amul or GCMMF. Product information, pricing, availability, ordering, and payment remain on the official Amul Shop.",
  },
  {
    question: "What does the stock checker monitor?",
    answer:
      "A subscription monitors the individual shop.amul.com product URL and six-digit delivery pincode you submit. It checks on the schedule you select and sends a WhatsApp notification when the service detects that product in stock.",
  },
  {
    question: "Can I monitor Amul whey protein or high-protein drinks?",
    answer:
      "You can submit an eligible individual product page from Amul Shop, including current protein-range products. Use the exact page for the variant or pack size you want because separate product pages may have different availability.",
  },
  {
    question: "Why is a delivery pincode required?",
    answer:
      "Availability can vary by delivery area. Including the pincode makes each monitor relevant to the location where you plan to order. The same product may show a different result for another pincode.",
  },
  {
    question: "How does automatic pincode detection work?",
    answer:
      "When you select the location button, your browser asks for location permission. If granted, the page sends approximate coordinates to a reverse-geocoding provider to obtain a postal code. You can decline and enter the pincode manually.",
  },
  {
    question: "How often can stock be checked?",
    answer:
      "The supported intervals are every 1, 6, 12, or 24 hours. Monitoring is scheduled, not continuous. A shorter interval can notice a restock sooner but cannot guarantee that every brief availability window will be detected.",
  },
  {
    question: "Is the stock result real-time?",
    answer:
      "No. The result comes from a scheduled check. Availability may change after the check and before you open the store or complete checkout. Always verify the current result on shop.amul.com.",
  },
  {
    question: "Does an alert reserve the product?",
    answer:
      "No. A notification does not reserve inventory, place an item in a cart, or create an order. It only tells you that the monitor detected availability. Purchases must be made directly through the official store.",
  },
  {
    question: "Why did my subscription expire?",
    answer:
      "A monitor automatically expires after it detects stock and triggers a notification. This avoids repeated alerts from the same subscription. Create a new monitor if you still need to watch that product.",
  },
  {
    question: "How do I stop or delete an alert?",
    answer:
      "Sign in using the Google account that created the subscription, locate it under Your Subscriptions, and select Delete. Deleted subscriptions no longer appear in the active list.",
  },
  {
    question: "Why did I not receive a WhatsApp notification?",
    answer:
      "The product may not have been detected in stock yet, the next scheduled check may not have run, or the submitted country code and phone number may be incorrect. Confirm the monitor is active and review the interval you selected.",
  },
  {
    question: "Is the service free?",
    answer:
      "The web tool is currently offered for free and its source code is public under the MIT License. Third-party service availability and the project itself can change, so there is no guarantee of uninterrupted operation.",
  },
];

export default function FaqPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData).replace(/</g, "\\u003c"),
        }}
      />
      <SeoPage
        title="Amul Stock Checker FAQ"
        description="Straightforward answers about product URLs, delivery pincodes, check frequency, WhatsApp alerts, privacy, and subscription management."
        path="/faq"
      >
        <div className="space-y-3">
          {questions.map(({ question, answer }) => (
            <details key={question} className="rounded-lg border bg-card px-5 py-4">
              <summary className="cursor-pointer list-none font-semibold text-foreground marker:content-none">
                {question}
              </summary>
              <p className="mt-3">{answer}</p>
            </details>
          ))}
        </div>
        <section className="space-y-4">
          <h2>Still need help?</h2>
          <p>
            Review the <Link href="/how-it-works" className="text-primary underline">step-by-step guide</Link> or
            report a technical issue in the public <a className="text-primary underline" href="https://github.com/omshejul/check-amul-stock-frontend/issues" target="_blank" rel="noopener noreferrer">GitHub issue tracker</a>.
            Do not include a phone number, email address, location, or other
            personal information in a public issue.
          </p>
        </section>
      </SeoPage>
    </>
  );
}
