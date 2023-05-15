<div>
  <div class="space-area bottom-left"><div /></div>
  <div class="space-area top-right"><div /></div>

  <main class="z-10 font-extralight text-2xl md:text-4xl p-6 md:p-8 xl:p-16 transition-all">
    <h1 class="text-6xl font-bold">somni</h1>
    <hr class="!w-32 my-6 border-b-2 border-current"/>

    <Hello />
    <br />
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
  </main>
</div>

<script lang="ts">
import anime from "animejs";
import { onMount } from "svelte";
import Hello from "./components/Hello.svelte";

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

  for(const elem of (main.querySelectorAll("& > *") as NodeListOf<HTMLElement>)) {
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
  const MAIN_ELEMENT = document.getElementsByTagName("main")[0];
  const SPACE_AREAS = document.querySelectorAll(".space-area") as NodeListOf<HTMLElement>;
  const SPACE_AREA_BL = document.querySelector(".space-area.bottom-left") as HTMLElement;
  const SPACE_AREA_TR = document.querySelector(".space-area.top-right") as HTMLElement;
  let frameTick = false;

  function rotateAllSpaceArea() {
    for(const elem of SPACE_AREAS) {
      rotateSpaceArea(elem);
    }
  }

  function processScroll() {
    if(!frameTick) {
      window.requestAnimationFrame(() => {
        scroll(MAIN_ELEMENT, SPACE_AREA_BL, SPACE_AREA_TR);
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
main > * {
  transform-origin: left center;
}

.space-area {
  @apply fixed w-1/5 h-screen -z-10;
  height: 40vw;
  max-width: 300px;
  max-height: 600px;
}

.space-area > div {
  @apply w-full scale-y-150 rotate-0 bg-zinc-800;
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
}

.space-area.top-right {
  @apply top-0 right-0;
}

.space-area.top-right > div {
  @apply origin-top-left;
}

@media (min-width: 1280px) {
  .space-area.top-right {
    width: 40%;
    height: 80vw;
    max-width: initial;
    max-height: initial;
  }

  .space-area.top-right > div {
    height: 80vw;
    max-width: initial;
    max-height: initial;
  }
}
</style>
