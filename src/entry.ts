import { App } from "vue";

import SButton from "./button";

// 导出单独组件
export { SButton };

export default {
  install(app: App): void {
    app.component(SButton.name, SButton);
  },
};
