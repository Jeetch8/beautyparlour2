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
      <div className="flex justify-between">
        {/* Left side */}
        <div className="max-w-[50vw] w-full text-center">
          <div className="flex-col flex items-center max-w-[34vw] mt-4 h-full justify-center mx-auto">
            <div className="mb-4 flex justify-between w-full">
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
            <button className="mr-auto ml-3 mt-5 border-[1px] border-solid border-black rounded-full px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="max-w-[50vw] w-full text-center">
          <div className="mt-8">
            <h2 className="font-bold text-[25px]">We Provide</h2>
            <h2 className="text-[20px]">Value for Money Services</h2>
          </div>
          <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-[30vw] p-5 flex flex-col justify-center items-center text-center rounded-lg my-6 mx-auto">
            <MakeUpSVG />
            <h3>Makeup</h3>
            <h3 className="max-w-[20vw] text-center">
              Talented make up artists who ensure you look your best
            </h3>
          </div>
          <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex flex-col justify-center items-center text-center w-[30vw] p-5 rounded-lg my-6 mx-auto">
            <MehandiSVG />
            <h3>Mehendi</h3>
            <h3 className="max-w-[20vw]">
              Experienced mehendi artists who provide a wide range of designs
            </h3>
          </div>
          <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex flex-col justify-center items-center text-center w-[30vw] p-5 rounded-lg my-6 mx-auto">
            <DecorationSVG />
            <h3>Decoration</h3>
            <h3 className="w-[20vw]">
              Professionally designed decor at attractive prices
            </h3>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="text-center my-20">
        <h1 className="font-bold text-[30px]">How it Works</h1>
        <h3 className="text-[20px] font-light mb-20">
          5 easy steps for a hassle-free makeover
        </h3>
        <div className="flex h-[40vh] relative">
          <div className="text-center w-[200px]">
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
          <div className="flex items-center h-full max-h-[30vh]">
            <PurpleOrangeDottedLineSVG />
          </div>
          <div className="mt-auto">
            <div className="flex justify-center">
              <ExploreOptionsSVG />
            </div>
            <div className="w-[200px] text-center">
              <h2 className="text-[15px] font-bold my-4">See the options</h2>
              <h3 className="text-[13px]">
                Get a walkthrough of our designs, pricign & services
              </h3>
            </div>
          </div>
          <div className="flex items-center h-[30vh]">
            <OrageBlueDottedLineSVG />
          </div>
          <div className="w-[250px] text-center">
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
          <div className="h-[30vh] flex items-center">
            <BlueRedDottedLineSVG />
          </div>
          <div className="text-center mt-auto">
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
          <div className="flex items-center h-full max-h-[30vh]">
            <RedGreenDottedLineSVG />
          </div>
          <div className="w-[220px] text-center">
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
    </div>
  );
}

export default App;
