import Link from "next/link";

const Restaurantsignup = () => {
  return (
    <>
      <div className="w-full max-w-2xl mx-auto">
        <h1>Signup</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex flex-wrap -mx-3">
            <div className="mb-4 lg:w-6/12 w-full px-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email id
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email id"
              />
            </div>
            <div className="mb-4 lg:w-6/12 w-full px-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contact Numbar
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Contact Numbar"
              />
            </div>
          </div>

          <div className="flex">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Full Address"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Restaurant Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Restaurant Name"
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <span>Sign In</span>
            </button>
            {/* <Link
              className="inline-block align-baseline font-bold text-sm text-emerald-500 hover:text-emerald-600"
              href="#"
            >
              Forgot Password?
            </Link> */}
          </div>
        </form>
        {/* <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p> */}
      </div>
    </>
  );
};

export default Restaurantsignup;
