import { describe, test, expect } from 'vitest';
import { getUrlPath, getUrlParams, getRouteTxt } from './index';

describe('route', () => {
  test('getUrlPath default', () => {
    expect(getUrlPath('/user/[account]', { account: 'k001' })).toBe('/user/k001');
  });

  test('getUrlPath error match', () => {
    expect(getUrlPath('/user/[account]', { id: 'k001' })).toBe('/user/path_error');
  });

  test('getUrlPath {}', () => {
    expect(getUrlPath('/user/[account]', {})).toBe('/user/path_error');
  });

  test('getUrlParams default', () => {
    expect(getUrlParams('/question', { account: 'k001', id: 'a333' })).toBe('/question?account=k001&id=a333');
  });

  test('getUrlParams {}', () => {
    expect(getUrlParams('/question', {})).toBe('/question');
  });

  test('getRouteTxt', () => {
    expect(getRouteTxt('draw')).toBe('/draw');
  });
});
