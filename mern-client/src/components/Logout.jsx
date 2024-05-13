import { Button } from 'flowbite-react'
import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const Logout = () => {
    const {dosignout} = useContext(AuthContext);
    const location = useLocation(); 
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        const auth = getAuth();
        dosignout(auth).then(() => {
            alert('Sign-out successful!');
            navigate(from, {replace: true})
          }).catch((error) => {
            console.log(error)
          });
    }
  return (
    <div className='h-screen bg-gray-200 flex items-center justify-center'>
      <Button className='bg-pink-600 px-10 py-4 text-white rounded' onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Logout
