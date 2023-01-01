import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import GuestRoute from "./components/shared/GuestRoute/GuestRoute";
import SemiProtectedRoute from "./components/shared/SemiProtectedRoute/SemiProtectedRoute";
import ProtectedRoute from "./components/shared/ProtectedRoute/ProtectedRoute";
import Rooms from "./pages/Rooms/Rooms";
import Activate from "./pages/Activate/Activate";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";

function App() {
	const { loading } = useLoadingWithRefresh();
	return loading ? (
		"Loading ..."
	) : (
		<BrowserRouter>
			<Navigation></Navigation>
			<Routes>
				<Route
					path="/"
					exact
					element={
						<GuestRoute>
							<Home></Home>
						</GuestRoute>
					}
				></Route>
				<Route
					path="/authenticate"
					element={
						<GuestRoute>
							<Authenticate></Authenticate>
						</GuestRoute>
					}
				></Route>
				<Route
					path="/activate"
					element={
						<SemiProtectedRoute>
							<Activate></Activate>
						</SemiProtectedRoute>
					}
				></Route>
				<Route
					path="/rooms"
					element={
						<ProtectedRoute>
							<Rooms></Rooms>
						</ProtectedRoute>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
