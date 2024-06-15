import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import {useDispatch, useSelector} from 'react-redux';

export default function Signin() {

  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user); 
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill all the fields'));
    }

    try {
      dispatch(signInStart);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if(data.success === false){
        dispatch(signInFailure(data.message));
      }

      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
      
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row gap-10">
        {/* left */}
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
            The one stop destination for all experiences to get ahead in your career. Sign in now and get started!
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            <div>
              <Label value="Email"/>
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>

            <div>
              <Label value="Password"/>
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
            {loading ? (
              <>
                <Spinner size='sm' />
                <span className='pl-3'>Loading...</span>
              </>
            ) : (
              'Sign In'
            )}
            </Button>

          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account? </span>
            <Link to='/sign-up' className="text-blue-500 underline">Sign Up</Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )
          }
        </div>

      </div>
    </div>
  );
}
