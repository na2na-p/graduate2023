// vuetifyをvuepressでのグローバルプラグインとして登録する
// .vuepress/enhanceApp.js
import Vuetify from '../../../node_modules/vuetify'
import '../../../node_modules/vuetify/dist/vuetify.min.css'
import '../../../node_modules/@mdi/font/css/materialdesignicons.css'

export default ({
  Vue,      // VuePressアプリで使用されているVueのバージョン
  options,  // ルート Vue インスタンスのオプション
  router,   // アプリのrouterインスタンス
  siteData,  // site metadata
}) => {
  Vue.use(Vuetify)
}
