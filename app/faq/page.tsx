import Link from "next/link";
import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Amul Stock Checker FAQ",
  description:
    "Answers about Amul stock checks, delivery pincodes, WhatsApp restock messages, check schedules, privacy, and removing alerts.",
  path: "/faq",
});

const questions = [
  {
    question: "Is this an official Amul stock checker?",
    answer:
      "No. This is an independent open-source project. It is not affiliated with or endorsed by Amul or GCMMF. Use Amul Shop for product details, prices, stock, orders, and payments.",
  },
  {
    question: "What does the stock checker track?",
    answer:
      "Each alert checks one shop.amul.com product link for the six-digit delivery pincode you enter. It runs on the schedule you choose and sends a WhatsApp message when it finds stock.",
  },
  {
    question: "Can I track Amul whey protein or high-protein drinks?",
    answer:
      "Yes. Use the exact Amul Shop page for the flavour, variant, or pack size you want. Different product pages can show different stock.",
  },
  {
    question: "Why is a delivery pincode required?",
    answer:
      "Stock can vary by delivery area. Your pincode helps us check the location where you plan to order. The same product may show a different result somewhere else.",
  },
  {
    question: "How does automatic pincode detection work?",
    answer:
      "When you select the location button, your browser asks for permission. If you agree, the page uses your approximate location to look up a postal code. You can always say no and type the pincode yourself.",
  },
  {
    question: "How often can stock be checked?",
    answer:
      "You can choose every 1, 6, 12, or 24 hours. Checks are scheduled, not continuous. A shorter schedule may spot a restock sooner, but it cannot catch every brief stock window.",
  },
  {
    question: "Is the stock result real-time?",
    answer:
      "No. Stock may change after a check and before you open the store or finish checkout. Always confirm the latest result on shop.amul.com.",
  },
  {
    question: "Does an alert reserve the product?",
    answer:
      "No. A message does not reserve the product, add it to a cart, or place an order. You still need to buy it directly from Amul Shop.",
  },
  {
    question: "Why is my alert marked complete?",
    answer:
      "An alert is marked complete after it finds stock and sends a WhatsApp message. This prevents repeat messages. Create a new alert if you still want to track the product.",
  },
  {
    question: "How do I stop or delete an alert?",
    answer:
      "Sign in with the Google account you used to create it, open Your stock alerts, and select Remove.",
  },
  {
    question: "Why did I not receive a WhatsApp message?",
    answer:
      "We may not have found stock yet, the next check may not have run, or the phone number may be wrong. Make sure the alert is active and check the country code, number, and schedule.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes, the hosted tool is currently free and the code is public under the MIT License. The project and the services it depends on may change over time.",
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
        description="Quick answers about product links, delivery pincodes, check schedules, WhatsApp messages, privacy, and managing alerts."
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
