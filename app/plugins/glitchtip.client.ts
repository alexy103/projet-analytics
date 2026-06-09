import * as Sentry from "@sentry/vue";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: "http://5eac1a85ec6f4535b827f2e723dee9cb@localhost:8000/1",
    tracesSampleRate: 1,
    integrations: [Sentry.browserTracingIntegration()],
  });
});
