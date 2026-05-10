import LoginForm from "../components/LoginForm";

import "../styles/App.css";

function Login() {
  return (
    <div className='login-page text-2xl text-amber-900 self-center'>
      <h1 className='text-center w-100'>Staff Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
