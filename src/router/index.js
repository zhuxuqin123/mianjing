import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '../views/layout.vue'
import ArticleDetail from '../views/article-det.vue'
import Article from '../views/article.vue'
import Collect from '../views/collect.vue'
import Like from '../views/like.vue'
import User from '../views/user.vue'
Vue.use(VueRouter)
const router=new VueRouter({
    mode:'history',
    routes:[
        {path:'/',component:Layout,redirect:'/article',
        children:[ { path: '/article', component: Article },
        { path: '/collect', component: Collect },
        { path: '/like', component: Like },
        { path: '/user', component: User },]},
        {path:'/detail/:id',component:ArticleDetail}
    ]
})
export default router