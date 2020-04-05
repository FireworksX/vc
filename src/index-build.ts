import Root from "./components/Root.vue";

const components = {
  Root
};

export function install(Vue: any, options = {}) {
  Object.keys(components).forEach(key => {
    // @ts-ignore
    Vue.component("vc-" + key.toLowerCase(), components[key]);
  });
}
