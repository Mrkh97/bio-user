import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ListUser } from "./Pages/ListUser";
import { AddUser } from "./Pages/AddUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav className="px-8 py-4 flex gap-8 backdrop-blur-lg bg-slate-400/30 ">
          <Link to="/">List Users</Link>
          <Link to="/create">Create User</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/create" element={<AddUser />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
