import React from 'react';
import { BackTop} from 'antd';

export default class ClickTopComponent extends React.Component {
	render() {
		return (
			<div className="js-clickTop">
			    <BackTop>
			      <div className="ant-back-top-inner">返回顶部</div>
			    </BackTop>
			  </div>
			  
		)
	}
}

