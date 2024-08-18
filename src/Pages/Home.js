import image from "../Assets/icon.png";
import  Tilt from "react-parallax-tilt";

function Home() {
    return (
        <div className="w-full px-7 max-md:px-0 justify-evenly gap-20 mt-20 text-[45px] max-lg:text-[40px] max-sm:flex-col max-md:flex-col-reverse  flex items-center font-bold">
            <div id='home' className="text-[#42446E] ">Hi 👋 ,<br></br>
                 My name is<br></br>
                <span> Parth Panchal</span> <br></br>
                 I build things for web</div>
            <div className='flex justify-center items-center'>
                <Tilt>
                   <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#356BAB" className="home_blob w-[350px] max-lg:w-[300px] max-sm:w-[200px]" data-tilt="">
    <mask id="mask0" mask-type="alpha">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
    </mask>
    <g mask="url(#mask0)">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
        <image width="170px" x="12" y="8" xlinkHref={image}>
            
        </image>
    </g>
</svg>
                </Tilt>



            </div>



        </div>
    )
}

export default Home;