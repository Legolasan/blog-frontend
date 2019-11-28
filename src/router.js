import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/post/Home'
import EditComponent from '@/components/post/Edit'
import CreateComponent from '@/components/post/Create'
import PostComponent from '@/components/post/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'Home' } },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    { path: '/edit/:id', name: 'Edit', component: EditComponent },
    { path: '/post/:id', name: 'Post', component: PostComponent }
  ]
})
