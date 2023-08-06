import React from "react";

function Footer() {
  return (
    <footer>
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 border-t-4 border-red-500 border-dotted">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0 items-center">
            <a href="https://flowbite.com/" class="flex items-center">
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Virtual-ID
              </span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Get in touch
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://flowbite.com/" class="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    class="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-center">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" class="hover:underline">
              Virtual-ID
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
