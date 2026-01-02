import { useAppState } from "@/utils/useAppState";
import { useEffect, useState } from "react";

const UserListPage = () => {
	const [{ user }] = useAppState();
	const [users, setusers] = useState([]);
	useEffect(() => {
		const usersList = JSON.parse(localStorage.getItem("users") || "[]");
		setusers(usersList);
	}, []);

	const deleteUser = (email: string) => {
		const updatedUsers = users.filter((user: any) => user.email !== email);
		setusers(updatedUsers);
		localStorage.setItem("users", JSON.stringify(updatedUsers));
	};

	return (
		<div className="flex flex-col">
			<div>Users</div>
			<div className="flex-1">
				<table className="table w-full text-center">
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{users &&
							users.map((user: any, index: number) => (
								<tr key={user.id}>
									<td>{index + 1}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>
										<button className="btn btn-primary">
											Edit
										</button>
										<button
											onClick={() => {
												deleteUser(user.email);
											}}
											className="btn btn-danger"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default UserListPage;
