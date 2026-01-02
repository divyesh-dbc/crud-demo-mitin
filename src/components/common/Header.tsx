import { Link } from "react-router-dom";
import { useAppState } from "@/utils/useAppState";

const Header = () => {
	const [{ user }, dispatch] = useAppState();

	const logout = () => {
		dispatch({ user: null });
	};
	return (
		<div className="bg-gray-100 border-b border-gray-300">
			<nav className="container mx-auto flex justify-between items-center w-full py-4">
				<Link to="/">Logo</Link>
				<div className="flex gap-4 items-center">
					<Link to="/">Home</Link>
					{user ? (
						<>
							<Link to="/dashboard">Dashboard</Link>
							<Link to="#" onClick={() => logout()}>
								Logout
							</Link>
							<div>{user.name}</div>
						</>
					) : (
						<>
							<Link to="/login">Login</Link>
							<Link to="/register">Register</Link>
						</>
					)}
				</div>
			</nav>
		</div>
	);
};
export default Header;
