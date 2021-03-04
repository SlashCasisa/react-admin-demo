import loadable from '@/utils/loadable'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/home'))

const routes = [
    { path: '/admin', exact: true, name: '主页面', component: Index, auth: [0,1] },
    { path: '/', exact: true, name: '登录页面', component: Index, auth: [0,1] },
]

export default routes