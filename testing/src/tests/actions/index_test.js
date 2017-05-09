import { expect } from '../test_helper';
import { saveComment, SAVE_COMMENT } from '../../actions';

describe('actions', () => {

  describe('saveComment', () => {

    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = saveComment('new comment');
      expect(action.payload).to.equal('new comment');
    });
  });
});