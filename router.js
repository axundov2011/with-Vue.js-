import home from './home.vue'
import haqqinda from './about'
import elaqe from './contact'
import altbilgi from './footer'
import nav from './navbar'



export const routes  = [
    { path:'/', component:home},
    {path: '/about', component: haqqinda},
    {path: '/contact', component: elaqe},
    {path: './footer', component: altbilgi},
    {path: './navbar', component: nav}


    
]