import { useState } from 'react';

import { Main } from '@/templates/Main';
import { registerUser } from '@/utils/ApiHelper';

import Toast from './components/Toast';

export interface UserObjectData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  // states for input fields
  const [formData, setFormData] = useState<UserObjectData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  // toast message setting and unset
  const [message, setMessage] = useState('');

  // Input field update handler function
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit handler function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Front-end validations
    const { name, email, password, confirmPassword } = formData;
    if (!email || !password || !confirmPassword || !name) {
      setMessage('All fields are required.-/-ERROR');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Password and Confirm Password do not match.-/-ERROR');
      return;
    }

    try {
      // calling register middleware api
      // the middleware api in turn calls the backend node js api
      const response = await registerUser(formData);
      console.log(response);
      setMessage(`${response.message}-/-SUCCESS`); // minor hack to detect type of message
    } catch (error: any) {
      setMessage(`${error.response.data}-/-ERROR`); // we split the message on -/- that helps us extract the message and type
    }
  };

  return (
    <Main>
      <div className="flex h-full items-center justify-center">
        <div className="flex w-96 flex-col items-center justify-center space-y-4 rounded-2xl pb-12">
          <img
            className="h-20"
            src="https://www.alistier.dev/05dafbb6dd374c290cec3c97d0c158cb.png"
            alt="logo"
          />
          <p className="font-w-bold w-96 text-center text-xl text-white">
            Join the Community!
          </p>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-96 rounded-md border border-s border-white bg-gray-700 p-2 text-white placeholder:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-96 rounded-md border border-s border-white bg-gray-700 p-2 text-white placeholder:text-white"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-96 rounded-md border border-s border-white bg-gray-700 p-2 text-white placeholder:text-white"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-96 rounded-md border border-s border-white bg-gray-700 p-2 text-white placeholder:text-white"
            />
            <button
              type="submit"
              className="font-w-bold w-96 rounded-md border border-white  bg-[#98465f]  p-2 text-white "
            >
              Register
            </button>
          </form>
          {message && (
            <Toast
              {...{
                message,
                setMessage,
              }}
            />
          )}
        </div>
      </div>
    </Main>
  );
};

export default Signup;
