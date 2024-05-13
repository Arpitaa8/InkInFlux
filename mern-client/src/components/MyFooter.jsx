import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <Footer className='bg-gray-700'>
    <div className="w-full">
      <div className="grid w-full grid-cols-2 gap-8  py-8 md:grid-cols-4 px-4 lg:px-24">
        <div>
          <Footer.Title title="Company" className="text-white"/>
          <Footer.LinkGroup col>
            <Footer.Link href="#" className="text-white">About</Footer.Link>
            <Footer.Link href="#" className="text-white">Careers</Footer.Link>
            <Footer.Link href="#" className="text-white">Brand Center</Footer.Link>
            <Footer.Link href="#" className="text-white">Blog</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="help center" className="text-white"/>
          <Footer.LinkGroup col>
            <Footer.Link href="#" className="text-white">Discord Server</Footer.Link>
            <Footer.Link href="#" className="text-white">Twitter</Footer.Link>
            <Footer.Link href="#" className="text-white">Facebook</Footer.Link>
            <Footer.Link href="#" className="text-white">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="legal" className="text-white"/>
          <Footer.LinkGroup col>
            <Footer.Link href="#" className="text-white">Privacy Policy</Footer.Link>
            <Footer.Link href="#" className="text-white">Licensing</Footer.Link>
            <Footer.Link href="#" className="text-white">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="download" className="text-white"/>
          <Footer.LinkGroup col>
            <Footer.Link href="#" className="text-white">iOS</Footer.Link>
            <Footer.Link href="#" className="text-white">Android</Footer.Link>
            <Footer.Link href="#" className="text-white">Windows</Footer.Link>
            <Footer.Link href="#" className="text-white">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <div className="w-full bg-gray-200 px-4 py-6 sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Flowbite™" year={2022} className="text-pink-600"/>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} className="text-pink-600"/>
          <Footer.Icon href="#" icon={BsInstagram} className="text-pink-600"/>
          <Footer.Icon href="#" icon={BsTwitter} className="text-pink-600"/>
          <Footer.Icon href="#" icon={BsGithub} className="text-pink-600"/>
        </div>
      </div>
    </div>
  </Footer>
  

  )
}

export default MyFooter
