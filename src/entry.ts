import { App } from "vue"

import SButton from "./button"
import SFCButton from "./SFCButton.vue"
import JSXButton from "./TSXButton"


// 导出单独组件
export { SButton, SFCButton, JSXButton };


export default {
  install (app: App): void {
    app.component(SButton.name, SButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  }
}