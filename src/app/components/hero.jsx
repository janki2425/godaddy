import React from "react";
import Image from "next/image";

const Hero = () =>{
    return(
        <div className="flex h-screen justify-center">
            <div className="mt-2 w-full px-4">
                <div className="w-full flex items-center gap-0 shadow-lg">
                    <input  
                    type="search" 
                    placeholder="Type the domain you want"
                    className="w-full py-4 text-[17px] font-[600] shadow rounded-l-[5px] indent-5"
                    />
                    <div className="search-btn py-4 px-5.5 rounded-r-[5px]">
                        <Image src={'/hero/search.svg'} className="invert" width={28} height={28} alt="search"/>
                    </div>
                </div>
                <section className="h-screen mt-2">
                    <div className="relative px-4 h-full max-h-[790px] rounded-[20px] overflow-hidden">
                        {/* hero content */}
                        <div
                        className="absolute inset-0 bg-[url('/img/tandem-x-visuals-fYx7mQHxVEw-unsplash.jpg')] bg-cover bg-center opacity-60"
                        style={{ zIndex: 0 }}
                        />
                        <div className="absolute inset-0 bg-black opacity-30 z-[1]" />
                        <div className="relative z-[2] text-[#f0f0f0] flex flex-col mt-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                            <Image src={'/navbar/logo.svg'} className="invert" width={36} height={36} alt="logo"/>
                            <h2 className="text-[25px] font-[700]">GoDaddy</h2>
                            <h3 className="text-[26px] font-[600]">Airo</h3>
                        </div>
                        <div>
                            <h4 className="text-[26px] font-[600] text-center tracking-[2px]">
                            Get a .com for only ₹ 1.00*/1st yr - include Airo
                            </h4>
                            <p className="text-[14px] mt-1">
                            3-year purchase required. Additional years ₹ 1,499.00*
                            </p>
                        </div>
                        
                        {/* content-box */}
                        <div className="flex flex-col items-start px-4 bg-white rounded-[10px] py-2 text-black">
                            <div className="flex items-center relative pr-2 px-1 content-box">
                                <p className="text-[10px]">GODADDY AIRO</p>
                                <p className="text-[4px] absolute top-0 left-20">TM</p>
                            </div>
                            <h3 className="text-[18px] font-[500]">.com Domains</h3>
                            <div className="flex">
                                <div className="flex flex-col items-start text-start max-w-[80px] md:max-w-[90px]">
                                    <h3 className="text-[16px] font-[600]">₹ 1.00*/1st yr</h3>
                                    <p className="text-[12px]">3-year purchase required</p>
                                </div>
                                <div className="flex flex-col items-end justify-end">
                                    <button className="py-2 px-4 text-white bg-[#111] text-[16px] rounded-[5px]">Find Your .com</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
export default Hero;