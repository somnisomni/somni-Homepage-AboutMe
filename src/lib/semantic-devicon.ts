const map: Record<string, string> = {
  "nodejs": "Node.js",
  "vuejs": "Vue.js",
  "sass": "SCSS (SASS)",
  "dot-net": ".NET",
  "csharp": "C#",
  "wpf": "Windows Presentation Foundation",
};

export default function getDeviconAltText(devicon: string) {
  return devicon.toLowerCase() in map ? map[devicon.toLowerCase()] : devicon;
}
