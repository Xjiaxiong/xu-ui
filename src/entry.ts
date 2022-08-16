import { App } from "vue"

import MyButton from "./button"
import SFCButton from "./SFCButton.vue"
import JSXButton from "./TSXButton"


// 导出单独组件
export { MyButton, SFCButton, JSXButton };


export default {
  install (app: App): void {
    app.component(MyButton.name, MyButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  }
}