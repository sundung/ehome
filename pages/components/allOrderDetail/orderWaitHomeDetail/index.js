// pages/components/allOrderDetail/orderWaitHomeDetail/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    
  },
  // 点击icon区域跳转服务保障页面
  goToServiceAssurance() {
    wx.navigateTo({
      url: '/pages/components/component/serviceAssurance/index',
    })
  },
  // 点击确定取消按钮跳转到取消订单页面
  goToCancelOrder(){
    wx.navigateTo({
      url: '/pages/components/cancelOrder/index',
    })
  },
    // 点击取消订单按钮弹出一个弹出框
    //打开透明层
    cancelOrderMask: function () {
      this.setData({
        isRuleTrue: true
      })
    },
    // 点击暂不取消按钮关闭弹出层
    closeMask(){
      this.setData({
        isRuleTrue: false
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
})
