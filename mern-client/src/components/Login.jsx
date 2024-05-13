import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider';
import googleLogo from "../assets/google-logo.svg";
import { Button } from 'flowbite-react';

const Login = () => {

  const {login, loginwithgoogle} = useContext(AuthContext);
    const [error, setError] = useState("");

    const location = useLocation(); 
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

      login(email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Login Successful!")
        navigate(from, {replace: true})
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });        
    }

    // sign up using google

    const handleRegistration = () => {
      loginwithgoogle().then((result) => {
        const user = result.user;
        alert("Signed up successfully!")
        navigate(from, {replace: true});
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      })
    }

  return (
    <div class="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-pink-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login Form</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<form onSubmit={handleLogin} class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input  id="email" name="email" type="text" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							
						</div>
						<div class="relative">
							<input autocomplete="off" id="password" name="password" type="password" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							
						</div>
            
              { error ? <p className='text-pink-700 text-base'>Email or Password is not correct</p> : ""}
            
            <p>Came here for the first time! Please<Link to="/sign-up" className='text-pink-700 underline'>   Sign-up</Link></p>
						<div class="relative">
							<button class="bg-pink-500 text-white rounded-md px-6 py-2">Log in</button>
						</div>
					</form>
				</div>

        <hr />
        <div className='flex w-full items-center flex-col mt-5 gap-3'>
          <Button onClick={handleRegistration} className='block bg-white text-black'><img src={googleLogo} alt="" className='w-12 h-12 inline-block'/>Login with Google</Button>
        </div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Login
