// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/skan/style/basestyle.css';
import './assets/skan/style/backgrounds.css';
import './assets/skan/style/box_alignment.css';
import './assets/skan/style/flexbox.css';
import './assets/skan/style/border.css';
import './assets/skan/style/layout.css';
import './assets/skan/style/normalize.css';
import './assets/skan/style/shadows.css';
import './assets/skan/style/sizing.css';
import './assets/skan/style/spacing.css';
import './assets/skan/style/typography.css';

import './assets/skan/skancustom.css';

import './assets/skan/componentes/animaciones.css';
import './assets/skan/componentes/botones.css';
import './assets/skan/componentes/inputs.css';
import './assets/skan/componentes/sidebar.css';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
