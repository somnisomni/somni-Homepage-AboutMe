export default async function loadWebFont(onActiveCallback?: () => void) {
  const webFontLoader = await import("webfontloader");

  webFontLoader.load({
    custom: {
      families: ["Pretendard Variable"],
      urls: ["https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"],
    },
    timeout: 10000,
    active() {
      if(onActiveCallback) {
        onActiveCallback();
      }
    },
  });
}
