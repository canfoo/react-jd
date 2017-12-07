// 普通组件Login
import React, { Component } from 'react';
import formCreate from './formCreate';

@formCreate
export default class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <label id="username">
            账户
          </label>
          <input name="username" {...this.props.getField('username')}/>
        </div>
        <div>
          <label id="password">
            密码
          </label>
          <input name="password" {...this.props.getField('password')}/>
        </div>
        <button onClick={this.props.handleSubmit}>提交</button>
      </div>
    )
  }
}
