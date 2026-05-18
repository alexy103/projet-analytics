import * as Sentry from "@sentry/vue";

export default defineNuxtPlugin((nuxtApp) => {
  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: "http://5dc6b5abc7bd42de9cb66c797d258255@127.0.0.1:8000/1",
    tracesSampleRate: 0.01, // 1% of transactions — adjust to your needs
    autoSessionTracking: false, // GlitchTip does not support sessions
  });
});
