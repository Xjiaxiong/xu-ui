import { defineComponent, h } from "vue";
import "uno.css";

export default defineComponent({

  name: "JSXButton",
  render () {
    return <button class={`py-2 
    px-4 
    font-semibold 
    rounded-lg 
    shadow-md 
    text-white 
    bg-green-500 
    hover:bg-green-700 
    border-none 
    cursor-pointer`}>JSX Button</button>;
  },

});