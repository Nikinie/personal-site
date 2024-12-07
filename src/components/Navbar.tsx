import { component$, useSignal, useOnWindow, $ } from "@builder.io/qwik";

export default component$(() => {
  const scrolled = useSignal(false);
  const scrollThresholdDown = 100;
  const scrollThresholdUp = 30;
  const mobileBreakpoint = 768;

  useOnWindow(
    "scroll",
    $(() => {
      if (window.innerWidth < mobileBreakpoint) {
        return;
      }
      if (scrolled.value && window.scrollY < scrollThresholdUp) {
        scrolled.value = false;
        return;
      }
      if (!scrolled.value && window.scrollY > scrollThresholdDown) {
        scrolled.value = true;
        return;
      }
    }),
  );

  return (
    <>
      {/* Links - visible on larger screens */}
      <nav class="sticky top-0 hidden justify-center md:flex">
        <div
          class={`max-w-fit animate-gradientMove border border-gray-400 border-opacity-50 bg-[radial-gradient(circle_20rem_at_50%_50%,_var(--tw-gradient-stops))] from-white/10 bg-[length:200%_200%] bg-[position:0%_0%] px-3 shadow-md transition-all duration-100 ease-in-out ${
            scrolled.value
              ? "rounded-b-xl border-t-0 py-1"
              : "m-4 rounded-xl py-3"
          } `}
        >
          <div class="flex items-center space-x-4">
            <a
              href="/"
              class="duration-250 px-5 py-2 transition-all ease-in-out hover:text-gray-400"
            >
              Home
            </a>
            <a
              href="/about"
              class="duration-250 px-5 py-2 transition-all ease-in-out hover:text-gray-400"
            >
              About
            </a>
            <a
              href="/services"
              class="duration-250 px-5 py-2 transition-all ease-in-out hover:text-gray-400"
            >
              Services
            </a>
            <a
              href="/contact"
              class="duration-250 px-5 py-2 transition-all ease-in-out hover:text-gray-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <nav class="fixed bottom-0 left-0 right-0 z-50 text-sm md:hidden">
        <div class="w-full animate-gradientMove rounded-t-md border-t border-gray-400 border-opacity-50 bg-[radial-gradient(circle_12rem_at_70%_100%,_var(--tw-gradient-stops))] from-white/10 text-gray-200 shadow-md transition-all duration-100 ease-in-out">
          <div class="flex justify-between divide-x divide-gray-400 divide-opacity-50">
            <a href="/" class="w-full px-1 py-5 text-center">
              Home
            </a>
            <a href="/about" class="w-full px-1 py-5 text-center">
              About
            </a>
            <a href="/services" class="w-full px-1 py-5 text-center">
              Services
            </a>
            <a href="/contact" class="w-full px-1 py-5 text-center">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
});
