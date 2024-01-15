import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../repositories/user_repos";
import { User } from "../models/User";
import { Link } from "react-router-dom";

export const ListUser = () => {
  // Queries
  const query = useQuery({ queryKey: ["users"], queryFn: getUsers });

  return (
    <div className=" relative h-dvh w-screen">
      <div className=" grid grid-cols-4 gap-8 p-16">
        {query.data?.map((x) => (
          <UserCard user={x} />
        ))}
        {query.isLoading && <p>Loading...</p>}
        {query.isError && <p>Error: {query.error.message}</p>}
      </div>
      <Link
        to={"/create"}
        className=" absolute shadow-lg text-4xl font-extrabold bg-blue-500 text-white p-6 px-8 rounded-2xl right-8 bottom-32 hover:shadow-2xl transition-all duration-200"
      >
        +
      </Link>
    </div>
  );
};

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className=" border rounded-md shadow-lg p-8 hover:scale-105 transition-all duration-200">
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
      <p>gender: {user.gender}</p>
      <p>email: {user.email}</p>
      <p>status: {user.status}</p>
    </div>
  );
};
