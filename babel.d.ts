/// <reference types="@stryker-mutator/api/ignore" />
import type babel from '@babel/core';

declare module '@stryker-mutator/api/ignore' {
  export interface NodePath extends babel.NodePath {}
}
