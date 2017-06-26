import React from 'react';
import { Card } from 'antd';
import {Link} from 'react-router';
export default class ContentComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			articles:[]
		}
	}
	componentDidMount() {
		fetch('/mock/articles.json').then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				articles:json.data.articles
			})
		})
	}
	render() {
		return (
			<div className="index-content">
				<Card title="VOA(美国之音)  慢速英语，常速英语，官网最新内容在线收听。" style={{ width: 1024 }}>
			    {
			    	this.state.articles.map((value,index)=>{
			    		return(
			    			<Link key={index + '_arcicle'} to={'/detail/' +value.article_id}>
			    		<p className="article-item">
			    		<span className="article-item-category">[{value.category_title}]</span>
			    		{value.title}
			    		{
			    			value.is_new ? <span className="article-item-new">new</span> : ''
			    		}
			    		</p>
			    		</Link>
			    	 )
			    	})
			    
			    }
			  
			  </Card>
			</div>
		)
	}
}