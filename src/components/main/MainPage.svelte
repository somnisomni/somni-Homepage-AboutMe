<div>
  <div bind:this={ spaceAreaBL } class="space-area bottom-left"><div /></div>
  <div bind:this={ spaceAreaTR } class="space-area top-right"><div /></div>

  <main bind:this={ mainElement }
        class="z-10 font-extralight text-xl md:text-3xl p-6 md:p-8 xl:p-16 transition-all">
    <h1 class="text-6xl font-bold">somni</h1>
    <hr class="!w-32 my-6 border-b-2 border-current"/>

    <Hello />
    <br /><br />
    <AlsoIAm />
    <br /><br />
    <Links />
  </main>
</div>

<script lang="ts">
import anime from "animejs";
import { onMount } from "svelte";
import Hello from "./components/Hello.svelte";
import AlsoIAm from "./components/AlsoIAm.svelte";
import Links from "./components/Links.svelte";

let spaceAreaBL: HTMLElement;
let spaceAreaTR: HTMLElement;
let mainElement: HTMLElement;

function rotateSpaceArea(spaceAreaParent: HTMLElement) {
  const parentHeight = spaceAreaParent.getBoundingClientRect().height;
  const parentWidth = spaceAreaParent.getBoundingClientRect().width;
  const angle = -1 * (Math.atan(parentWidth / parentHeight) * (180 / Math.PI));

  spaceAreaParent.getElementsByTagName("div")[0].setAttribute("style", `--tw-rotate: ${angle}deg`);
}

function scroll(main: HTMLElement, spaceAreaBL: HTMLElement, spaceAreaTR: HTMLElement) {
  const sablTopOffset = spaceAreaBL.getBoundingClientRect().top;
  const sablRightOffset = spaceAreaBL.getBoundingClientRect().right;
  // const satrLeftOffset = spaceAreaTR.getBoundingClientRect().left;
  // const satrBottomOffset = spaceAreaTR.getBoundingClientRect().bottom;

  for(const elem of (main.querySelectorAll("& > *:not(ul), & > ul > *") as NodeListOf<HTMLElement>)) {
    // const topOffset = elem.getBoundingClientRect().top;
    const bottomOffset = elem.getBoundingClientRect().bottom;

    if(bottomOffset > sablTopOffset) {
      const ratio = (bottomOffset - sablTopOffset) / (window.innerHeight - sablTopOffset);
      const transformXAmount = sablRightOffset * ratio;

      elem.style.transform = `translateX(${transformXAmount}px)`;
    } else {
      elem.style.transform = "";
    }

    // if(topOffset < satrBottomOffset) {
    //   const ratio = (satrBottomOffset - topOffset) / satrBottomOffset;
    //   const widthMinusAmount = satrLeftOffset * ratio;

    //   elem.style.width = `calc(100% - ${widthMinusAmount}px)`;
    // } else {
    //   elem.style.width = "";
    // }
  }
}

onMount(() => {
  let frameTick = false;

  function rotateAllSpaceArea() {
    rotateSpaceArea(spaceAreaBL);
    rotateSpaceArea(spaceAreaTR);
  }

  function processScroll() {
    if(!frameTick) {
      window.requestAnimationFrame(() => {
        scroll(mainElement, spaceAreaBL, spaceAreaTR);
        frameTick = false;
      });

      frameTick = true;
    }
  }

  rotateAllSpaceArea();
  processScroll();
  window.addEventListener("resize", rotateAllSpaceArea);
  window.addEventListener("resize", processScroll);
  window.addEventListener("orientationchange", rotateAllSpaceArea);
  window.addEventListener("orientationchange", processScroll);
  document.body.addEventListener("scroll", processScroll);

  [[".bottom-left", "-100%"], [".top-right", "100%"]].forEach((v) => {
    anime({
      targets: `.space-area${v[0]}`,
      translateX: [v[1], 0],
      easing: "easeOutQuint",
      duration: 1500,
      update: processScroll,
    });
  });
});
</script>

<style>
main {
  line-height: 1.33 !important;
}

main > * {
  transform-origin: left center;
}

:global(.desc-block) {
  @apply relative inline-block px-2;
  transition: padding-bottom 150ms, font-size 150ms;
}

:global(.desc-block::before) {
  @apply -z-10 bg-slate-300 absolute left-0 right-0 bottom-0 w-full h-1/2;

  content: "";
  display: block;
}

.space-area {
  @apply fixed w-1/5 h-screen -z-10;
  height: 40vw;
  max-width: 300px;
  max-height: 600px;
}

.space-area > div {
  @apply w-full scale-y-150 rotate-0 bg-zinc-800 text-zinc-800;
  --tw-rotate: -30deg;
  height: 40vw;
  max-width: 300px;
  max-height: 600px;
}

.space-area.bottom-left {
  @apply bottom-0 left-0;
}

.space-area.bottom-left > div {
  @apply origin-bottom-right;
  box-shadow: inset -0.5em 0.5em 1em rgba(0, 0, 0, 0.5);
}

.space-area.top-right {
  @apply top-0 right-0;
}

.space-area.top-right > div {
  @apply origin-top-left;
  box-shadow: inset 0.5em -0.5em 1em rgba(0, 0, 0, 0.5);
}

@media (min-width: 1280px) {
  .space-area.top-right {
    width: 50%;
    height: 100vw;
    max-width: initial;
    max-height: initial;
  }

  .space-area.top-right > div {
    height: 100vw;
    max-width: initial;
    max-height: initial;
  }
}
</style>
