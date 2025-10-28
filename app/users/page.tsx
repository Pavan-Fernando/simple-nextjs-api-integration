"use client";

import { useEffect, useState } from "react";
import { getAllUsers } from "../api/service/userService";
import { User } from "../types/user";

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getAllUsers()
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching users:", err));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
            <table className="min-w-full  border rounded-lg shadow-md">
                <thead>
                <tr className="">
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user: any) => (
                    <tr key={user.id} className="hover:bg-red-400">
                        <td className="px-4 py-2 border">{user.id}</td>
                        <td className="px-4 py-2 border">{user.name}</td>
                        <td className="px-4 py-2 border">{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
