import './assets/scss/reset.scss';
import 'element-ui/lib/theme-chalk/index.css';
import {
    Menu,
    MenuItem,
    ColorPicker,
} from 'element-ui';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 使用elementui，按需引用
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(ColorPicker.name, ColorPicker);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
