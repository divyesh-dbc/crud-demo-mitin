import { Navigate, Outlet } from "react-router-dom";
import { useAppState } from "@/utils/useAppState";
import Sidebar from "../common/Sidebar";

export const UserLayout = () => {
	const [{ user }] = useAppState();
	if (!user) return <Navigate to="/login" replace />;

	return (
		<div className="flex w-full">
			<div className=" w-[200px]">
				<Sidebar />
			</div>
			<div className="w-[calc(100%-200px)] p-4">
				<Outlet />
			</div>
		</div>
	);
};
