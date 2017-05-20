import './otherapp.css';
import React from 'react'; 
import fetchJsonp from 'fetch-jsonp';

let Otherapp = React.createClass({
	getInitialState: function() {
        return {
        	apps: [],
        };
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
