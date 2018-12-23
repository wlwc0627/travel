import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Detailpage from '@/pages/detailPage/Detailpage'
import Comment from '@/pages/comment/Comment'
import Map from '@/pages/map/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/detailpage',
      name: 'Detailpage',
      component: Detailpage
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
