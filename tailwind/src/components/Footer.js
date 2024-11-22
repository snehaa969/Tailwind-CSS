import React from 'react'
import { Link } from 'react-router-dom';
import CC from '../assets/cc.jpg';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/Instagram.webp';
import Twe from '../assets/twe.png';
import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';
import BB from '../assets/bb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <>
      <footer
        style={{ background: 'linear-gradient(to right, #eef9fe, #edf7ff)' }}
        className="-mt-[400px] md:-mt-[300px]">
        <div className='w-10/12 justify-evenly pt-[400px] pb-10 md:pt-[350px] md:my-0 md:w-11/12 max-w-[1080px] mx-auto flex flex-row space-x-16'>

          {/* column 1 */}
          <div className='flex flex-col md:max-w-[340px] lg:max-w-[260px]'>
            <h3 className='text-deepBlueHead font-bold text-2xl font-mullish'>Razorpay</h3>
            <p className='text-sm text-grayText my-3 font-mullish'>
              Razorpay is the only payments solution in India that allows business to accept, process and disburse payments
              with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI,
              and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
            </p>
            <p className='text-sm text-grayText my-3 font-mullish'>
              RazorpayX supercharges your business banking experiences, bringing effectiveness, efficiency, and excellence to all financial
            </p>
            <p className='text-sm text-grayText my-3 font-mullish'>
              Manage your marketpiece, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital
              loans-all from a single platform. Fast forward your business with Razorpay
            </p>
            <p className='text-sm text-grayText my-3 font-mullish'>
              Manage your marketpiece, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital
              loans-all from a single platform. Fast forward your business with Razorpay
            </p>
            <h3 className='font-bold uppercase'>Subscribe to Our
              <br />newsletter</h3>
            <form className='mt-2 flex space-x-2'>
              <input type='text' placeholder='Your email address' className='text-grayText border rounded-md text-center'/>
              <button className='border text-lightBlue py-[3px] px-[8px] rounded-md font-mullish font-bold
                  hover:bg-lightBlue500 hover:text-white translate-all duration-200'>Subscribe <FontAwesomeIcon icon={faArrowRight} /></button>
            </form>
            <div className='flex flex-row space-x-2'>
              <img src={CC} alt='' className='w-[140px] h-[120px]' />
              <img src={BB} alt='' className='w-[150px] h-[120px]' />
            </div>
          </div>

          {/* column2 */}
          <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between'>
            {/* sub col 1 */}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish uppercase font-bold text-gray2 mb-1 text-base'>
                  BANKING PLUS
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                      RazorpayX</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Current Accounts</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Payouts Links</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Payouts</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Corporate Credit Card</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    View Live Demo <span className='uppercase bg-green-500 text-white p-1 text-xs'>new</span>
                    </Link>
                  </li>
                </ul>
              </div>   
            
            {/* sub col 2 */}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish text-base uppercase font-bold text-gray2 mb-1'>
                  LENDING
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish font-medium text-sm text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                      Razorpay Contact</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-sm text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Instant Settelments</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-sm text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Working Capital Loans</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-sm text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Marketplace Instant Settelments</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* sub col 3*/}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish text-base uppercase font-bold text-gray2 mb-1'>
                  RISK & FRAUD
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                     IT Services</Link>
                  </li>
                  <li className='space-x-2'>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    RazorpayX <span className='uppercase bg-green-500 text-white p-1 text-xs'>new</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* sub col 4*/}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish text-base uppercase font-bold text-gray2 mb-1'>
                  BECOME A PARTENER
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                     Refer and Learn</Link>
                  </li>
                  <li>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Onboarding APIs</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* sub col 5*/}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish text-base uppercase font-bold text-gray2 mb-1'>
                  MORE
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                     Routes</Link>
                  </li>
                  <li >
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Invoices</Link>
                  </li>
                  <li >
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Freelancer Payments</Link>
                  </li>
                  <li >
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    International</Link>
                  </li>
                  <li >
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Flash Checkout</Link>
                  </li>
                  <li >
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    UPI</Link>
                  </li>
                  <li >
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    ePOS</Link>
                  </li>
                  <li >
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Checkout Demo</Link>
                  </li>
                  <li >
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    RazorpayX Payments</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>  
          {/* column3 */}
          <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between'>
            {/* sub col 1 */}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish uppercase font-bold text-gray2 mb-1 text-base'>
                  ACCEPT PAYMENTS
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                      Payment Gateway</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Payment Pages</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Payments Links</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    QR Codes</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Subscriptions</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Smart Collect
                    </Link>
                  </li>
                </ul>
              </div>   
            
            {/* sub col 2 */}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish text-base uppercase font-bold text-gray2 mb-1'>
                  DEVELOPERS
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish font-medium text-sm text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                      Docs</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-sm text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Integrations</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-sm text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    API Reference</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* sub col 3*/}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish text-base uppercase font-bold text-gray2 mb-1'>
                 RESOURCES
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                     Blog </Link>
                  </li>
                  <li className='space-x-2'>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Customers Stories
                    </Link>
                  </li>
                  <li className='space-x-2'>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Events
                    </Link>
                  </li>
                  <li className='space-x-2'>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Changeback Guide
                    </Link>
                  </li>
                  <li className='space-x-2'>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Settlement Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* sub col 4*/}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish text-base uppercase font-bold text-gray2 mb-1'>
                  SOLUTIONS
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                     Education</Link>
                  </li>
                  <li>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    E-commerce</Link>
                  </li>
                  <li>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Saas</Link>
                  </li>
                  <li>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    BFSI</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* sub col 5*/}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish text-base uppercase font-bold text-gray2 mb-1'>
                  FREE TOOLS
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                     GST Calculator</Link>
                  </li>
                  <li >
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Online TDS Payments</Link>
                  </li>
                  <li >
                    <Link className='font-mullish text-sm font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    GST Number Search <span className='uppercase bg-green-500 text-white p-1 text-xs'>new</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
           </div>
          {/* column4 */}
          <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between'>
            {/* sub col 1 */}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish uppercase font-bold text-gray2 mb-1 text-base'>
                  COMPANY
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                      About US <span className='uppercase bg-green-500 text-white p-1 text-xs'>new</span></Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Terms of Use</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Privacy Policy</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Grievance Redness</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Responsible Disclone</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Partners
                    </Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    White Papers
                    </Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-lightBlue500 text-sm hover:text-grayBlue transition-all duration-200'>
                    Cororate Information
                    </Link>
                  </li>
                </ul>
              </div>   
            
            {/* sub col 2 */}
            <div className='space-y-2'>
              <div>
                <p className='font-mullish text-base uppercase font-bold text-gray2 mb-1'>
                  HELP & SUPPORT
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-mullish font-medium text-sm text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                      Support</Link>
                  </li>
                  <li>
                    <Link className='font-mullish font-medium text-sm text-lightBlue500 hover:text-grayBlue transition-all duration-200'>
                    Knowledge base</Link>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className='font-mullish text-base uppercase font-bold text-gray2 mb-1'>FIND US ONLINE</h3>
            <div className='flex space-x-2 '>
              <img src={Facebook} alt='' className='w-[40px] h-[35px] rounded-md'/>
              <img src={Instagram} alt='' className='w-[40px] h-[35px] rounded-md'/>
              <img src={Twe} alt='' className='w-[40px] h-[35px] rounded-md'/>
              <img src={Linkedin} alt='' className='w-[40px] h-[35px] rounded-md'/>
              <img src={Github} alt='' className='w-[40px] h-[35px] rounded-md'/>
            </div>
            <h3 className='font-mullish text-base uppercase font-bold text-gray2'>REGD, OFFICE ADDRESS</h3>
            <div className='flex items-center mb-8'>
              <p className='text-sm text-gray2 font-semibold'>Razorpay Software Private Limited <br/> 1st floor, SR Cyber.<br/>
              22 Lashkar House Road, Adugadi,<br/>
              Bengaluru, India<br/>
              CN: U72200KA2013PTC097389</p>
            </div>
            <div className='space-y-3'>
            <p className='font-mullish text-sm mt-4 font-semibold text-gray2'>RazorpayX 2022 <br/> TGC6570924</p>
            </div>
          </div>
           </div>
         </div>
        </div>
      </footer>
    </>
  )
}
