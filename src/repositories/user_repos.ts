import { axiosInstance } from "@/lib/axios";
import { User } from "@/models/User";

export const getUsers = async (): Promise<Array<User>> => {
  try {
    const res = await axiosInstance.get<Array<User>>("/users");
    return res.data;
  } catch (error) {
    throw "user not found";
  }
};

export const createUser = async (user: User): Promise<void> => {
  try {
    const res = await axiosInstance.post("/public/v2/users", { user });
    return res.data;
  } catch (error) {
    throw "user could not be added";
  }
};
