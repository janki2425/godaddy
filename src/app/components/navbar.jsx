import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="navbar w-screen">
        <div className="z-100 mx-auto">            
            <nav className="flex flex-wrap min-h-[4rem] justify-between items-center px-4 md:px-8 lg:px-10 xl:px-14 2xl:px-26">
                <div className="flex py-2 gap-[10px] xl:gap-6">
                    <Image src={'/navbar/menu.svg'} className="invert cursor-pointer xl:hidden" width={35} height={35} alt='menu'/>
                    <div className="flex relative">
                        <Image src={'/navbar/logo.svg'} className="invert cursor-pointer md:mb-2 lg:mr-1" width={36} height={36} alt='logo'/>
                        <h2 className="text-[26px] xl:text-[24px] font-[700] hidden lg:block cursor-pointer lg:pb-2">GoDaddy</h2>
                        <p className="text-[10px] absolute right-0 top-8 hidden md:block lg:pb-2">India</p>
                    </div>  
                    <div className="hidden xl:flex items-center gap-6">
                            <div className="flex gap-1 items-center">
                                <p className="text-[16px] font-[600]">Domains</p>
                                <Image src={'/navbar/down-arrow.svg'} className="invert" width={16} height={16} alt='down arrow'/>
                            </div>
                            <div className="flex gap-1 items-center">
                                <p className="text-[16px] font-[600]">Websites and Hosting</p>
                                <Image src={'/navbar/down-arrow.svg'} className="invert" width={16} height={16} alt='down arrow'/>
                            </div>
                            <p className="text-[16px] font-[600]">Email</p>
                            <div className="flex gap-1 items-center">
                                <p className="text-[16px] font-[600]">Security</p>
                                <Image src={'/navbar/down-arrow.svg'} className="invert" width={16} height={16} alt='down arrow'/>
                            </div>
                            <div className="flex gap-1 items-center">
                                <p className="text-[16px] font-[600]">Marketing</p>
                                <Image src={'/navbar/down-arrow.svg'} className="invert" width={16} height={16} alt='down arrow'/>
                            </div>
                            <p className="text-[16px] font-[600]">Pricing</p>
                        </div>
                </div>  
                <div className="flex gap-4 md:gap-5">
                    <div className="hidden xl:flex items-center gap-6">
                        <p className="text-[14px] font-[600]">Contact Us</p>
                        <p className="text-[14px] font-[600]">Help</p>
                        <div className="flex gap-1 items-center">
                            <p className="text-[14px] font-[600]">Sign In</p>
                            <Image src={'/navbar/down-arrow.svg'} className="invert" width={16} height={16} alt='down arrow'/>
                        </div>
                    </div>
                    <Image src={'/navbar/help.svg'} className="invert cursor-pointer xl:hidden" width={22} height={22} alt='help'/>
                    <Image src={'/navbar/user.svg'} className="invert ml-1 cursor-pointer xl:hidden" width={25} height={25} alt='user'/>
                    <Image src={'/navbar/cart.svg'} className="invert cursor-pointer" width={25} height={25} alt='cart'/>
                </div>
            </nav>
            </div>
        </div>
  )
}

export default Navbar
