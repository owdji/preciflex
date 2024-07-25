
// routeUtils.js
import { matchPath } from 'react-router-dom';

export const getLuxuryRoutes = (routes) => {
  const luxuryRoutes = [];

  const findLuxuryRoutes = (routeArray) => {
    routeArray.forEach(route => {
      if (route.path && route.path.startsWith('/luxury')) {
        if (route.path !== '/luxury') {
          luxuryRoutes.push({
            path: route.path,
            name: route.name || route.path.split('/').pop()
          });
        }
      }
      if (route.children) {
        findLuxuryRoutes(route.children);
      }
    });
  };

  findLuxuryRoutes(routes);
  return luxuryRoutes;
};

export const isLuxuryRoute = (pathname) => {
  return matchPath({ path: '/luxury/*' }, pathname) !== null;
};