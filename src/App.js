import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import AboutUs from "./pages/home/AboutUs";
import Index from "./pages/home/Index";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Index />} />
				<Route path="/about-us" element={<AboutUs />} />
			</Route>
		</Routes>
	);
}

export default App;