import Vue from 'vue'
import Router from 'vue-router'
import MealIndex from '../views/mealApply/index.vue'
import MealNewlApply from '../views/mealApply/newApply.vue'
import MealApproval from '../views/mealApply/approval.vue'
import MealInfo from '../views/mealApply/mealInfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mealApply/index',
      name: 'MealIndex',
      component: MealIndex,
      meta: {
        title: '用餐申请'
      }
    },
    {
      path: '/mealApply/newApply',
      name: 'MealNewlApply',
      component: MealNewlApply,
      meta: {
        title: '用餐申请'
      }
    },
    {
      path: '/mealApply/approval',
      name: 'MealApproval',
      component: MealApproval,
      meta: {
        title: '待我审批'
      }
    },
    {
      path: '/mealApply/mealInfo',
      name: 'MealInfo',
      component: MealInfo,
      meta: {
        title: '待我审批'
      }
    }

  ]
})
