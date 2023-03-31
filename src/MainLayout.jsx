import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import homeRoutes from "./routes";
import importRoutes from "details/routes";

import PortalHeader from "./components/PortalHeader/PortalHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

const routes = [...homeRoutes, ...importRoutes];


export default function MainLayout() {
	return (
		<Router>
			<div>
				<PortalHeader/>
				<div className='row'>
					<Sidebar/>
					<Routes>
						{routes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
								exact={route.exact}
							/>
						))}
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}