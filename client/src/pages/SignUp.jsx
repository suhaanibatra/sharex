import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row gap-10">

        <div className="flex-1 mt-20">
          <Link
            to="/"
            className="font-bold dark:text-white text-4xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              sharEx
            </span>
          </Link>

          <p className="text-sm mt-5">
            The one stop destination for all experiences to get ahead in your career. Sign up now and get started!
          </p>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username"/>
              <TextInput
                type="text"
                placeholder="username"
                id="username"
              />
            </div>

            <div>
              <Label value="Email"/>
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              />
            </div>

            <div>
              <Label value="Password"/>
              <TextInput
                type="text"
                placeholder="password"
                id="password"
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">
              Sign Up
            </Button>

          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already have an account? </span>
            <Link to='/sign-in' className="text-blue-500 underline">Sign In</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
