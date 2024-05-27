import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home/index.vue'
import Activity from './views/Activity.vue'
import Promotion from './views/Promotion.vue'
import Wallet from './views/Wallet.vue'
import Account from './views/Account.vue'
import Wingo from './views/Home/Wingo.vue'
import K3 from '@/views/Home/K3.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/activity', name: 'activity', component: Activity },
    { path: '/promotion', name: 'promotion', component: Promotion },
    { path: '/wallet', name: 'wallet', component: Wallet },
    { path: '/account', name: 'account', component: Account },
    { path: '/home/lotterygames/wingo', name: 'wingo', component: Wingo},
    { path: '/home/lotterygames/k3', name: 'k3', component: K3},
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  const app = createApp(App)
  app.use(router)
  app.mount('#app')