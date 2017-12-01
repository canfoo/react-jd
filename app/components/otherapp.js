import './otherapp.css';
import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import _ from 'lodash';
import { Map } from 'immutable';

let Otherapp = React.createClass({
	getInitialState: function() {
        return {
        	apps: [],
			data: {times: 0},
			imt_data: Map({times: 0})
        };
 	},
	handleAdd () {
		let data = _.cloneDeep(this.state.data);

		// let data = this.state.data
		data.times = data.times + 1;
			console.log('data', data);
		this.setState({data: data}, () => {
			console.log('in', this.state.data.times);
		});
		console.log(this.state.data.times);
	},
	imt_handleAdd () {
		this.setState({imt_data: this.state.imt_data.update('times', v => v + 1)}, () => {
			console.log('imt_in', this.state.imt_data.get('times'));
		});

		console.log(this.state.imt_data.get('times'));
	},
 	componentDidMount: function() {
 		fetchJsonp(this.props.source).then((response) => {
 			return response.json();
 		}).then((data) => {
 			if(data.status) {
 				if(this.isMounted()) {
 					this.setState({
 						apps: data.data,
 					})
 				}
 			}else {
 				alert(data.msg);
 			}
 		});
 	},

	render: function() {
		let countId = 0;
		return (
			<div className="oapp">
				<button className="btn" onClick={this.handleAdd.bind(this)}>ADD</button>
				<button className="btn" onClick={this.imt_handleAdd.bind(this)}>IMT_ADD</button>
				<ul>
					{
						this.state.apps.map((app) => {
							return <li key={ "otherapp" + countId++ }>
										<a href={ app.url }>
											<div className="app_icon">
												<img src={ app.icon } alt=""/>
											</div>
											<span>{ app.title }</span>
										</a>
									</li>
						})
					}
				</ul>
			</div>
		);
	}
})

Otherapp.propTypes = {
    source: React.PropTypes.string.isRequired,
}
module.exports = Otherapp;
