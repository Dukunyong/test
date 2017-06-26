import React from 'react';
export default class ContentComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state={title:''}
	}
	componentDidMount() {
		var id= this.props.id;
		fetch('/mock/article.json?id='+ id).then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				title:json.data.title,
				content:json.data.content,
				img:json.data.img
			})
		})
	}
	render() {
		return(
				<div>
				<h1>{this.state.title}</h1>
				<img src={this.state.img}/>
				<div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
				</div>
			) 
	}
}