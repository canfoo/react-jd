import './app/lib/common.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Usual from './app/testComponent/usual';
import Login from './app/testComponent/login';

ReactDOM.render(
	<div>
		<div className="box">
			<Usual aa='11'></Usual>
		</div>
		<div className="box">
			<Login></Login>
		</div>
	</div>,
	document.querySelector("#myApp")
);
