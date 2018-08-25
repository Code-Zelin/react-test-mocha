import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import App from '../app/components/App';


describe('测试点击按钮删除功能', function() {
  it('点击删除后，数组的长度会减一', function() {
    const app = TestUtils.renderIntoDocument(<App/>);
    // 获取长度
    const liList = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
    const oldLength = liList.length;
    // 点击删除按钮
    TestUtils.Simulate.click(liList[0].querySelector('button'));
    // 再次获取长度
    const afterLiList = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
    const newLength = afterLiList.length;
    // 断言
    expect(newLength).to.equal(oldLength - 1);
  });
});