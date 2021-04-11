import Vue from 'vue'
import Router from 'vue-router'
import Componentes from '@/components/Componentes'
import Style from '@/components/Style'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Style',
      component: Style
    },
    {
      path: '/componentes',
      name: 'Componentes',
      component: Componentes
    }
  ]
})
