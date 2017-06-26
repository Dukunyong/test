import React from 'react';
import FooterComponent from '../common/footer.js';
import HeaderComponent from '../common/header.js';
import ContentComponent from './content.js';
import LinkCompont from "./link.js";
import LableComponent from './lable.js';
import ClassifyComponent from './classify';
import ClickTopComponent from '../index/clickTop.js';

export default class IndexComponent extends React.Component {
	render() {
		return (
			<div>
				<HeaderComponent/>
				<ClassifyComponent/>
				<LableComponent/>
				<ContentComponent/>
				<LinkCompont/>
				 <ClickTopComponent/>
				<FooterComponent/>
				
			</div>
		)
	}
}