# Event tracking report

This document lists all PostHog events that have been automatically added to your Next.js application.

## Events by File

### app/auth/signin/page.tsx

- **signin_initiated**: Fired when a user clicks a button to sign in with a specific authentication provider.

### app/page.tsx

- **stock-subscription-created**: Fires when a user successfully creates a new stock monitoring subscription via the form.
- **how-it-works-accordion-opened**: Tracks when a user opens the 'How It Works' accordion to learn more about the service.

### components/PhoneInput.tsx

- **phone-input-country-changed**: Fired when a user selects a new country from the phone input's country code dropdown.

### components/auth/sign-in-button.tsx

- **sign_in_clicked**: User clicked the 'Sign in with Google' button to initiate the authentication process.

### components/auth/sign-out-button.tsx

- **user_signed_out**: Fired when a user clicks the sign-out button.

### components/navbar.tsx

- **user-signed-out**: Fired when a user clicks the 'Sign out' button from their profile dropdown in the navbar.
- **sign-in-clicked**: Fired when a user clicks the 'Sign in' button in the navbar.

### components/stock-checker/stock-checker-form.tsx

- **stock-monitor-subscription-created**: Fired when a user successfully submits the form to create a new stock monitoring subscription.
- **stock-monitor-subscription-failed**: Fired when the attempt to create a stock monitoring subscription fails after form submission.

### components/stock-checker/subscriptions-list.tsx

- **stock_subscription_deleted**: Fired when a user successfully deletes a stock monitoring subscription.

### components/theme-toggle.tsx

- **theme_changed**: Fired when a user changes the application theme from the theme toggle dropdown.


## Events still awaiting implementation
- (human: you can fill these in)
---

## Next Steps

1. Review the changes made to your files
2. Test that events are being captured correctly
3. Create insights and dashboards in PostHog
4. Make a list of events we missed above. Knock them out yourself, or give this file to an agent.

Learn more about what to measure with PostHog and why: https://posthog.com/docs/new-to-posthog/getting-hogpilled
