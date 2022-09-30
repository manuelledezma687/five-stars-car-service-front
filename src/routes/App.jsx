import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';


import '../styles/global.css';


const App = () => {
	return (
		<AppContext.Provider >
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
		</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;