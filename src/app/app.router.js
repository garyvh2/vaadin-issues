/**
 * Router Helpers
 */
import { addRoutes } from "./utils/router-helpers";
import redirects from "./app.redirects";

/**
 * Locations
 */
import {
  HOME,
  LOGIN,
  CONTENT_PARENT
} from './app.location';

import './components/navigation'

export function loadRoutes() {
  addRoutes([...redirects, 
    LOGIN.toRoute(),{
    path: "/",
    component: "navigation-component",
    action: (context, command) => undefined,
    children: [
      HOME.toRoute(),
      CONTENT_PARENT.toRoute()
    ]
  }]);
}