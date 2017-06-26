import React from 'react';
import { Menu, Tabs, Row, Col, Icon, Button, Form, Input, notification,Tooltip,Cascader,Select,Checkbox,AutoComplete } from 'antd';
const MenuItem= Menu.Item;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];


class HeaderComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      categoryItems: [],
      isLogin:false,
      showModal:false,
      selectKey : [],
      confirmDirty: false,
        autoCompleteResult: []
    }
  }

  

  /*注册部分*/
  handleRegisterSubmit(e){
    e.preventDefault();
      this.props.form.validateFields(['register'],(err, values) => {
        if (!err) {
          this.props.RegisterLinks();
          alert("注册成功");
        }
      });
  }
  /*确认密码*/
  handleConfirmBlur(e){
    const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword(rule, value, callback){
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password_reg')) {
        callback('两次密码不一致，亲，张大眼睛看一看');
      } else {
        callback();
      }
  }

  checkConfirm(rule, value, callback){
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
  }  

  handleWebsiteChange(value){
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 6 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 14 },
            },
          };
      const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 14,
                offset: 6,
              },
            },
          };
    const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
          })(
            <Select style={{ width: 60 }}>
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>
          );
    const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));


    return(
      <Form onSubmit={this.handleRegisterSubmit.bind(this)}>
            <FormItem {...formItemLayout} label="E-mail"  hasFeedback>
              {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: '邮箱地址输入不合法',
                  }, {
                    required: true, message: '请输入你的邮箱号码',
                  }],
              })(
                  <Input />
              )}
            </FormItem>
            <FormItem  {...formItemLayout} label="Password" hasFeedback>
                {getFieldDecorator('password_reg', {
                    rules: [{
                      required: true, message: '请输入密码',
                }, {
                      validator: this.checkConfirm.bind(this),
                    }],
                })(
                    <Input type="password" />
                )}
            </FormItem>
            <FormItem  {...formItemLayout} label="Confirm Password"  hasFeedback>
                {getFieldDecorator('confirm', {
                    rules: [{
                      required: true, message: '请确认你的密码',
                }, {
                      validator: this.checkPassword.bind(this),
                    }],
                })(
                    <Input type="password" onBlur={this.handleConfirmBlur.bind(this)} />
                )}
            </FormItem>
            <FormItem {...formItemLayout}
                label={(
                  <span>
                    Nickname&nbsp;
                    <Tooltip title="不是绰号，亲们，是昵称，昵称">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                )}
                hasFeedback
              >
                {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: '请输入你的昵称', whitespace: true }],
                })(
                    <Input />
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="Habitual Residence">
                {getFieldDecorator('residence', {
                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                    rules: [{ type: 'array', required: true, message: '请输入你的常住地址' }],
                })(
                    <Cascader options={residences} />
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="Phone Number">
                {getFieldDecorator('phone', {
                    rules: [{ required: true, message: '请输入你的电话号码' }],
                })(
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="Website">
                {getFieldDecorator('website', {
                    rules: [{ required: true, message: 'Please input website!' }],
                })(
                    <AutoComplete
                      dataSource={websiteOptions}
                      onChange={this.handleWebsiteChange.bind(this)}
                      placeholder="website"
                    >
                      <Input />
                    </AutoComplete>
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="Captcha" extra="我们必须确保你是成年人">
                <Row gutter={8}>
                    <Col span={12}>
                      {getFieldDecorator('captcha', {
                        rules: [{ required: true, message: '请输入验证码' }],
                      })(
                        <Input size="large" />
                      )}
                    </Col>
                    <Col span={12}>
                      <Button size="large">Get captcha</Button>
                    </Col>
                </Row>
            </FormItem>
            <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                })(
                    <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit" size="large">Register</Button>
            </FormItem>
          </Form> 
            
    ) 
  }
}

export default Form.create()(HeaderComponent);