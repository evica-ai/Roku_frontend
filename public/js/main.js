// imports always go at the top
import LogInPage from './components/TheLoginComponent.js';
import AllUsersPage from './components/TheAllUsersComponent.js';
import DefaultHome from './components/TheHomePage.js';
import KidsHome from './components/TheKidsHomePage.js';
//import ErrorPage from './modules/ErrorPage.js';

const { createApp } = Vue; //import the createApp method from the Vue library

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes: [
        { 
            path: '/', //brower location bar looks like this
            name: 'login', //for programmatiuc navigation
            component: LogInPage // the component to render
        },
        // temporary testing route for testing database connection
        // { 
        //     path: '/', //brower location bar looks like this
        //     name: 'allusers', //for programmatiuc navigation
        //     component: AllUserPage // the component to render
        // },
        { 
            path: '/users', //brower location bar looks like this
            name: 'allusers', //for programmatiuc navigation
            component: AllUsersPage // the component to render
        },

        {
            path: '/home', //this would be the adult home page
            name: 'home',
            component: DefaultHome
        },

        {
            path: '/kidshome', //this would be the kid home page
            name: 'kidshome',
            component: KidsHome
        },

        //put a catch-all for broken routes at the very bottom of your routes stack
        //if vue router cant match a give route, itll display a generic error component
        // { 
        //     path: '/:pathMatch(.*)*', //brower location bar looks like this
        //     name: 'error', //for programmatiuc navigation
        //     component: ErrorPage // the component to render
        // }
    ] // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
  const app = Vue.createApp({
    methods: {
        tryRouterPush() {
            //programmatic routing
            this.$router.push({
                name: 'users'
            })
        }
    }
  });
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router);
  
  app.mount('#app');