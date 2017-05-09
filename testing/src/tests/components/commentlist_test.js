import { renderComponent, expect } from '../test_helper.js';
import CommentList from '../../components/CommentList';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['new comment', 'other new comment']};
    // 3rd arg: props passed into component
    component = renderComponent(CommentList, null, props);
  });

  it('has the CommentList class', () => {
    expect(component).to.have.class('CommentList');
  });

  it('shows a list item for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('other new comment');
  });
});