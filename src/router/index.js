import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Farmer from '@/components/Farmer'

import Article from '@/components/common/Article'

import Quiz from '@/components/quiz/Quiz'

import Psychological from '@/components/psychological/Psychological'
import UnderDepression from '@/components/psychological/UnderDepression'
import TreatmentOptions from '@/components/psychological/TreatmentOptions'
import FAQ from '@/components/psychological/FAQ'

import Tips from '@/components/tips/Tips'
import Medicine from '@/components/tips/Medicine'
import PhysicsTherapy from '@/components/tips/PhysicsTherapy'

Vue.use(Router)

// TODO: 研究下eslint和jsformat,js后面加；
export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/index',
    name: 'Index',
    component: Index
  }, {
    path: '/farmer',
    name: 'Farmer',
    component: Farmer
  }, {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  }, {
    path: '/psychological',
    name: 'Psychological',
    component: Psychological
  }, {
    path: '/psychological/underDepression/',
    name: 'UnderDepression',
    component: UnderDepression
  }, {
    path: '/psychological/underDepression/:id',
    name: Article,
    component: Article
  }, {
    path: '/psychological/treatmentOptions',
    name: 'TreatmentOptions',
    component: TreatmentOptions
  }, {
    path: '/psychological/faq',
    name: 'FAQ',
    component: FAQ
  }, {
    path: '/tips',
    name: 'Tips',
    component: Tips
  }, {
    path: '/tips/medicine',
    name: 'Medicine',
    component: Medicine
  }, {
    path: '/tips/medicine/:id',
    name: 'Article',
    component: Article
  }, {
    path: '/tips/physicsTherapy',
    name: 'PhysicsTherapy',
    component: PhysicsTherapy
  }]
})
