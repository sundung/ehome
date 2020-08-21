// pages/components/component/addressPicker/index.js
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
    region: [], // 初始值
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // picker值发生改变都会触发该方法
    bindRegionChange: function (e) {  
      this.setData({
        region: e.detail.value
      })
    }
  }
})
