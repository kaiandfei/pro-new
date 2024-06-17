export default{
    install(Vue) {
        const controlFiles = require.context("../components/control", true, /\index.vue$/);
        controlFiles.keys().forEach((item) => {
            const name = item.split("/")[1];
            Vue.component(`com-${name}`,controlFiles(item).default)
        });
    }
}