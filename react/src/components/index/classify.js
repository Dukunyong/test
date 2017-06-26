import React from 'react';
import { Row, Col } from 'antd';
export default class ClassifyComponent extends React.Component {
	render() {
		return (
			<div className="js-classify">
				<div className="js-border">
			    <Row className="js-row">
			      <Col span={4} className="js-row-s">常用英语</Col>
			      <Col span={10} className="js-row-s">慢速英语(中级)</Col>
			      <Col span={10}>英语教学(高级)</Col>
			    </Row>
			    <Row className="js-row-right">
			      <Col span={4} className="js-row-s">
			      	  <Row>音频</Row>
			      	  <Row>视频</Row>
			      	  <Row>翻译</Row>
			      </Col>
			      <Col span={10} className="js-row-s">
			     	  <Row>
			     	  	 <Col span={6}>常用英语</Col>
					      <Col span={6}>慢速英语(中级)</Col>
					      <Col span={6}>英语教学(高级)</Col>
					      <Col span={6}>英语教学(高级)</Col>
			     	  </Row>
			      	  <Row>
			      	  	 <Col span={6}>常用英语</Col>
					      <Col span={6}>慢速英语(中级)</Col>
					      <Col span={6}>英语教学(高级)</Col>
					      <Col span={6}>英语教学(高级)</Col>
			      	  </Row>
			      	  <Row>
			      	  	 <Col span={6}>常用英语</Col>
					      <Col span={6}>慢速英语(中级)</Col>
					      <Col span={6}>英语教学(高级)</Col>
					      <Col span={6}></Col>
			      	  </Row>
			      </Col>
			      <Col span={10}>
			      	  <Row>
			     	  	 <Col span={6}>常用英语</Col>
					      <Col span={6}>慢速英语(中级)</Col>
					      <Col span={6}>英语教学(高级)</Col>
					      <Col span={6}>英语教学(高级)</Col>
			     	  </Row>
			      	  <Row>
			      	  	 <Col span={6}>常用英语</Col>
					      <Col span={6}>慢速英语(中级)</Col>
					      <Col span={6}>英语教学(高级)</Col>
					      <Col span={6}>英语教学(高级)</Col>
			      	  </Row>
			      	  <Row>
			      	  	 <Col span={6}>常用英语</Col>
					      <Col span={6}>慢速英语(中级)</Col>
					      <Col span={6}>英语教学(高级)</Col>
					      <Col span={6}>英语教学(高级)</Col>
			      	  </Row>
			      </Col>
			    </Row>
			  </div>
			</div>
		)
	}
}



  
