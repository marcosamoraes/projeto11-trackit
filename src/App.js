import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/App/App";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Habits from "./screens/Habits/Habits";
import Today from "./screens/Today/Today";
import Historic from "./screens/Historic/Historic";
import { AuthProvider } from "./contexts/auth";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthProvider />}>
					<Route path="/" element={<Login />}></Route>
					<Route path="/cadastro" element={<Register />}></Route>
					<Route element={<AppLayout />}>
						<Route path="/habitos" element={<Habits />}></Route>
						<Route path="/hoje" element={<Today />}></Route>
						<Route path="/historico" element={<Historic />}></Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
