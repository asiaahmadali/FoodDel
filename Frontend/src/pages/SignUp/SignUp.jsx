import { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
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
  // get settoken function from context
  const { setToken } = useContext(StoreContext);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // signup handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${url}/api/user/signup`, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="flex justify-center bg-[url(log5.avif)]  bg-cover bg-center bg-no-repeat items-center min-h-screen bg-gray-900 font-outfit">
      <div
        data-aos="flip-right"
        className="w-full max-w-lg m-[10px] bg-opacity-50 p-8 bg-gray-800 rounded-lg  shadow-gray-200 shadow-md border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={changeHandler}
              value={data.name}
              className="w-full px-4 py-[12px] mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 bg-gray-700 text-white"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={changeHandler}
              value={data.email}
              className="w-full px-4 py-[12px] mt-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={changeHandler}
              value={data.password}
              className="w-full px-4 py-[12px] mt-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Your password"
              required
            />
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="h-4 w-4 text-red-500 border-gray-500 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
              I agree to the{' '}
              <a href="/terms" className="text-red-500 hover:underline">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-red-500 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-[14px] bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none transition-all duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-300">
          Already have an account?{' '}
          <a href="/login" className="text-red-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
