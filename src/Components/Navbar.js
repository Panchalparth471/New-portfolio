
import { useState } from "react";
import bg from "../Assets/Rectangle.svg"
import gith from "../Assets/github (2).svg";
import moon from "../Assets/moon-regular 1.svg";
import sun from "../Assets/sun 1.png";
import linkedin from "../Assets/entypo-social_linkedin-with-circle.svg";
function Navbar({isDark,handler}) {
 
    return (
        <div className="p-5 px-10 flex w-full items-center justify-between">
            <div>
                <div onClick={handler} className="w-8 cursor-pointer h-8 flex justify-center items-center bg-[#D9D9D9] rounded-full">
                    {
                        isDark?(<img className="w-4 h-4 z-[1000]" src={sun}></img>):(<img className="w-4 h-4 z-[1000]" src={moon}></img>)
                  }
                </div>
            </div>

            <div className="flex gap-12">
                <div id='mynav' className={`flex font-medium ${isDark ? ('text-[#EEEEEE]'):(' text-[#666666]')} gap-12 items-center`}>
                    <a href="" className='hover:scale-110 transition-all'>Home</a>
                    <a href="" className='hover:scale-110 transition-all'>About</a>
                    <a href="" className='hover:scale-110 transition-all'>Tech Stack</a>
                    <a href="" className='hover:scale-110 transition-all'>Projects</a>
                    <a href="" className='hover:scale-110 transition-all'>Contact</a>

                </div>
                <div className="flex gap-4 items-center mt-1">
                    <svg  className={`${isDark ? ('text-[#EEEEEE]') : (null)}`} width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" fill="currentColor"/>
</svg>

                   <svg  className={`${isDark ? ('text-[#EEEEEE]') : (null)}`} width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_25)">
<path d="M15 0.600006C7.04698 0.600006 0.599976 7.04701 0.599976 15C0.599976 22.953 7.04698 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04701 22.953 0.600006 15 0.600006ZM11.475 20.9685H8.55898V11.5845H11.475V20.9685ZM9.99898 10.4325C9.07798 10.4325 8.48248 9.78001 8.48248 8.97301C8.48248 8.14951 9.09598 7.51651 10.0365 7.51651C10.977 7.51651 11.553 8.14951 11.571 8.97301C11.571 9.78001 10.977 10.4325 9.99898 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1_25">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
                </div>
            </div>
        </div>
    
    );
}

export default Navbar;