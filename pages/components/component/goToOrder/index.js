// pages/components/component/goToOrder/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToOrder() {
      // wx.switchTab 可以跳转到tabr页面
      wx.switchTab({
        url: '/pages/order/index',
      })
    },
  }
})
