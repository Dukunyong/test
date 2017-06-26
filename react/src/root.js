import './css/style.css';
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory} from "react-router";
import IndexComponent from './components/index/index.js';
import DetailComponent from './components/detail/index.js';
// import TouchIndexComponent from './components/touch/index.js';
// import TouchDetailComponent from './components/touch/detail.js';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';


class Root extends React.Component{

	render() {
		return(
			<div className="main">
				<Router history={hashHistory}>
					<Route path="/" component={IndexComponent}></Route>
					<Route path="/detail/:id" component={DetailComponent}></Route>
				</Router>
			</div>
		)
		
	}
}

ReactDom.render(<Root />, document.querySelector("#root"));