import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <nav className="bg-gray-800 py-4 fixed w-screen z-10 top-0 h-8 max-h-8">
                <div className="container mx-auto px-4 flex justify-around items-center">
                    <div className="flex">
                        <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline" href="#">🏠</a>
                        <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline" href="https://blog.sibansal.dev">Blog</a>
                        <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline md:block" href="#skills">Skills</a>
                        <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline md:block hidden" href="#work">Work</a>
                        <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline md:block hidden" href="#about">About</a>
                        <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline" href="#get-connected">Contact</a>
                    </div>
                    {/* <div>
                        <a className="bg-gray-900 text-white py-2 px-4 rounded cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 no-underline" href="#get-connected" >
                            <span className='animate-pulse'><img src='/svg/call.svg' alt='Book a call' className='w-5 align-bottom' /> Book a call</span></a> 
                    </div> */}
                </div>
            </nav>
        )
    }
}

export default Navbar