import * as Sentry from "@sentry/vue";

export default defineNuxtPlugin((nuxtApp) => {
  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: "http://5eac1a85ec6f4535b827f2e723dee9cb@localhost:8000/1",
    tracesSampleRate: 0.01, // 1% of transactions — adjust to your needs
    autoSessionTracking: false, // GlitchTip does not support sessions
  });
});
