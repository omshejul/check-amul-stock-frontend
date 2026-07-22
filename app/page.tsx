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
  title: "Amul Stock Checker | WhatsApp Restock Alerts",
  description:
    "Check Amul product stock for your pincode and get a WhatsApp message when an item comes back in stock.",
  path: "/",
});

const faqs = [
  {
    question: "What is the Amul Stock Checker?",
    answer:
      "It is a free, independent tool that checks an Amul Shop product for your delivery pincode and sends you a WhatsApp message when it finds stock.",
  },
  {
    question: "Which Amul products can I track?",
    answer:
      "You can use an individual product page from shop.amul.com, including whey protein, high-protein buttermilk, lassi, and other products sold through Amul Shop. Stock can vary by product and pincode.",
  },
  {
    question: "Does it check stock for my pincode?",
    answer:
      "Yes. Each alert uses the six-digit delivery pincode you enter because Amul Shop stock can differ by location. Create another alert if you want to check a different area.",
  },
  {
    question: "How quickly will I receive a restock alert?",
    answer:
      "You can ask us to check every 1, 6, 12, or 24 hours. We can only message you after a scheduled check finds stock, so your chosen schedule affects how soon you may hear from us.",
  },
  {
    question: "Will an alert guarantee that I can buy the product?",
    answer:
      "No. Stock can change between our check and checkout. Always confirm the product, pincode, price, and current stock on Amul Shop before you buy.",
  },
  {
    question: "How do I stop an Amul stock alert?",
    answer:
      "Sign in, find the alert under Your stock alerts, and select Remove. An alert also expires after it finds stock and sends your WhatsApp message.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amul Stock Checker",
    url: siteUrl,
    description:
      "Check Amul product stock by delivery pincode and get WhatsApp restock alerts.",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Amul Stock Checker",
    url: siteUrl,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    description:
      "Check an Amul Shop product for a delivery pincode and send a WhatsApp message when stock is found.",
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
              Free, open source, and independent
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Check Amul stock and get WhatsApp restock alerts
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Paste an Amul Shop link, add your delivery pincode, and choose
                how often we should check. We&apos;ll message you on WhatsApp when
                we find the product in stock.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#stock-monitor">Track a product</Link>
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
              This is an independent project. It is not affiliated with or
              endorsed by Amul or GCMMF.
            </p>
          </header>

          <section aria-labelledby="how-it-works" className="w-full space-y-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="how-it-works" className="text-3xl font-bold tracking-tight">
                How the Amul stock checker works
              </h2>
              <p className="mt-3 text-muted-foreground">
                Set up an alert in three quick steps. You can come back at any
                time to see or remove the products you are tracking.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: PackageSearch,
                  title: "Paste a product link",
                  text: "Open the product on Amul Shop, copy its link, and add the pincode where you want it delivered.",
                },
                {
                  icon: Clock3,
                  title: "Choose a schedule",
                  text: "Ask us to check every 1, 6, 12, or 24 hours. More frequent checks may spot a restock sooner.",
                },
                {
                  icon: BellRing,
                  title: "Get a WhatsApp message",
                  text: "When a check finds stock, we message the WhatsApp number you provided and mark the alert as complete.",
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
              Create and manage Amul stock alerts
            </h2>
            <StockCheckerWorkspace />
          </section>

          <section aria-labelledby="products-heading" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle id="products-heading" className="text-2xl sm:text-3xl">
                  Track Amul protein products and more
                </CardTitle>
                <CardDescription>
                  We check the exact Amul Shop product page you give us.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4 leading-7 text-muted-foreground">
                  <p>
                    You can track whey protein, high-protein buttermilk,
                    high-protein lassi, and other products sold on Amul Shop.
                    Just use the individual page for the exact item and pack size
                    you want.
                  </p>
                  <p>
                    Stock can differ from one delivery area to another. That is
                    why every alert includes a six-digit pincode. You can type it
                    yourself or use the location button to fill it in.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    "Track the exact product and pack size you want",
                    "Check stock for your delivery pincode",
                    "Choose how often you want us to check",
                    "Open Amul Shop straight from your alert",
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
                A few things to know before you start
              </h2>
              <p className="mt-3 text-muted-foreground">
                We can save you from refreshing the same page, but stock can
                change quickly. Always check Amul Shop before you buy.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                  <CardTitle className="text-xl">Checks use your pincode</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  Each alert checks one product for one delivery pincode. Create
                  another alert if you want to check a different area.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock3 className="h-6 w-6 text-primary" aria-hidden="true" />
                  <CardTitle className="text-xl">Checks run on a schedule</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  We do not check continuously. A product can sell out before
                  you open the message, and an alert does not reserve stock.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />
                  <CardTitle className="text-xl">You are in control</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  Sign in to see or remove your alerts. We use your Google
                  account to find your alerts and your phone number to send the
                  WhatsApp message you asked for.
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
                See how to find a product link, add your pincode, and create an alert.
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
                Quick answers about products, pincodes, schedules, and WhatsApp messages.
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
                  Ready to stop checking Amul Shop manually?
                </CardTitle>
                <CardDescription className="mx-auto max-w-2xl text-base">
                  Set up a free alert and we&apos;ll let you know when a scheduled
                  check finds the product in stock.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg">
                  <Link href="#stock-monitor">Create a stock alert</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}
