import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy and Data Use",
  description:
    "Learn what information Amul Stock Checker uses for authentication, stock monitors, WhatsApp alerts, analytics, location detection, and data deletion.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <SeoPage
      title="Privacy and Data Use"
      description="This page explains the information involved when you sign in, create a monitor, request pincode detection, or use the Amul Stock Checker website."
      path="/privacy"
      showCta={false}
    >
      <p className="text-sm">Last updated: July 22, 2026</p>

      <section className="space-y-4">
        <h2>Project scope</h2>
        <p>
          Amul Stock Checker is an independent open-source project operated by
          Om Shejul. It is not an official Amul or GCMMF service. This notice
          describes the frontend application and the information needed to
          provide product monitoring and WhatsApp notifications.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Information used by the service</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">Google account information:</strong> your name,
            email address, and profile image may be received through Google sign-in
            so the application can authenticate you and associate monitors with your account.
          </li>
          <li>
            <strong className="text-foreground">Monitor information:</strong> the Amul product
            URL, delivery pincode, WhatsApp phone number, selected check interval,
            creation time, and subscription status are sent to the monitoring backend.
          </li>
          <li>
            <strong className="text-foreground">Technical and usage information:</strong> the
            site uses PostHog to understand feature usage and diagnose errors. This
            may include browser, device, page, interaction, network, and error information.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>How the information is used</h2>
        <p>
          Account information is used to sign you in and return the subscriptions
          associated with your email address. Monitor information is used to run
          scheduled product checks and send the requested WhatsApp notification.
          Usage information helps maintain and improve the website, understand
          whether features work, and investigate failures.
        </p>
        <p>
          Do not submit a phone number that you do not control or have permission
          to use. The service is intended for personal stock notifications.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Optional pincode detection</h2>
        <p>
          Location access is optional. When you press the location button, the
          browser asks for permission and provides approximate coordinates if you
          approve. Those coordinates are sent from your browser to BigDataCloud
          for reverse geocoding, or to LocationIQ when that fallback is configured,
          to find a postal code. The page then places the returned pincode into
          the form. You can deny permission and enter a pincode manually.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Third-party services</h2>
        <p>
          The application relies on Google for authentication, PostHog for
          analytics and error monitoring, a monitoring backend for scheduled
          checks, WhatsApp-related delivery infrastructure for notifications,
          BigDataCloud or LocationIQ for optional reverse geocoding, and YouTube
          for the embedded tutorial. These services may process information under
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
          Subscription records include lifecycle statuses such as active, expired,
          and deleted. Deleting a monitor stops it from appearing in your active
          list; backend records may be retained for operational history, security,
          and troubleshooting. Specific retention periods are not promised by the
          current open-source project.
        </p>
        <p>
          To stop a monitor, sign in and select Delete under Your Subscriptions.
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
          security or uninterrupted availability. Use the service only if you
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
