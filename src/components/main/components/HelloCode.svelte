<code class="code-snippet text-xl md:text-3xl whitespace-pre { codeColor }">writeCode(lines, With.<code bind:textContent={ codeWithInput } contenteditable="true" autocapitalize="true" class="outline-none border-b-transparent focus:border-b-2 focus:border-b-current">{ codeWithInput }</code>);</code> <span>{ codeEmoji }</span>

<script lang="ts">
const codeMap: Record<string, string[]> = {
  "DREAM": ["text-sky-500", "☺️"],
  "DREAMS": ["text-sky-600", "☺️💭"],
  "HOPE": ["text-rose-400", "☺️"],
  "HOPES": ["text-rose-500", "☺️🙏"],
  "FUN": ["text-lime-500", "😂"],
  "FUNNY": ["text-lime-600", "🤣"],
};

let codeWithInput = "DREAMS";
$: codeColor = codeWithInput.toUpperCase() in codeMap ? codeMap[codeWithInput.toUpperCase()][0] : "";
$: codeEmoji = codeWithInput.toUpperCase() in codeMap ? codeMap[codeWithInput.toUpperCase()][1] : "";
</script>

<style>
.code-snippet {
  transition: font-size 150ms, color 150ms;
}

.code-snippet code[contenteditable] {
  transition: border-bottom-color 150ms;
  text-transform: uppercase;
}
</style>
