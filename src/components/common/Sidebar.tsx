import { Link } from "react-router-dom";
import { useAppState } from "@/utils/useAppState";

const Sidebar = () => {
	const [{ user }, dispatch] = useAppState();

	const logout = () => {
		dispatch({ user: null });
	};
	return (
		<div className="bg-gray-100 border-b border-gray-300 w-full h-screen flex flex-col items-center gap-10">
			<div className="p-4 w-full">Logo</div>
			<div className="w-full px-4 flex gap-4 items-start flex-col">
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/users">Users</Link>
				<Link to="#" onClick={() => logout()}>
					Logout (<span>{user?.name}</span>)
				</Link>
			</div>
		</div>
	);
};
export default Sidebar;
