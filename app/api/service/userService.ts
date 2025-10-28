import apiClient from "../api-client"
import { User } from "../../types/user";

export async function getAllUsers(): Promise<User[]> {
    const response = await apiClient.get<User[]>("/users");
    return response.data;
}

export async function getUserById(id: number): Promise<User> {
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
}