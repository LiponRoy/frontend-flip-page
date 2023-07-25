import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link
  } from "react-router-dom";
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
function App() {
	
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signup' element={<ProductDetail />} />	
				</Routes>
				
			</Router>
		</div>
	);
}

export default App;
