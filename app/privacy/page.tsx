import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy and Data Use",
  description:
    "Learn what Amul Stock Checker uses for sign-in, stock alerts, WhatsApp messages, analytics, location lookup, and data deletion.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <SeoPage
      title="Privacy and Data Use"
      description="Here is what the site uses when you sign in, create an alert, look up your pincode, or browse the website."
      path="/privacy"
      showCta={false}
    >
      <p className="text-sm">Last updated: July 23, 2026</p>

      <section className="space-y-4">
        <h2>Project scope</h2>
        <p>
          Amul Stock Checker is an independent open-source project built by Om
          Shejul. It is not an official Amul or GCMMF service. This page explains
          what information the site needs to check products and send WhatsApp messages.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Information the site uses</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">Google account information:</strong> your name,
            email address, and profile image may be received through Google sign-in
            so the site can sign you in and find the alerts linked to your account.
          </li>
          <li>
            <strong className="text-foreground">Alert information:</strong> the Amul product
            URL, delivery pincode, WhatsApp phone number, selected check interval,
            creation time, and alert status are sent to the checking service.
          </li>
          <li>
            <strong className="text-foreground">Technical and usage information:</strong> the
            site uses PostHog to understand how features are used and to find errors.
            This may include browser, device, page, interaction, network, and error details.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>How the information is used</h2>
        <p>
          We use your account information to sign you in and show your alerts.
          Alert information is used to run scheduled checks and send the
          WhatsApp message you requested. Usage information helps us understand
          whether the site works and investigate problems.
        </p>
        <p>
          Do not submit a phone number that you do not control or have permission
          to use. The site is meant for personal stock alerts.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Optional pincode detection</h2>
        <p>
          Location access is optional. When you press the location button, your
          browser asks for permission. If you agree, it sends an approximate
          location to BigDataCloud, or to LocationIQ when the fallback is set up,
          to find a postal code. You can decline and enter the pincode yourself.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Third-party services</h2>
        <p>
          The site relies on Google for sign-in, PostHog for analytics and error
          tracking, a backend for scheduled product checks, messaging
          infrastructure for WhatsApp alerts,
          BigDataCloud or LocationIQ for optional reverse geocoding, and YouTube
          for the embedded tutorial. These companies may process information under
          their own terms and privacy policies.
        </p>
        <p>
          The tutorial embed is loaded from YouTube when the page containing it
          is viewed. External links take you to sites that this project does not control.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Retention and deletion</h2>
        <p>
          Alert records include statuses such as active, expired, and deleted.
          Removing an alert hides it from your active list. Backend records may
          still be kept for operational history, security, and troubleshooting.
          The project does not currently promise a specific retention period.
        </p>
        <p>
          To stop an alert, sign in and select Remove under Your stock alerts.
          For an account-level privacy or deletion request, contact the maintainer
          through the linked GitHub profile. Do not publish personal information
          in a public issue; first request a private contact method.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Security and limitations</h2>
        <p>
          Backend credentials are kept in server-side configuration rather than
          exposed to the browser, and stock-management API routes require an
          authenticated session. No internet service can guarantee absolute
          security or uninterrupted access. Use the site only if you
          accept these limitations.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Changes and contact</h2>
        <p>
          This page may change as the application or its service providers change.
          Material updates will be reflected by the date above. For general
          questions, visit the maintainer&apos;s <a className="text-primary underline" href="https://github.com/omshejul" target="_blank" rel="noopener noreferrer">GitHub profile</a>.
        </p>
      </section>
    </SeoPage>
  );
}
