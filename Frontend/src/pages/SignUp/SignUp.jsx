import { useContext, useState } from 'react';
import StoreContext from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function SignUp() {
  const url = 'http://localhost:3000';
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  // get settoken fyntion fron context
  const { settoken } = useContext(StoreContext);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  //  signup handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${url}/api/user/signup`, data);
    if (response.data.success) {
      settoken(response.data.token);
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen font-outfit ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={changeHandler}
              value={data.name}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={changeHandler}
              value={data.email}
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={changeHandler}
              value={data.password}
              className="w-full  px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Your password"
              required
            />
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="h-4 w-4 text-blue-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the{' '}
              <a href="/terms" className="text-blue-500 hover:underline">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none outline-none"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
