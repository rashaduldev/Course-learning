const Footer = () => {
    return (
        <div className="">
          {/* 1st lear */}
          <div className="flex flex-col lg:flex-row justify-around items-center bg-[#F4F6F8] py-10 px-12">
              <p className="text-4xl font-bold">Cource</p>
              <p className="text-lg font-bold my-5 lg:my-0">Subscribe and get 20% Off Your First Purchase</p>
                <div className="flex items-center relative">
                    <input type="text" className="w-80 h-10 p-3 rounded-lg border-[1px] border-gray-400" placeholder="Email address" />
                    <button className="p-[6px] rounded-lg bg-black text-white absolute right-[1px] px-5">Sibscribe</button>
                </div>
          </div>
          {/* 2nd lear */}
            <div className="footer bg-[#C8FACD] text-base-content p-10 lg:px-52 py-8">
  
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">Accessibility</a>
              <a className="link link-hover">Help centre</a>
            </nav>
            <nav>
              <h6 className="footer-title">About</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Carrer</a>
            </nav>
            <nav>
              <h6 className="footer-title">Quick Links</h6>
              <a className="link link-hover">Accessibility</a>
              <a className="link link-hover">Help center</a>
            </nav>
            <nav>
              <h6 className="footer-title">Payments</h6>
              <a className="link link-hover">Payments</a>
              <a className="link link-hover">Ways to way</a>
              <a className="link link-hover">Student discount</a>
            </nav>
            <aside>
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current">
                <path
                  d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"/>
              </svg>
              <p>
                ACME Industries Ltd.
                <br />
                Providing reliable tech since 1992
              </p>
            </aside>
            </div>
          {/* 3rd lear */}
          <div className="footer bg-[#5BE584] text-black items-center lg:px-48 py-1 flex justify-between flex-col lg:flex-row">
          <aside className="grid-flow-col items-center">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
            Privacy Policy
            </a>
            <a>
            Support 
            </a>
            <a>
            Terms & Condition
            </a>
          </nav>
          </div>
        </div>
    );
};

export default Footer;