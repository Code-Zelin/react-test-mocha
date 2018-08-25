import React from 'react';
import { expect } from 'chai';
import TestUnits from 'react-addons-test-utils';
import App from '../app/components/App';
import { findDOMNode } from 'react-dom';


const app = TestUnits.renderIntoDocument(<App/>);
const appDom = findDOMNode(app);

describe('测试添加功能', function() {
  it('若有内容，点击add按钮，则数组长度加一', function() {
    const oldLength = appDom.querySelectorAll('li').length;

    const addTodoDom = appDom.querySelector('.add-todo');
    const inputDom = addTodoDom.querySelector('input');
    inputDom.value = 'test todo';
    const btnDom = addTodoDom.querySelector('button');
    TestUnits.Simulate.click(btnDom);

    const newLength = appDom.querySelectorAll('li').length;

    expect(newLength).to.equal(oldLength + 1);
  });

  it('如果没有内容，点击add按钮，不应该有任何效果', function() {
    const oldLength = appDom.querySelectorAll('li').length;

    const addTodoDom = appDom.querySelector('.add-todo');
    const btnDom = addTodoDom.querySelector('button');
    TestUnits.Simulate.click(btnDom);

    const newLength = appDom.querySelectorAll('li').length;

    expect(newLength).to.equal(oldLength);
  });

  it('测试一下点击第一个li，是否会改变类名', function() {
    const firstDom = appDom.querySelector('li:first-child span');

    const isDone = firstDom.classList.contains('todo-done');
    TestUnits.Simulate.click(firstDom);

    expect(firstDom.classList.contains('todo-done')).to.be.equal(!isDone);
  });
});