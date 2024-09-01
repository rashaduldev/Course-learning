
const Billing = () => {
  return (
        <div className="mx-52">
             <div className="flex flex-col md:flex-row justify-between pt-36 pb-5 gap-5">
      {/* Billing Details */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0 pr-[124px] border-r-2">
        <h2 className="mb-4 header_text">Billing Details</h2>
        <p className="text-gray-600 mb-4">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
        <form className="mt-[35px]">
          <div className="">
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="my-10">
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Phone*"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </form>
      </div>

      {/* Billing Summary */}
      <div className="md:w-1/2 w-full ml-[124px]">
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-[32px] font-[700] leading-[48px] mb-[35px]">Billing Summary</h3>
          <div className="mb-4">
            <div className="flex justify-between">
              <span className="mb-[24px]">Product Name</span>
              <span className="Primary_Text_Colour">Amount</span>
            </div>
            <div className="flex justify-between">
              <span className="mb-[24px] Secondery_Text_Colour">Vcourse Lifetime access</span>
              <span className="Primary_Text_Colour">5,850 BDT</span>
            </div>
            <div className="flex justify-between">
              <span className="mb-[24px] Secondery_Text_Colour">Device Access</span>
              <span>x2</span>
            </div>
          </div>
          <hr className="mb-[7px] font-bold" />
          <div className="flex justify-between">
              <span className="mb-[24px]">Subtotal</span>
              <span className="Primary_Text_Colour">5,850 BDT</span>
            </div>
          <div className="mb-[24px] flex items-center justify-between">
            <p>Have a coupon code?</p>
            <div className="flex items-center">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-3/4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md button_colour">
              Apply
            </button>
            </div>
          </div>
          <div className="flex justify-between font-semibold text-gray-900">
            <span>Total</span>
            <span>5,850 BDT</span>
          </div>
        </div>
      </div>
    </div>
    {/*  */}
       <div className="flex justify-end mb-20 ml-[124px]    ">
            <div className="mt-6 bg-white p-6 border w-[46%] mr-5 rounded-lg">
            <h3 className="text-[32px] font-[700] leading-[48px] mb-4">Payment Method</h3>
           <div className="flex items-center gap-[35px]">
              <div className="flex items-center mb-4">
                    <input type="radio" id="sslcommerz" name="payment" className="mr-2" />
                    <img className="W-[89.85PX] h-[40px]" src="https://inews.zoombangla.com/wp-content/uploads/2024/03/Bkash.jpg" alt="" />
                </div>
                <div className="flex items-center mb-4">
                    <input type="radio" id="debit" name="payment" className="mr-2" />
                    <label htmlFor="debit">Debit Card</label>
                </div>
           </div>
            <button className="w-full button_colour py-3 rounded-md font-semibold">
                Proceed Payment (5,850 BDT)
            </button>
            </div>
       </div>
        </div>
  );
};

export default Billing;