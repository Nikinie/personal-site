import { component$ } from "@builder.io/qwik";

interface HasuraIconProps {
  class?: string;
  fill?: string;
}

export const HasuraIcon = component$<HasuraIconProps>(
  ({ class: className, fill }) => (
    <svg
      class={`${className ?? ""}`}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 135 150"
      style="enable-background:new 0 0 135 150;"
      xml:space="preserve"
    >
      <style>{`.st0{fill:${fill ?? "black"};}`}</style>
      <g>
        <g>
          <path
            class="st0"
            d="M105.9,32.4c2.6-6.4,2.7-19.6-0.8-29.8l0,0c-0.9-1.8-3.7-1.3-3.8,0.8v0.7c-0.6,9.6-4.2,14.9-9.3,17.4
			c-0.9,0.4-2.2,0.3-3-0.2c-6.2-3.9-13.5-6.2-21.4-6.2s-15.2,2.3-21.4,6.2c-0.8,0.5-1.8,0.6-2.7,0.3c-5.3-2-9-7.8-9.7-17.5V3.4
			c-0.1-2-2.9-2.6-3.8-0.8c-3.5,10.2-3.5,23.4-0.8,29.8c1.3,3.2,1.4,6.8,0.3,10.1c-1.4,4.2-2.1,8.7-2.1,13.4
			C27.6,77.1,45.7,95.2,67,95.5c22.4,0.3,40.7-17.8,40.7-40.2c0-4.5-0.7-8.8-2.1-12.8C104.5,39.2,104.6,35.6,105.9,32.4z M66.9,85.8
			c-16.3-0.3-29.7-13.6-30-30C36.6,38.5,50.7,24.3,68,24.7c16.3,0.3,29.7,13.6,30,30C98.4,72,84.3,86.2,66.9,85.8z"
          />
          <path
            class="st0"
            d="M72.2,52L65,40.9c-1.2-1.8-3.6-2.3-5.4-1.2c-1.1,0.7-1.8,1.9-1.8,3.3c0,0.7,0.3,1.5,0.7,2.1l4.9,7.6
			c0.4,0.6,0.3,1.3-0.1,1.8l-7.6,8.3c-1.4,1.6-1.3,4,0.3,5.5c0.7,0.7,1.7,1,2.7,1c1.1,0,2.1-0.5,2.8-1.3l5.6-6.6
			c0.4-0.5,1.2-0.5,1.6,0.1l4,5.7c0.3,0.4,0.6,0.8,1.1,1.2c1.4,1,3.1,0.9,4.3,0.1l0,0c1.1-0.7,1.8-1.9,1.8-3.3
			c0-0.7-0.3-1.5-0.6-2.1L72.2,52z"
          />
        </g>
        <g>
          <path
            class="st0"
            d="M12.6,129.6H8.7c-0.6,0-1.1-0.5-1.1-1.1v-12.3c0-0.6-0.5-1.1-1.1-1.1H3.1c-0.6,0-1.1,0.5-1.1,1.1v31.3
			c0,0.6,0.5,1.1,1.1,1.1h3.4c0.6,0,1.1-0.5,1.1-1.1v-12.2c0-0.6,0.5-1.1,1.1-1.1h3.9c0.6,0,1.1,0.5,1.1,1.1v12.2
			c0,0.6,0.5,1.1,1.1,1.1h3.4c0.6,0,1.1-0.5,1.1-1.1v-31.3c0-0.6-0.5-1.1-1.1-1.1h-3.4c-0.6,0-1.1,0.5-1.1,1.1v12.3
			C13.6,129.1,13.2,129.6,12.6,129.6z"
          />
          <path
            class="st0"
            d="M29.9,116l-5.5,31.3c-0.1,0.6,0.4,1.2,1,1.2h3.4c0.5,0,1-0.4,1-0.9l0.9-5.7c0.1-0.5,0.5-0.9,1-0.9H36
			c0.5,0,1,0.4,1,0.9l1,5.8c0.1,0.5,0.5,0.9,1,0.9h3.5c0.7,0,1.2-0.6,1-1.3L37.8,116c-0.1-0.5-0.5-0.9-1-0.9H31
			C30.5,115.1,30,115.5,29.9,116z M35,136.3h-2.1c-0.7,0-1.1-0.6-1-1.2l1-11.5c0.2-1.2,1.9-1.2,2.1,0l1.1,11.5
			C36.2,135.7,35.7,136.3,35,136.3z"
          />
          <path
            class="st0"
            d="M58.7,129.1h-3.8c-0.7,0-1.1-0.3-1.1-1.1v-7.2c0-0.7,0.4-1.1,1.1-1.1h2.2c0.7,0,1.1,0.3,1.1,1.1v3.4
			c0,0.6,0.5,1.1,1.1,1.1h3.5c0.6,0,1.1-0.5,1.1-1.1V120c0-3.3-1.8-5-5.3-5h-5.1c-3.5,0-5.3,1.7-5.3,5v8.6c0,3.3,1.8,5.1,5.2,5.1
			h3.8c0.7,0,1.1,0.3,1.1,1.1v8c0,0.7-0.3,1.1-1.1,1.1H55c-0.7,0-1.1-0.3-1.1-1.1v-3.4c0-0.6-0.5-1.1-1.1-1.1h-3.5
			c-0.6,0-1.1,0.5-1.1,1.1v4.2c0,3.3,1.8,5,5.3,5h5c3.5,0,5.3-1.7,5.3-5v-9.4C63.9,130.9,62.1,129.1,58.7,129.1z"
          />
          <path
            class="st0"
            d="M79.8,142.8c0,0.7-0.3,1.1-1.1,1.1h-3c-0.7,0-1.1-0.3-1.1-1.1v-26.6c0-0.6-0.5-1.1-1.1-1.1H70
			c-0.6,0-1.1,0.5-1.1,1.1v27.3c0,3.3,1.8,5,5.3,5H80c3.5,0,5.3-1.7,5.3-5v-27.3c0-0.6-0.5-1.1-1.1-1.1h-3.5c-0.6,0-1.1,0.5-1.1,1.1
			v26.6H79.8z"
          />
          <path
            class="st0"
            d="M107.5,130.3v-10.2c0-3.3-1.8-5-5.3-5h-10c-0.6,0-1.1,0.5-1.1,1.1v31.3c0,0.6,0.5,1.1,1.1,1.1h3.4
			c0.6,0,1.1-0.5,1.1-1.1v-11c0-0.6,0.5-1.1,1.1-1.1l0,0c0.4,0,0.8,0.3,1,0.7l4.4,11.8c0.2,0.4,0.6,0.7,1,0.7h3.7
			c0.7,0,1.3-0.7,1-1.4l-4.2-10.9c-0.2-0.5,0.1-1.1,0.6-1.4C106.7,134,107.5,132.5,107.5,130.3z M102,120.9v8.8
			c0,0.7-0.4,1.1-1.1,1.1h-3.1c-0.6,0-1.1-0.5-1.1-1.1v-8.8c0-0.6,0.5-1.1,1.1-1.1h3.1C101.6,119.8,102,120.1,102,120.9z"
          />
          <path
            class="st0"
            d="M125.9,115.1h-5.8c-0.5,0-1,0.4-1,0.9l-5.5,31.3c-0.1,0.6,0.4,1.2,1,1.2h3.4c0.5,0,1-0.4,1-0.9l0.9-5.7
			c0.1-0.5,0.5-0.9,1-0.9h4.3c0.5,0,1,0.4,1,0.9l1,5.8c0.1,0.5,0.5,0.9,1,0.9h3.5c0.7,0,1.2-0.6,1-1.3L127,116
			C126.9,115.5,126.4,115.1,125.9,115.1z M124.2,136.3h-2.1c-0.7,0-1.1-0.6-1-1.2l1-10.5c0.2-1.2,1.9-1.2,2.1,0l1.1,10.5
			C125.3,135.7,124.8,136.3,124.2,136.3z"
          />
        </g>
      </g>
    </svg>
  ),
);
