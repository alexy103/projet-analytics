import * as Sentry from "@sentry/vue";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: "http://01e8afe3f49e40b89fcd98ca27e48957@localhost:8000/1",
    tracesSampleRate: 1,
    integrations: [Sentry.browserTracingIntegration()],
  });
});
