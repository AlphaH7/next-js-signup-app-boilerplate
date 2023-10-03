import { useState } from 'react';

import { Main } from '@/templates/Main';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Front-end validations
    const { email, password, confirmPassword } = formData;
    if (!email || !password || !confirmPassword) {
      setMessage('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Password and Confirm Password do not match.');
      return;
    }

    // API call
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
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
          {message && <div className="mt-4 text-red-500">{message}</div>}
        </div>
      </div>
    </Main>
  );
};

export default Signup;
