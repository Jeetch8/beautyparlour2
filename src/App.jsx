import {
  DecorationSVG,
  MakeUpSVG,
  MehandiSVG,
} from "./Svg/ServicesProvidedSVG";
import {
  BlueRedDottedLineSVG,
  BookUsSVG,
  CustomPackageSVG,
  ExploreOptionsSVG,
  OrageBlueDottedLineSVG,
  PurpleOrangeDottedLineSVG,
  RedGreenDottedLineSVG,
  RelaxSVG,
  TalkWithUsSVG,
} from "./Svg/WorkingsSecSVG";

function App() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between py-3">
        <h1 className="ml-8 text-white font-medium bg-gradient-to-r from-red-500 to-red-800 rounded-lg px-2 pt-1 pb-2">
          Logo
        </h1>
      </div>
      {/* Hero section */}
      <div className=" grid grid-flow-col grid-cols-3 grid-rows-2 gap-1">
        <img src="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <img src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <img src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <img src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <img src="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <img src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      </div>
      {/* Section2 */}
      <div className="flex justify-between flex-wrap lg:flex-nowrap ">
        {/* Left side */}
        <div className="lg:max-w-[50vw] w-full text-center lg:h-[120vh] h-[70vh] bg-gradient-to-r from-rose-100 to-teal-100 rounded-lg">
          <div className="flex-col flex items-center max-w-[34vw] mt-4 h-full justify-center mx-auto">
            <div className="mb-4 flex justify-between w-full flex-wrap gap-5 lg:gap-0">
              <input
                className=" bg-zinc-100 py-3 rounded-full pl-4 pr-10"
                type={"text"}
                placeholder="Name"
              />
              <input
                className=" bg-zinc-100 py-3 rounded-full pl-4 pr-10"
                type={"text"}
                placeholder="Phone"
              />
            </div>
            <select
              className="py-3 bg-zinc-100 rounded-full px-3 w-full"
              name="services"
              id="services"
            >
              <option value="none">Choose a service</option>
              <option value="makeup">Makeup</option>
              <option value="mehendi">Mehendi</option>
              <option value="decoration">Decoration</option>
            </select>
            <button className="mr-auto ml-3 mt-5 border-[1px] rounded-lg px-4 py-2 bg-gradient-to-tr from-indigo-300 to-purple-400 text-white font-medium">
              Contact Us
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="lg:max-w-[50vw] w-full text-center">
          <div className="mt-8 pb-4">
            <h2 className="font-bold text-[30px]">We Provide</h2>
            <h2 className="text-[25px] font-light">Value for Money Services</h2>
          </div>
          <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-[75vw] lg:w-[25vw] p-5 flex flex-col justify-center items-center text-center rounded-lg my-6 mx-auto">
            <div className="mt-4">
              <MakeUpSVG />
            </div>
            <h3 className="font-medium mt-4">Makeup</h3>
            <h3 className="lg:max-w-[20vw] text-center mt-2 mb-4 text-[15px] font-light">
              Talented make up artists who ensure you look your best
            </h3>
          </div>
          <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex flex-col justify-center items-center text-center w-[75vw] lg:w-[25vw] p-5 rounded-lg my-6 mx-auto">
            <div className="mt-4">
              <MehandiSVG />
            </div>
            <h3 className="font-medium mt-4">Mehendi</h3>
            <h3 className="lg:max-w-[20vw] text-center mt-2 mb-4 text-[15px] font-light">
              Experienced mehendi artists who provide a wide range of designs
            </h3>
          </div>
          <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex flex-col justify-center items-center text-center w-[75vw] lg:w-[25vw] p-5 rounded-lg my-6 mx-auto">
            <div className="mt-4">
              <DecorationSVG />
            </div>
            <h3 className="font-medium mt-4">Decoration</h3>
            <h3 className="lg:max-w-[20vw] text-center mt-2 mb-4 text-[15px] font-light">
              Professionally designed decor at attractive prices
            </h3>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="text-center my-20 px-10">
        <h1 className="font-bold text-[30px]">How it Works</h1>
        <h3 className="text-[20px] font-light mb-20">
          5 easy steps for a hassle-free makeover
        </h3>
        <div className="flex relative flex-wrap lg:flex-nowrap gap-10 lg:gap-0">
          <div className="text-center w-[200px] mx-auto">
            <div className="flex justify-center">
              <TalkWithUsSVG />
            </div>
            <div className="w-[200px]">
              <h2 className="text-[15px] font-bold my-4">Speak to us</h2>
              <h3 className="text-[13px]">
                Give your reequirement & preferences to our wedding expert
              </h3>
            </div>
          </div>
          <div className="flex items-center h-[30vh] hidden lg:flex">
            <PurpleOrangeDottedLineSVG />
          </div>
          <div className="mt-auto mx-auto">
            <div className="flex justify-center w-[200px]">
              <ExploreOptionsSVG />
            </div>
            <div className="w-[200px] text-center">
              <h2 className="text-[15px] font-bold my-4">See the options</h2>
              <h3 className="text-[13px]">
                Get a walkthrough of our designs, pricign & services
              </h3>
            </div>
          </div>
          <div className="flex items-center h-[30vh] hidden lg:flex">
            <OrageBlueDottedLineSVG />
          </div>
          <div className="w-[250px] text-center mx-auto">
            <div className="flex justify-center">
              <CustomPackageSVG />
            </div>
            <div>
              <h2 className="text-[15px] font-bold my-4">
                Get a custom package
              </h2>
              <h3 className="text-[13px]">
                Recive a customized package base on your reequirement
              </h3>
            </div>
          </div>
          <div className="h-[30vh] flex items-center hidden lg:flex">
            <BlueRedDottedLineSVG />
          </div>
          <div className="text-center mt-auto mx-auto">
            <div className="w-[220px] flex justify-center">
              <BookUsSVG />
            </div>
            <div className="w-[220px]">
              <h2 className="text-[15px] font-bold my-4">Book us</h2>
              <h3 className="text-[13px]">
                Pays small booking fee to confirm once you are happy
              </h3>
            </div>
          </div>
          <div className="flex items-center h-full h-[30vh] hidden lg:flex">
            <RedGreenDottedLineSVG />
          </div>
          <div className="w-[220px] text-center mx-auto">
            <div className="flex justify-center">
              <RelaxSVG />
            </div>
            <div>
              <h2 className="text-[15px] font-bold my-4">Relax</h2>
              <h3 className="text-[13px]">
                Sit back & rerlax while we do all the work
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[13px] flex justify-center font-medium text-white py-4 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200">
        @ Powered by CyberSpace Technologies
      </div>
    </div>
  );
}

export default App;
