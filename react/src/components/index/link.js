import React from 'react';
import { Card } from 'antd';
import { Form,  Col, Menu, Row} from 'antd';
const MenuItem = Menu.Item;

export default class LinkComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			categoryItems: []

		}
	}
	componentDidMount() {
		fetch('/mock/link.json').then((response)=>{
			return response.json();
			console.log(json)
		}).then((json) => {

			this.setState({
				categoryItems: json.data.text
			})
		});
	}
	render() {
		return (
			<div className="js-link">
				<Card title="VOA 友情链接" style={{ width: 1024}}>
			   { 
			     	<Col span={24}>
						<Menu mode="horizontal">
  							{
  								this.state.categoryItems.map((value, index) => {
  								return <MenuItem key={'category_' + value.category_id}>{value.category_name}</MenuItem>
  								})
  							}
						</Menu>
			     	</Col>	
			    
			    }
			  </Card>
			</div>
		)
	}
}