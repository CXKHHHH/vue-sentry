import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as Sentry from "@sentry/vue";
Vue.config.productionTip = false;
Sentry.init({
  Vue,
  dsn: "https://f54565d3c70c1dd34d75e9b21d85b126@o4506386935185408.ingest.sentry.io/4506387478544384",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [],
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
