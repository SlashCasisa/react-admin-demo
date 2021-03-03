import loadable from '@/utils/loadable'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/home'))

const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [0,1] },
]

export default routes