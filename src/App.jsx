import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Dashboard/Profile";
import Log from "./Components/Dashboard/Log";
export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-grow p-6 ml-64 overflow-auto">
        <Profile />
        <Log />
      </main>
    </div>
  );
}
