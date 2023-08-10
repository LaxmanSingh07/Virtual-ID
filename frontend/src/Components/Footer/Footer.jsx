function Footer() {
  return (
    <footer className="border-t-2 border-gray-300 border-dashed">
      <div className="mx-auto w-full max-w-screen-xl p-8 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 items-center">
            <a href="" className="flex items-center justify-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Decorar
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 justify-around">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-blue-500 font-medium"></ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Address
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Dehradun Uttarakhand India <br />
                248001
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className=" text-blue-500 hover:underline">
              Decorar
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
