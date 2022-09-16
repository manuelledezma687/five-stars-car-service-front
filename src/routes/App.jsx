import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import '../styles/global.css';


const App = () => {
	return (
<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
</BrowserRouter> 
	);
}

export default App;