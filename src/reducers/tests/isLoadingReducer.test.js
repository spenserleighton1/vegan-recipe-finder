import { isLoadingReducer } from '../isLoadingReducer';
import * as actions from '../../actions';

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    const results = isLoadingReducer(undefined, {});

    expect(results).toBe(false);
  });

  it('should return a boolean', () => {
    const expected = true
    const results = isLoadingReducer(undefined, actions.isLoading(true))

    expect(results).toEqual(expected);
  });
    it('should return a boolean', () => {
    const expected = false
    const results = isLoadingReducer(undefined, actions.isLoading(false))

    expect(results).toEqual(expected);
  });
});