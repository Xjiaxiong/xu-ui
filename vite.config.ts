import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"

// import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss"

//rollupjs options
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({

    }),
    // 添加UnoCSS插件
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      //导出模块格式
      formats: ["es", "umd", "iife"]
    }
  }
})