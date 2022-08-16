import { h, defineComponent } from "vue"

export default defineComponent({
  name: "MyButton",
  render () {
    return h('button', null, "my-button")
  }
})