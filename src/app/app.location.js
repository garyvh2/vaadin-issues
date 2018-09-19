import {
  Location
} from './utils/router-helpers';

export const HOME = new Location('/home', {
  component: "home-view",
  action: () => {
    import("./views/home.js")
  }
});

export const LOGIN = new Location('/login', {
  component: "login-view",
  action: () => {
    import("./views/login.js")
  }
})



export const CONTENT_PARENT = new Location('/contents', {
  children: () => import('./routes/content.routes.js').then(module => module.default)
})

export const CONTENT = new Location('/content', {
  component: "content-view",
  action: () => {
    import("./views/content.js")
  }
}, CONTENT_PARENT)