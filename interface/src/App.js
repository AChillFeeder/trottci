
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AdminAuth from './AdminAuth';
import UserInterface from './UserInterface';
import LandingPage from './LandingPage';

function App() {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/shop' element={<UserInterface />} />
				<Route path='/admin' element={<AdminAuth />}/>
				{/* <Route path="*" element={} /> */}
			</Routes>
		</BrowserRouter>
	)
}

export default App;
