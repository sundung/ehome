// pages/components/allOrderDetail/orderInServiceDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
   // 点击icon区域跳转服务保障页面
   goToServiceAssurance (){
    wx.navigateTo({
      url: '/pages/components/component/serviceAssurance/index',
    })
  },
  // 点击结束服务按钮跳转到   -->结束服务   页面
  goToFinishedService() {
    wx.navigateTo({
      url: '/pages/components/finishedService/index',
    })
  },
  // 点击获取维修清单 跳转到 维修清单页面
  goToMaintainList() {
    wx.navigateTo({
      url: '/pages/components/component/orderDetailComponents/maintainList/index',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})