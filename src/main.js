import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as Sentry from "@sentry/vue";
Vue.config.productionTip = false;
Sentry.init({
  Vue,
  dsn: "https://1fecee35d52d0c91e3c21faa572c9cbd@o4506386935185408.ingest.sentry.io/4506386975555584",
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
