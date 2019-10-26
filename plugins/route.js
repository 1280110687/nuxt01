// 导航守卫
export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    console.log('跳跳虎')
    next()
  })
}
