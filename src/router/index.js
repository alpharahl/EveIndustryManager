
import VueRouter from 'vue-router';
import Home from "@/components/Home";


const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
