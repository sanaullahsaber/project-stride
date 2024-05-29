import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Dashboard User Profile</h1>
      {user ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
          <h2 className="text-2xl font-semibold text-gray-900">
            {user.displayName || user.email}
          </h2>
          <p className="mt-4 text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
          {user.phoneNumber && (
            <p className="mt-2 text-gray-700">
              <strong>Phone:</strong> {user.phoneNumber}
            </p>
          )}
          {user.photoURL && (
            <div className="flex justify-center mt-4">
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-24 h-24 rounded-full border-2 border-gray-300"
              />
            </div>
          )}
        </div>
      ) : (
        <p className="text-lg text-gray-700">No user information available.</p>
      )}
    </div>
  );
};

export default Dashboard;
