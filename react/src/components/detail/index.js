import React from 'react';
import FooterComponent from '../common/footer.js';
import HeaderComponent from '../common/header.js';
import ContentComponent from './content.js';
import LinkComponent from '../index/link.js';
import ClassifyComponent from '../index/classify.js';
import ClickTopComponent from '../index/clickTop.js';
import MessageComponent from '../index/message.js';




export default class DetailComponent extends React.Component {

	
	render() {
		return (
			<div>
				<HeaderComponent/>
				<ClassifyComponent/>
				<ContentComponent id={this.props.params.id}/>
				<MessageComponent/>
				 <LinkComponent/>
				 <ClickTopComponent/>
				 <FooterComponent/>
				
			</div>
		)
}
}