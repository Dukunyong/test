import React from 'react';
import { Card } from 'antd';
import { Form,  Col, Menu, Row} from 'antd';
const MenuItem = Menu.Item;

export default class FooterComponent extends React.Component {

	

	render() {
		return (
			<div className="index-footer">
			<Card>
			   {
			     
			     	<Col span={24}>
						
							<div className="footer">本网站由 <span className="text-color">EasyVOA</span> 开发上线 © 2011-2014 <span className="text-color">手机版EasyVOA</span></div>
  							<div className="footer">网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</div>
							<div className="footer">51.La 网站流量统计系统  </div>
						
			     	</Col>	
			    
			    }
			    </Card>
			</div>
		)
	}
}