import Vue from 'vue'
import Router from 'vue-router'
import Parent from '@/components/Parent'
import Child from '@/components/Child'
import Child2 from '@/components/Child2'
import Child3 from '@/components/Child3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/parent',
      component: Parent,
      children: [
        {
          path: '',
          components: {
            child: Child,
            child2: Child2,
            child3: Child3
          }
        }
      ]
    }
  ]
})
