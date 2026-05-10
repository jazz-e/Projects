function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };
  return (
    <div>
      <h1>Visitor Sign-In System</h1>
      <p>Welcome, staff member</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
