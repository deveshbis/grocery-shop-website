"use client"
import React from 'react';

const Login = () => {

    const handleLogIn = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const resp = await signIn('credentials', {
            email,
            password,
            redirect: false

        });
        if (resp.status === 200) {
            router.push('/')
        }
    }
    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{
                backgroundImage: "url('https://i.ibb.co/c6KyHys/travel-concept-with-landmarks-1.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="relative w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-center text-gray-700">
                    Login
                </h2>
                <form onSubmit={handleLogIn} className="mt-4 space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            required
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            required
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#FF6A1A] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-[#FF6A1A] hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;