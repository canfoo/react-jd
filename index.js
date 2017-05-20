import './app/lib/common.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './app/components/search'; 
import Header from './app/components/header'; 
import Otherapp from './app/components/otherapp'; 
import Spike from './app/components/spike'; 
import More from './app/components/more'; 
import Like from './app/components/like'; 

ReactDOM.render(
	<div>
		<Search />
		<Header source="http://localhost:3000/data/swiper" />
		<Otherapp source="http://localhost:3000/data/otherapp" />
		<Spike source="http://localhost:3000/data/spike" />
		<More source="http://localhost:3000/data/more" />
		<Like source="http://localhost:3000/data/like" />
	</div>, 
	document.querySelector("#myApp")
);
