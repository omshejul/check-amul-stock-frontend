import Link from "next/link";
import {
  BellRing,
  CheckCircle2,
  Clock3,
  ExternalLink,
  MapPin,
  PackageSearch,
  ShieldCheck,
} from "lucide-react";
import StockCheckerWorkspace from "@/components/stock-checker/stock-checker-workspace";
import YouTubeEmbed from "@/components/ui/youtube-embed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";

const siteUrl = "https://amul.omshejul.com";

export const metadata = createPageMetadata({
  title: "Amul Stock Checker – Get WhatsApp Restock Alerts",
  description:
    "Track Amul product availability by pincode and receive WhatsApp alerts when products such as Amul protein items are back in stock.",
  path: "/",
});

const faqs = [
  {
    question: "What is the Amul Stock Checker?",
    answer:
      "It is a free, independent web tool that monitors an Amul Shop product URL for a delivery pincode and sends a WhatsApp alert when the product becomes available.",
  },
  {
    question: "Which Amul products can I monitor?",
    answer:
      "You can submit a product page from shop.amul.com, including eligible protein products such as whey protein, high-protein buttermilk, lassi, and other products sold through the Amul Shop. Availability depends on the product and delivery pincode.",
  },
  {
    question: "Does the checker show stock for my pincode?",
    answer:
      "Yes. Each monitor is tied to the six-digit delivery pincode you enter because Amul Shop availability can differ by location. Create separate monitors if you need to check more than one delivery area.",
  },
  {
    question: "How quickly will I receive a restock alert?",
    answer:
      "You choose a check interval of 1, 6, 12, or 24 hours. An alert can only be sent after a scheduled check detects availability, so the selected interval affects how quickly a restock may be noticed.",
  },
  {
    question: "Will an alert guarantee that I can buy the product?",
    answer:
      "No. Stock can change between a check, the WhatsApp notification, and checkout. Always confirm the product, delivery pincode, price, and availability on the official Amul Shop before purchasing.",
  },
  {
    question: "How do I stop an Amul stock alert?",
    answer:
      "Sign in, find the monitor under Your Subscriptions, and select Delete. A monitor also expires after it detects stock and sends its notification, so it does not continue alerting indefinitely.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amul Stock Checker",
    url: siteUrl,
    description:
      "Track Amul product availability by delivery pincode and receive WhatsApp restock alerts.",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Amul Stock Checker",
    url: siteUrl,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    description:
      "Monitor Amul Shop product availability by delivery pincode and receive a WhatsApp alert when stock is detected.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    author: {
      "@type": "Person",
      name: "Om Shejul",
      url: "https://github.com/omshejul",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
          <header className="max-w-4xl space-y-6 text-center">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Independent, free and open source
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Amul Stock Checker with WhatsApp Restock Alerts
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Track Amul product availability for your delivery pincode and
                receive a WhatsApp notification when an out-of-stock item is
                detected in stock again.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#stock-monitor">Start monitoring Amul stock</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://shop.amul.com/en/browse/protein"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Browse Amul Shop
                  <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              This unofficial project is not affiliated with, endorsed by, or
              sponsored by Amul or GCMMF.
            </p>
          </header>

          <section aria-labelledby="how-it-works" className="w-full space-y-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="how-it-works" className="text-3xl font-bold tracking-tight">
                How Amul stock monitoring works
              </h2>
              <p className="mt-3 text-muted-foreground">
                Create a monitor in a few steps. The checker handles the
                scheduled availability checks and lets you manage every alert
                from the same account.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: PackageSearch,
                  title: "Add an Amul product",
                  text: "Paste the exact shop.amul.com product URL you want to track, then enter the delivery pincode where you plan to order.",
                },
                {
                  icon: Clock3,
                  title: "Choose a check interval",
                  text: "Select checks every 1, 6, 12, or 24 hours. A shorter interval can detect a restock sooner but never guarantees availability.",
                },
                {
                  icon: BellRing,
                  title: "Receive a WhatsApp alert",
                  text: "When a scheduled check finds stock, the service sends a notification to your submitted WhatsApp number and expires the monitor.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <Card key={title}>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="stock-monitor" aria-labelledby="monitor-heading" className="w-full scroll-mt-24">
            <h2 id="monitor-heading" className="sr-only">
              Create and manage Amul stock monitors
            </h2>
            <StockCheckerWorkspace />
          </section>

          <section aria-labelledby="products-heading" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle id="products-heading" className="text-2xl sm:text-3xl">
                  Monitor Amul protein products and more
                </CardTitle>
                <CardDescription>
                  Availability is checked against the Amul Shop product page you provide.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4 leading-7 text-muted-foreground">
                  <p>
                    The checker is useful for frequently unavailable Amul Shop
                    items, including eligible whey protein, high-protein
                    buttermilk, high-protein lassi, and other dairy products.
                    You are not limited to a fixed catalogue: use the individual
                    product URL from the official store when creating a monitor.
                  </p>
                  <p>
                    Product availability is location-specific. An item shown in
                    stock for one city or pincode may be unavailable elsewhere,
                    which is why every monitor includes a six-digit delivery
                    pincode. The GPS button can help fill your current postal
                    code, but you can always enter it manually.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    "Track the exact product page you intend to purchase from",
                    "Check availability for the delivery pincode that matters to you",
                    "Choose a monitoring frequency that matches your needs",
                    "Open the official product page directly from your subscription",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-lg bg-muted/60 p-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm leading-6">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section aria-labelledby="details-heading" className="w-full space-y-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="details-heading" className="text-3xl font-bold tracking-tight">
                What to expect from an Amul restock alert
              </h2>
              <p className="mt-3 text-muted-foreground">
                Stock checking is designed to save repeated manual visits, but
                availability can change quickly and should always be confirmed at checkout.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                  <CardTitle className="text-xl">Pincode-specific checks</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  The service checks the product for the pincode attached to
                  your monitor. If you move or want another delivery area, add a
                  separate monitor with that pincode.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock3 className="h-6 w-6 text-primary" aria-hidden="true" />
                  <CardTitle className="text-xl">Scheduled, not real-time</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  Checks run at your chosen interval rather than continuously.
                  An item may sell out before the next check or after an alert,
                  so a notification is not a reservation or purchase guarantee.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />
                  <CardTitle className="text-xl">You control your monitors</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  Sign in to view and delete your subscriptions. Your Google
                  account identifies which monitors belong to you; your phone
                  number is used to deliver the requested WhatsApp notification.
                </CardContent>
              </Card>
            </div>
          </section>

          <section aria-labelledby="tutorial-heading" className="w-full max-w-3xl space-y-4">
            <div className="text-center">
              <h2 id="tutorial-heading" className="text-3xl font-bold tracking-tight">
                Watch the setup tutorial
              </h2>
              <p className="mt-3 text-muted-foreground">
                See how to find a product URL, enter your pincode and create an alert.
              </p>
            </div>
            <YouTubeEmbed
              videoId="xHB6or8Ywqg"
              title="How to create an Amul product stock alert"
            />
          </section>

          <section aria-labelledby="faq-heading" className="w-full max-w-4xl space-y-6">
            <div className="text-center">
              <h2 id="faq-heading" className="text-3xl font-bold tracking-tight">
                Amul stock checker FAQs
              </h2>
              <p className="mt-3 text-muted-foreground">
                Common questions about product availability, pincodes and WhatsApp alerts.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="group rounded-lg border bg-card px-5 py-4">
                  <summary className="cursor-pointer list-none pr-6 font-semibold marker:content-none">
                    {question}
                  </summary>
                  <p className="mt-3 leading-7 text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="final-cta-heading" className="w-full max-w-4xl">
            <Card className="bg-muted/50 text-center">
              <CardHeader>
                <CardTitle id="final-cta-heading" className="text-2xl sm:text-3xl">
                  Stop repeatedly checking Amul Shop for stock
                </CardTitle>
                <CardDescription className="mx-auto max-w-2xl text-base">
                  Add the product and delivery pincode you care about, choose a
                  schedule, and let the checker notify you when availability is detected.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg">
                  <Link href="#stock-monitor">Create a free stock monitor</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}
