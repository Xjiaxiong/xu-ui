/**
 * 系统初始化时回调，可以注入三方脚本
 * @param {*} vue Vue实例
 * @param {*} type 有个参数值 desktop / mobile
 * @returns Promise / void
 */
 window.BaitedaInit = async function(vue, type) {
  return new Promise(function (resolve, reject) {
      const link = document.createElement('link');
      link.rel = "stylesheet";
      link.href = "https://ego-fe.oss-cn-beijing.aliyuncs.com/temp/style.css";
      document.body.appendChild(link);

      const vuecoms = document.createElement('script')
      vuecoms.src = 'https://ego-fe.oss-cn-beijing.aliyuncs.com/temp/vue-coms-vite.umd.js'
      vuecoms.crossorigin = 'true'
      vuecoms.onerror = function() {reject()}
      vuecoms.onload = function() {
          vue.use(window.mycomponents, {type: type})
          resolve(true)
      }
      document.body.appendChild(vuecoms)
  })
}

/**
* 用户身份认证时回调，仅在私有化环境中启用
* @param {*} user 用户对象
* @param {*} tenant 租户对象
*/
window.BaitedaLogin = function(user, tenant) {}

/**
* 页面全局路由变更时回调，仅在私有化环境中启用
* @param {*} to 目标页面
* @param {*} from 当前页面
*/
window.BaitedaRouterChanged = function(to, from) {}