<code class="code-snippet text-xl md:text-3xl whitespace-pre-wrap { codeColor }">writeCode(lines, With.<code bind:this={ codeWithInputElement } bind:textContent={ codeWithInput } contenteditable="true" autocapitalize="true" class="outline-none border-b-transparent focus:border-b-2 focus:border-b-current">{ codeWithInput }</code>);</code> <span>{ codeEmoji }</span>

<script lang="ts">
import { onMount } from "svelte";

const codeMap: Record<string, string[]> = {
  "DREAM": ["text-sky-500", "☺️"],
  "DREAMS": ["text-sky-600", "☺️💭"],
  "HOPE": ["text-rose-400", "☺️"],
  "HOPES": ["text-rose-500", "☺️🙏"],
  "FUN": ["text-lime-500", "😂"],
  "FUNNY": ["text-lime-600", "🤣"],
  "YOU": ["text-red-500", "❤️‍🔥"],
  "OUT": ["text-slate-400", "❔"],
};

let codeWithInputElement: HTMLElement;
let codeWithInput = "";

$: codeColor = codeWithInput.toUpperCase() in codeMap ? codeMap[codeWithInput.toUpperCase()][0] : "";
$: codeEmoji = codeWithInput.toUpperCase() in codeMap ? codeMap[codeWithInput.toUpperCase()][1] : "";

$: if(codeWithInputElement) {
  codeWithInputElement.addEventListener("paste", (event) => {
    event.preventDefault();
  });
  codeWithInputElement.addEventListener("keydown", (event) => {
    if(event.key === " " || event.key === "Enter") {
      event.preventDefault();
    }

    if(codeWithInput.length >= 6 && (event.key !== "Backspace" && event.key !== "Delete" && !event.key.startsWith("Arrow"))) {
      event.preventDefault();
    }
  });
  codeWithInputElement.addEventListener("focusout", () => {
    if(!codeWithInput) codeWithInput = "DREAMS";
  });
}

onMount(() => {
  setTimeout(() => {
    for(const c of "DREAMS") {
      setTimeout(() => {
        codeWithInput += c;
      }, 200 * "DREAMS".indexOf(c));
    }
  }, 500);
});
</script>

<style>
.code-snippet {
  transition: font-size 150ms, color 150ms;
}

.code-snippet code[contenteditable] {
  transition: border-bottom-color 150ms;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
}

.code-snippet code[contenteditable]::selection {
  background-color: rgba(128, 128, 128, 0.15);
}
</style>
