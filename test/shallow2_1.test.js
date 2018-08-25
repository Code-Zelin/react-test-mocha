import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import TodoItem from '../app/components/TodoItem';

function shallowRender(Component, props) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component {...props} />);
  return renderer.getRenderOutput();
}

describe('检测组件是否可用', function() {
  it('该组件正常情况下不应该有todo-done类名', function() {
    const todoItemData = {
      id: 1,
      name: 'abc',
      done: false,
    };
    const todoItem = shallowRender(TodoItem, {
      todo: todoItemData
    });
    const index = todoItem.props.children[0].props.className.indexOf('todo-done');
    console.log("todo-done序号", index);
    expect(index).to.equal(-1);
  });
})