import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import Home from '@/components/Home'
import Home1 from '@/components/Home1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/use',
      name: 'HelloWorld',
      redirect:{
        name:'fo',
        params:{
          id:1
        }
      },
      // alias:'/b',
      component: HelloWorld
    },
    {
      path: '/foo/:id',
      name:'fo',
      children:[
        {
          path:'bar',
          component:Home,
          children:[
            {
              path:'bar1',
              component:Home1
            }
          ]
        }
      ],
      component: User,
      props:(route)=>{
        console.log(route)
        return {
          id:route.params.id
        }
      }
    }
  ]
})
