import React from "react";

const Submit = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="bg-[#0A0D17] w-[1512px] h-[947px]  mx-auto ">
          <div className="flex items-start justify-center  pt-[67px]">
            <div className="text-center mb-[50px]">
              <h1 className=" text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
                Get in touch
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Reach out, and let's create a universe of possibilities
                together!
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-[1256px] h-[576px] text-white">
            <div className="flex flex-row items-start  justify-center gap-[100px] w-full">
              <div className="flex flex-col ">
                <div className="w-fit h-fit">
                  <h4 className="text-4xl pb-4 bg-gradient-to-bl">
                    Let’s connect constellations
                  </h4>
                  <p className="w-[415px] h-[34px] mb-[41px] text-gray-500">
                    Let's align our constellations! Reach out and let the
                    <p className="text-gray-500">
                      magic of collaboration illuminate our skies.
                    </p>
                  </p>
                </div>
                <form>
                  <form className="flex flex-col w-[500px] p-6 space-y-4 bg-gray-900 text-white rounded-lg">
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <textarea
                      placeholder="Message"
                      rows="4"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg text-white text-lg font-semibold flex items-center justify-center hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                      Send it to the moon 🚀
                    </button>
                  </form>
                </form>
              </div>
              <div>
                <img src="./Imagebox.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submit;
