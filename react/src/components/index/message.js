import React from 'react';
import { Button , Icon} from 'antd';
export default class MessageComponent extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			comments: ["这个网站不错,可以适应于高中低的人群,还可以从中了解国外的新闻内容,点个赞!","嗯，楼上说的的确是真的,我从英语四级的样子，自从看了这个网站，现在英语应该能达到6级了！口语能力也提升了！"]
		}
	}

	handleCommentSubmit(){
		var value = this.refs.input.value;
		this.state.comments.push(value);
		this.setState({
			comments: this.state.comments
		});
	}

	render(){
		return (
			<div className="js-message">
				<div className="detail-comment-top">客官,请留下你的评论吧</div>
				<textarea rows="10" cols="167"ref="input"></textarea>
				<p><Button type="primary" className="commentSubmit" onClick={this.handleCommentSubmit.bind(this)}><Icon type="smile-o" />提交评论</Button></p>
				<div className="detail-content-comment">
					<div className="message-text">评论区</div>
					{   

						this.state.comments.map((value,index) => {
							return <p key={index+"_todollist"}>网友：{value}</p>
						})
					}
				</div>
			</div>
		)
	}
}
