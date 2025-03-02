import { useNavigate } from "react-router-dom";

const TwoModesJoin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">My App</h1>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => (window.location.href = "http://localhost:5173/signup")}
                className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Back
              </button>
            </li>
            <li>
              <a
                href="http://localhost:3000/"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ✅ Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <h2 className="text-2xl font-bold">Welcome to Two Modes Join Page</h2>
      </main>

      {/* ✅ Footer */}
      <footer className="bg-gray-800 text-white text-center p-3">
        <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TwoModesJoin;
