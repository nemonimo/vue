import Vue from 'vue'
import Router from 'vue-router'
import Parent from '@/components/Parent'
import Child from '@/components/Child'
import Modal from '@/components/Modal'
import ContentsChecker from '@/components/ContentsChecker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Parent,
      children: [
        {
          path: '',
          components: {
            child: Child,
            modal: Modal,
            contentsChecker: ContentsChecker
          }
        }
      ]
    }
  ]
})
