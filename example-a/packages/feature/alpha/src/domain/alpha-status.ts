/**
 * zodを使って表現してもいい
 */

export const alphaStatus = {
  alpha: 'alpha',
  beta: 'beta',
  released: 'released',
} as const;

export type AlphaStatus = (typeof alphaStatus)[keyof typeof alphaStatus];

export const alphaStatusList = [alphaStatus.alpha, alphaStatus.beta, alphaStatus.released] as const;
