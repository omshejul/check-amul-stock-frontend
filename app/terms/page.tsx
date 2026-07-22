import { SeoPage } from "@/components/seo/seo-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "Terms for using the independent Amul Stock Checker, including service limitations, acceptable use, third-party services, and the unofficial-project disclaimer.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <SeoPage
      title="Terms of Use"
      description="These terms describe the conditions and limitations that apply when you use Amul Stock Checker."
      path="/terms"
      showCta={false}
    >
      <p className="text-sm">Last updated: July 22, 2026</p>

      <section className="space-y-4">
        <h2>Acceptance</h2>
        <p>
          By using Amul Stock Checker, you agree to these terms. If you do not
          agree, do not create a monitor or use the service. The project may
          update these terms as its features, infrastructure, or legal
          requirements change.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Independent notification service</h2>
        <p>
          Amul Stock Checker is an independent, unofficial open-source project.
          It is not affiliated with, endorsed by, or sponsored by Amul or GCMMF.
          The service provides scheduled availability checks and notifications;
          it is not a retailer, purchasing agent, inventory provider, or part of
          the official Amul Shop.
        </p>
      </section>

      <section className="space-y-4">
        <h2>No guarantee of availability or delivery</h2>
        <p>
          Checks are periodic rather than continuous. A product may become
          available and sell out between checks, or availability may change
          after an alert is sent. A notification does not reserve inventory,
          guarantee delivery to a pincode, lock a price, create an order, or
          guarantee that checkout will succeed.
        </p>
        <p>
          Confirm the product, variant, pincode, price, availability, delivery
          terms, and payment details directly on the official store before making
          any purchase decision.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>submit a phone number or account information you do not control or have permission to use;</li>
          <li>use the service to harass, spam, deceive, or send unwanted messages;</li>
          <li>attempt to bypass authentication, access another user&apos;s subscriptions, or obtain server credentials;</li>
          <li>interfere with the service, overload it, probe it for vulnerabilities without permission, or misuse its APIs;</li>
          <li>use the project in a way that violates applicable law or third-party terms.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Accounts and monitor information</h2>
        <p>
          Google sign-in is used to identify your account. You are responsible
          for the security of that Google account and for the accuracy of the
          product URL, pincode, phone number, and interval you submit. Delete
          monitors that you no longer need and report suspected unauthorized
          access promptly.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Third-party services and links</h2>
        <p>
          Authentication, analytics, geocoding, messaging, embedded video, and
          product links rely on third-party services. Their availability and
          behavior are outside this project&apos;s control and may be governed by
          separate terms. A link or integration does not imply responsibility
          for third-party content, products, privacy practices, or transactions.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Availability and changes</h2>
        <p>
          The service is provided on an as-available basis. Features, intervals,
          integrations, or access may change, pause, or stop without notice.
          There is no promise of uninterrupted, error-free, or permanently free
          operation. The open-source license applies to the published source code;
          it does not guarantee operation of a hosted instance.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Disclaimer and limitation</h2>
        <p>
          To the maximum extent permitted by applicable law, the service is
          provided without warranties of merchantability, fitness for a
          particular purpose, availability, or accuracy. The maintainer is not
          liable for missed stock, missed or delayed notifications, purchasing
          decisions, third-party outages, lost data, or indirect or consequential
          losses arising from use of the service.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Privacy and contact</h2>
        <p>
          Review the <a className="text-primary underline" href="/privacy">Privacy and Data Use page</a> for
          information about authentication, subscriptions, analytics, location
          detection, and deletion. For general questions, contact the maintainer
          through the <a className="text-primary underline" href="https://github.com/omshejul" target="_blank" rel="noopener noreferrer">linked GitHub profile</a>.
        </p>
      </section>
    </SeoPage>
  );
}
