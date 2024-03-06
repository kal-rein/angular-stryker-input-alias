import { declareValuePlugin, PluginKind } from '@stryker-mutator/api/plugin';

export const strykerPlugins = [declareValuePlugin(PluginKind.Ignore, 'angular.signal-model-input-options', {
  shouldIgnore(path) {
    const inputOrModelExpression = path.findParent((path) =>
      path.isCallExpression() &&
      path.node.callee.type === 'Identifier' &&
      (path.node.callee.name === 'input' || path.node.callee.name === 'model'),
    );

    if (path.isObjectExpression() && inputOrModelExpression != null) {
      return 'Angular signal or model input options cannot be mutated as that causes issues with the ivy compiler.';
    }
  },
})];
