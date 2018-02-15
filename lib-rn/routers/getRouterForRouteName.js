import invariant from '../utils/invariant';

/**
 * Simple helper that gets a router out of the navigation config.
 * If the config specifies a `getScreen` getter, it must also specify
 * `router: true` if it contains a router; otherwise, it will be missed.
 * (This is to facilitate lazy loading of non-router screens.)
 */
export default function getRouterForRouteName(routeConfigs, routeName) {
  const routeConfig = routeConfigs[routeName];

  if (!routeConfig) {
    throw new Error(`There is no route defined for key ${routeName}.\n` + `Must be one of: ${Object.keys(routeConfigs).map(a => `'${a}'`).join(',')}`);
  }

  if (routeConfig.screen) {
    return routeConfig.screen.router;
  }

  if (typeof routeConfig.getScreen === 'function' && routeConfig.router) {
    const screen = routeConfig.getScreen();
    invariant(typeof screen === 'function', `The getScreen defined for route '${routeName} didn't return a valid ` + 'screen or navigator.\n\n' + 'Please pass it like this:\n' + `${routeName}: {\n  getScreen: () => require('./MyScreen').default\n}`);
    return screen.router;
  }

  throw new Error(`Route ${routeName} must define a screen or a getScreen.`);
}