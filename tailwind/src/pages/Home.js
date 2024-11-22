import React from 'react'
import Tech from '../assets/tech.jpg';
import Hr from '../assets/hr.avif'
import Me from '../assets/me.jpeg';
import Laptop from '../assets/laptop.webp';
import Eng from '../assets/eng.jpg'
import Quatation from '../assets/quotation.webp'
import Companies from '../assets/companies.png';
import Logo from '../assets/logo.webp';
import Grid from '../assets/grid.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  return (
    <>
      <section className='relative bg-deepBlue'>
        <div className='w-10/12 max-w-[1080px] flex flex-col lg:flex-row justify-between items-center mx-auto'>
          {/* Left Part */}
          <div className='space-y-6'>
            <h1 className='font-mullish font-bold text-[40px] leading-[1.2] text-white'>Power your finance, grow your business</h1>
            <div className='w-6 h-1 bg-greenLight'></div>
            <p className='font-mullish text-[18px] leading-7 text-white opacity-70'>Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.</p>
            <button className='bg-lightBlue text-white rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 py-[14px] px-[18px]'>Sign Up Now</button>
            </div>
            {/* Right Part */}
            <img src={Tech} alt='tech' className='w-full max-w-[680px]'/>
        </div>
      </section>
        
        {/* feature Section 1*/}
        <section className='relative mt-[160px]'>
          <img src={Grid} alt='Grid' className='w-[100px] h-[80px] absolute -top-[8rem] left-[4rem] inline-block -z-10' loading='lazy'/>
          <img src={Grid} alt='Grid' className='w-[100px] h-[80px] absolute top-[3rem] right-0 inline-block' loading='lazy'/>
          <div className='relative w-11/12 max-w-[1080px] mx-auto'>
            {/* Heading */}
            <h2 className='text-center font-mullish text-2xl leading-[1.2] font-extrabold hidden md:block'>Accept Payments with Razorpay Suite</h2>
            <h2 className='text-center font-mullish text-5xl leading-[1.2] font-extrabold block md:hidden'>Explore Razorpay Payment Suite</h2>
            <div className='w-6 h-1 bg-greenLight mx-auto mt-4 mb-6'></div>

            {/* content box */}
            <div className="w-full min-h-[520px] bg-white flex rounded-md p-10 py-12 border">
              {/* left section */}
              <div className='flex flex-col justify-between w-full'>
              <h3 className='font-mullish text-[28px] leading-10 font-bold max-w-[500px]'>Supercharge your business with the all-powerful
              <span className='text-lightBlue'> Payment Gateway</span>
              </h3>
                <ul className='space-y-2'>
                  <li className='font-mullish flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                    <span>100+ Payment Methods</span>
                  </li>
                  <li className='font-mullish flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                    <span>Industry Leading Success Rate</span>
                  </li>
                  <li className='font-mullish flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                    <span>Superior Checkout Experience</span>
                  </li>
                  <li className='font-mullish flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                    <span>Easy to Integrate</span>
                  </li>
                  <li className='font-mullish flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                    <span>Instant Settlements from day 1</span>
                  </li>
                  <li className='font-mullish flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                    <span>In-depth Reporting and Insights</span>
                  </li>
                </ul>

                {/* for button and hyperlink */}
                <div className='flex flex-col-reverse md:flex-row items-center space-x-4'>
                  <button className='bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] rounded-md font-mullish font-bold
                  hover:bg-lightBlue500 translate-all duration-200'>Sign Up Now <FontAwesomeIcon icon={faArrowRight}/></button>
                  {/* hyperlink */}
                  <div className='flex self-start md:items-center border rounded-md p-4 cursor-pointer group'>
                    <Link to="/" className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                  </div>
                </div>
              </div>
              <img src={Hr} alt="" className='max-w-[600px] absolute right-0 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block'/>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 '>
            {/* Box 1 */}
            <div className='full min-h-[15rem] relative cursor-pointer'>
              <img src={Logo} alt='' className='w-12 h-12 absolute right-3 top-3 rounded-full z-[8]
              transition-all duration-200'/>
              
              {/* Box content */}
              <div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                {/* Text part */}
                <div>
                  <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.37rem]'>Payments Link</h3>
                    <p className='font-mullish text-grayText mt-6'>Share payments link via an email, SMS, messengers, chatbot etc. and get paid immediately</p>
                </div>

                {/* hyper link konw more */}
                <div className='flex items-center cursor-pointer group'>
                    <Link to="/" className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                  </div>
              </div>
            </div>
            {/* Box 2 */}
            <div className='full min-h-[15rem] relative cursor-pointer'>
              <img src={Logo} alt='' className='w-12 h-12 absolute right-3 top-3 rounded-full z-[8]
              transition-all duration-200'/>
              
              {/* Box content */}
              <div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                {/* Text part */}
                <div>
                  <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.37rem]'>Payments Link</h3>
                    <p className='font-mullish text-grayText mt-6'>Share payments link via an email, SMS, messengers, chatbot etc. and get paid immediately</p>
                </div>

                {/* hyper link konw more */}
                <div className='flex items-center cursor-pointer group'>
                    <Link to="/" className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                  </div>
              </div>
            </div>
            {/* Box 3 */}
            <div className='full min-h-[15rem] relative cursor-pointer'>
              <img src={Logo} alt='' className='w-12 h-12 absolute right-3 top-3 rounded-full z-[8]
              transition-all duration-200'/>
              
              {/* Box content */}
              <div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                {/* Text part */}
                <div>
                  <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.37rem]'>Payments Link</h3>
                    <p className='font-mullish text-grayText mt-6'>Share payments link via an email, SMS, messengers, chatbot etc. and get paid immediately</p>
                </div>

                {/* hyper link konw more */}
                <div className='flex items-center cursor-pointer group'>
                    <Link to="/" className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                  </div>
              </div>
            </div>
            {/* Box 4 */}
            <div className='full min-h-[15rem] relative cursor-pointer'>
              <img src={Logo} alt='' className='w-12 h-12 absolute right-3 top-3 rounded-full z-[8]
              transition-all duration-200'/>
              
              {/* Box content */}
              <div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                {/* Text part */}
                <div>
                  <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.37rem]'>Payments Link</h3>
                    <p className='font-mullish text-grayText mt-6'>Share payments link via an email, SMS, messengers, chatbot etc. and get paid immediately</p>
                </div>

                {/* hyper link konw more */}
                <div className='flex items-center cursor-pointer group'>
                    <Link to="/" className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                  </div>
              </div>
            </div>
            {/* Box 5 */}
            <div className='full min-h-[15rem] relative cursor-pointer'>
              <img src={Logo} alt='' className='w-12 h-12 absolute right-3 top-3 rounded-full z-[8]
              transition-all duration-200'/>
              
              {/* Box content */}
              <div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                {/* Text part */}
                <div>
                  <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.37rem]'>Payments Link</h3>
                    <p className='font-mullish text-grayText mt-6'>Share payments link via an email, SMS, messengers, chatbot etc. and get paid immediately</p>
                </div>

                {/* hyper link konw more */}
                <div className='flex items-center cursor-pointer group'>
                    <Link to="/" className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                  </div>
              </div>
            </div>
            {/* Box 6 */}
            <div className='full min-h-[15rem] relative cursor-pointer'>
              <img src={Logo} alt='' className='w-12 h-12 absolute right-3 top-3 rounded-full z-[8]
              transition-all duration-200'/>
              
              {/* Box content */}
              <div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                {/* Text part */}
                <div>
                  <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.37rem]'>Payments Link</h3>
                    <p className='font-mullish text-grayText mt-6'>Share payments link via an email, SMS, messengers, chatbot etc. and get paid immediately</p>
                </div>

                {/* hyper link konw more */}
                <div className='flex items-center cursor-pointer group'>
                    <Link to="/" className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                  </div>
              </div>
            </div>
          </div>
          </div>

        </section>

        {/* feature Section 2 */}
        <section>
          <div className='w-10/12 max-w-[1080px] pt-4 mx-auto relative'>
            <h2 className='font-mullish text-center text-2xl leading-[1.2] text-black font-bold'>Explore Razorpay Banking</h2>
            <div className='w-6 h-1 bg-greenLight mx-auto mt-4 mb-8'></div>

            {/* main featured box */}
            <div className='w-full min-h-[440px] flex relative'>
              {/* content box */}
            <div className="w-full flex p-10 py-12 border bg-[#181c2e] rounded-md relative">
              {/* left section */}
              <div className='flex flex-col justify-between items-start h-full w-full'>
              <h3 className='font-mullish text-[28px] leading-10 font-bold max-w-[500px] text-white'>
                Manage your company's finances with <span className='text-greenLight'>Business Banking</span>
              </h3>
                <ul className='space-y-2 text-white'>
                  <li className='font-mullish flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                    <span>open a fully digital current account</span>
                  </li>
                  <li className='font-mullish flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                    <span>Automate payables & compliment payments</span>
                  </li>
                  <li className='font-mullish flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                    <span>Simply and track spends with Corporate cards</span>
                  </li>
                  <li className='font-mullish flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                    <span>View financial insights at a glance</span>
                  </li>
                </ul>

                {/* for button and hyperlink */}
                <div className='flex flex-col-reverse md:flex-row w-full items-center space-x-4'>
                  <button className='relative bg-lightBlue flex items-center place-content-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold
                  hover:bg-lightBlue500 self-stretch md:w-fit translate-all duration-200'>Sign Up Now 
                  <div className='w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center'>
                  <FontAwesomeIcon icon={faArrowRight}/>
                  </div>
                  </button>
                  {/* hyperlink */}
                  <div className='flex flex-row items-center cursor-pointer group'>
                  <Link to="/" className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                  <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                  </div>
                </div>
              </div>
              <img src={Hr} alt="" className='max-w-[600px] absolute right-0 bottom-0 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block'/>
            </div>
            </div>

             {/* card box */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            <div className='full min-h-[15rem] relative cursor-pointer'>
              <img src={Logo} alt='' className='w-12 h-12 absolute right-3 top-3 rounded-full z-[8]
              transition-all duration-200'/>
              
              {/* Box content */}
              <div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                {/* Text part */}
                <div>
                  <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.37rem]'>Current Account</h3>
                    <p className='font-mullish text-grayText mt-6'>Current Account for fast-growing businesses, supportedby  the best-in-class technology</p>
                </div>

                {/* hyper link konw more */}
                <div className='flex items-center cursor-pointer group'>
                    <Link to="/" className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                  </div>
              </div>
            </div>

            {/* box1 */}
            {/* Box 2 */}
            <div className='full min-h-[15rem] relative cursor-pointer'>
              <img src={Logo} alt='' className='w-12 h-12 absolute right-3 top-3 rounded-full z-[8]
              transition-all duration-200'/>
              
              {/* Box content */}
              <div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                {/* Text part */}
                <div>
                  <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.37rem]'>Payments Link</h3>
                    <p className='font-mullish text-grayText mt-6'>Share payments link via an email, SMS, messengers, chatbot etc. and get paid immediately</p>
                </div>

                {/* hyper link konw more */}
                <div className='flex items-center cursor-pointer group'>
                    <Link to="/" className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                  </div>
              </div>
            </div>

            {/* box3 */}
            <div className='full min-h-[15rem] relative cursor-pointer'>
              <img src={Logo} alt='' className='w-12 h-12 absolute right-3 top-3 rounded-full z-[8]
              transition-all duration-200'/>
              
              {/* Box content */}
              <div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                {/* Text part */}
                <div>
                  <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.37rem]'>Payments Link</h3>
                    <p className='font-mullish text-grayText mt-6'>Share payments link via an email, SMS, messengers, chatbot etc. and get paid immediately</p>
                </div>

                {/* hyper link konw more */}
                <div className='flex items-center cursor-pointer group'>
                    <Link to="/" className='font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                  </div>
              </div>
            </div>

            </div>

            {/* demo box */}
            <div className='w-full hidden md:flex md:flex-col lg:flex-row lg:flex items-center justify-evenly border border-slate-700
            mb-24 gap-y-6 py-10 p-8 relative rounded-md'>
              <p className='font-mullish text-xl'>Check out the live demo to learn how RazorpayX works.
                <span className='font-bold'> No sign-up required!</span>
              </p>
              <button className='relative bg-lightBlue flex items-center justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold
                  hover:bg-lightBlue500 translate-all duration-200'>Check out the demo
                  <div className='w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center'>
                  <FontAwesomeIcon icon={faArrowRight}/>
                  </div>
                  </button>
            </div>
          </div>
        </section>

        {/* new features */}
        <section className='relative'>
          <div className='relative w-11/12 max-w-[1080px] mx-auto pt-4'>
            <img src={Grid} alt="" className='absolute w-[100px] h-[80px] left-[300px] -top-[6rem] -z-[10]'/>
            <img src={Grid} alt="" className='absolute w-[100px] h-[80px] -right-[3.5rem] -top-[6rem] -z-[10]'/>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 relative z-[10]'>
              {/* item 1 */}
              <div className='relative flex items-center'>
                <h2
                className='text-deepBlueHead font-mullish font-extrabold text-4xl leading-[3.375rem]'>New in the <span
                className='text-lightBlue500'>Razorpay</span> Product Suite</h2>
              </div>
              {/* card 1 */}
              <div className='w-full max-h-[300px] cursor-pointer'>
                <img src={Logo} alt='' className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Cards</h3>
                <p className='font-mullish py-3 text-grayText leading-normal'>Simply your recurring, international and team expenses with savings on every spends. Saving upto 10 lacsevery month</p>
                <div className='flex flex-row items-center cursor-pointer group'>
                  <Link className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                  transition-all duration-200'>Know More</Link>
                  <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                </div>
              </div>
              {/* card 2 */}
              <div className='w-full max-h-[300px] cursor-pointer'>
                <img src={Logo} alt='' className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Cards</h3>
                <p className='font-mullish py-3 text-grayText leading-normal'>Simply your recurring, international and team expenses with savings on every spends. Saving upto 10 lacsevery month</p>
                <div className='flex flex-row items-center cursor-pointer group'>
                  <Link className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                  transition-all duration-200'>Know More</Link>
                  <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                </div>
              </div>
              {/* card 3 */}
              <div className='w-full max-h-[300px] cursor-pointer'>
                <img src={Logo} alt='' className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Cards</h3>
                <p className='font-mullish py-3 text-grayText leading-normal'>Simply your recurring, international and team expenses with savings on every spends. Saving upto 10 lacsevery month</p>
                <div className='flex flex-row items-center cursor-pointer group'>
                  <Link className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                  transition-all duration-200'>Know More</Link>
                  <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                </div>
              </div>
              {/* card 4 */}
              <div className='w-full max-h-[300px] cursor-pointer'>
                <img src={Logo} alt='' className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Cards</h3>
                <p className='font-mullish py-3 text-grayText leading-normal'>Simply your recurring, international and team expenses with savings on every spends. Saving upto 10 lacsevery month</p>
                <div className='flex flex-row items-center cursor-pointer group'>
                  <Link className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                  transition-all duration-200'>Know More</Link>
                  <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                </div>
              </div>
              {/* card 5 */}
              <div className='w-full max-h-[300px] cursor-pointer'>
                <img src={Logo} alt='' className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Cards</h3>
                <p className='font-mullish py-3 text-grayText leading-normal'>Simply your recurring, international and team expenses with savings on every spends. Saving upto 10 lacsevery month</p>
                <div className='flex flex-row items-center cursor-pointer group'>
                  <Link className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                  transition-all duration-200'>Know More</Link>
                  <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 group-hover:text-grayBlue transition-all duration-200' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* core features */}
        <section className='w-full mt-14 relative'>
          <div className='relative w-11/12 max-w-[1080px] mx-auto pt-4'>
            <h2 className='font-mullish font-bold text-2xl text-center'>Features</h2>
            <div className='w-6 h-1 bg-greenLight mx-auto mt-4 mb-6'></div>
            <p
            className='font-mullish text-center max-w-[450px] text-white'>Empower your bussiness with all the right tools to accept online payments and provide the best </p>

             {/* Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-2'>
              {/* card 1 */}
              <div>
                <img src={Logo} alt="" className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold'>Instant Activation</h3>
                <p className='font-mullish'>Get Activated and transact within 2 minutes. Completely online onboarding with minimum </p>
              </div>
              {/* card2 */}
              <div>
                <img src={Logo} alt="" className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold'>Instant Activation</h3>
                <p className='font-mullish'>Get Activated and transact within 2 minutes. Completely online onboarding with minimum </p>
              </div>
              {/* card3 */}
              <div>
                <img src={Logo} alt="" className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold'>Instant Activation</h3>
                <p className='font-mullish'>Get Activated and transact within 2 minutes. Completely online onboarding with minimum </p>
              </div>
              {/* card4 */}
              <div>
                <img src={Logo} alt="" className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold'>Instant Activation</h3>
                <p className='font-mullish'>Get Activated and transact within 2 minutes. Completely online onboarding with minimum </p>
              </div>
              {/* card5 */}
              <div>
                <img src={Logo} alt="" className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold'>Instant Activation</h3>
                <p className='font-mullish'>Get Activated and transact within 2 minutes. Completely online onboarding with minimum </p>
              </div>
              {/* card6 */}
              <div>
                <img src={Logo} alt="" className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold'>Instant Activation</h3>
                <p className='font-mullish'>Get Activated and transact within 2 minutes. Completely online onboarding with minimum </p>
              </div>
              {/* card7 */}
              <div>
                <img src={Logo} alt="" className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold'>Instant Activation</h3>
                <p className='font-mullish'>Get Activated and transact within 2 minutes. Completely online onboarding with minimum </p>
              </div>
              {/* card8 */}
              <div>
                <img src={Logo} alt="" className='w-12 h-12'/>
                <h3 className='font-mullish text-lg font-bold'>Instant Activation</h3>
                <p className='font-mullish'>Get Activated and transact within 2 minutes. Completely online onboarding with minimum </p>
              </div>
                
            </div>
          </div>
        </section>

        {/* join razorpay section */}
        <section className='relative pt-40 pb-12 -mt-[100px]'>
          <div className='w-11/12 max-w-[1080px] mx-auto relative flex flex-col md:flex-row'>
            {/* left part */}
            <div className='flex flex-col justify-center w-full md:max-w-[calc(100%-500px)]'>
              <h2 className='font-mullish font-bold text-2xl text-deepBlueHead'>Join the 50,00,000+ business using Razorpay</h2>
              <div className='w-6 h-1 bg-greenLight mb-10 my-4'></div>
              <p className='font-mullish opacity-80'>We make it easier for you to focus on buildig great projects while we work on simplifying your payments. Become one of us by joining
                thousands of our happy users and simplify the online payments experience for your customers.
              </p>
              <p className='font-mullish mt-6 opacity-80'>Focus on your business while we handle the complexities of payments for you.</p>
            </div>

            {/* right part */}
            <div className='h-[500px] w-[500px] relative overflow-y-hidden mx-auto'>
            <div style={{ background: 'linear-gradient(180deg, #f4f8ff, #fff0)' }} className='absolute w-full h-[150px] top-0 z-50'>
            </div>

              <img src={Companies} alt='' className='w-[500px] absolute h-auto object-cover animate-move-up'/>

            <div style={{ background: 'linear-gradient(0deg, #f4f8ff, #fff0)' }} className='absolute w-full h-[150px] bottom-0 z-50'>
            </div>

            </div>
          </div>
        </section>

        {/* testimonial section */}
        <section className='relative'>
          <div className='w-11/12 max-w-[1300px] mx-auto relative'>
            <img src={Grid} alt='' className='absolute w-[60px] h-[50px] top-[8rem] left-[8rem]'/>
            <h3 className='font-mullish font-bold text-2xl text-deepBlueHead text-center'>An Experience <br/>
              People Love to Talk About</h3>
              <div className='w-6 h-1 bg-greenLight mx-auto my-4'></div>

          {/* left section */}
          <button className='w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-0 top-1/2 flex justify-center items-center'>
            <div className='w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center
            mix-blend-multiply'>
            <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 font-bold group-hover:text-grayBlue transition-all duration-200 rotate-180'/>
            </div>
          </button>

          {/* right section */}
          <button className='w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-0 top-1/2 flex justify-center items-center'>
            <div className='w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center
            mix-blend-multiply'>
            <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b72e7"}} className='w-5 h-5 font-bold group-hover:text-grayBlue transition-all duration-200' />
            </div>
          </button>

          {/* main content */}
          <div className='flex flex-col xl:flex-row max-w-[960px] items-center mx-auto my-14 space-x-[10rem]'>
            {/* left image */}
            <img src={Me} alt='' className='w-[233px] rounded-xl z-10'/>

            {/* right part */}
            <div className='max-w-[400px] flex flex-col'>
              <img src={Quatation} alt='' className='w-[50px] '/>
              <p className='font-mullish text-3xl font-extralight xl:order-1'>
                Readymade Closed Wallet Solution For Quick Refunds
              </p>
              <Link to="/" className='text-grayText italic underline xl:order-1'>Learn More</Link>
              <h3 className='font-mullish font-extrabold text-2xl -order-1 xl:order-5'>Lorem Ipsum</h3>
                <p className='font-mullish font-medium xl:order-1'>CEO, XYZ Engineering Company</p>
                <img src={Eng} alt='' className='w-[90px] xl:order-1'/>
            </div>
          </div>

          {/* 6 dot div */}
          <div className='w-full flex flex-row mx-auto space-x-2 justify-center'>
            {/* dot 1 */}
            <div className='h-[10px] w-[10px] bg-gray-300 rounded-full'></div>
            <div className='h-[10px] w-[10px] bg-lightBlue300 rounded-full'></div>
            <div className='h-[10px] w-[10px] bg-gray-300 rounded-full'></div>
            <div className='h-[10px] w-[10px] bg-gray-300 rounded-full'></div>
            <div className='h-[10px] w-[10px] bg-gray-300 rounded-full'></div>
            <div className='h-[10px] w-[10px] bg-gray-300 rounded-full'></div>
          </div>
          </div>
        </section>

        {/* CTA */}
        <section className='relative'>
          {/* main content */}
          <div className='w-11/12 max-w-[1080px] relative flex flex-row items-center justify-between space-x-20 mx-auto'>
            {/* left part */}
            <div className='flex flex-col gap-5 mt-12 max-w-[600px]'>
              <h2 className='font-mullish font-bold text-2xl'>Supercharge your business with Razorpay</h2>
              <div className='w-6 h-1 bg-greenLight'></div>
              <p className='font-mullish'>Sign up now to experience the future of payments and offer <br/> your customers the best checkout experience</p>

              <ul className='flex flex-row flex-wrap gap-x-11 gap-y-3'>
                <li className='font-mullish flex flex-row'>
                <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                  <span>Quick onboarding</span>
                </li>
                <li className='font-mullish flex flex-row'>
                <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                  <span>Access to entire product suite</span>
                </li>
                <li className='font-mullish flex flex-row'>
                <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                  <span>API Access</span>
                </li>
                <li className='font-mullish flex flex-row'>
                <FontAwesomeIcon icon={faCheck} style={{color : "#63E6BE"}} />
                  <span>24*7 Support</span>
                </li>
              </ul>

              <button className='min-w-[32px] font-mullish text-sm font-bold text-lightBlue300 border flex rounded-sm items-center
              hover:text-lightBlue500 transition-all duration-200 py-3 px-4 place-self-start'>Sign Up  <FontAwesomeIcon icon={faArrowRight}/>
                </button>

            </div>
            {/* right side image */}
            <img src={Laptop} alt='' className='w-[260px] mt-16 pt-3 hidden lg:block'/>
          </div>
        </section>
    </>
  )
}
