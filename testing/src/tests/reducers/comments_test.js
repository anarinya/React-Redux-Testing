import { expect } from '../test_helper';
import { saveComment } from '../../actions';
import CommentsReducer from '../../reducers/CommentsReducer';

describe('CommentsReducer', () => {
  it('handles action with unknown type', () => {
    // asserts instance of array
    expect(CommentsReducer()).to.be.instanceof(Array);
    // asserts its an empty array
    expect(CommentsReducer()).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' };
    expect(CommentsReducer([], action)).to.eql(['new comment']);
  });
});