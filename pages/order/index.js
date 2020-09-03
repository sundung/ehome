// pages/order/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: '待服务',
        isActive: true,
      },
      {
        id: 1,
        name: '服务中',
        isActive: false,
      },
      {
        id: 2,
        name: '已结束',
        isActive: false,
      },
      {
        id: 3,
        name: '全部',
        isActive: false,
      },
    ],
  },
  // 自定义事件
  handleItemChange(e) {
    // 接受组件传递过来的数据
    const { index } = e.detail
    let tabs = JSON.parse(JSON.stringify(this.data.tabs))
    tabs.forEach((v, i) => {
      i === index ? (v.isActive = true) : (v.isActive = false)
      this.setData({
        tabs,
      })
    })
  },
  // 点击订单列表的待接单跳转到订单详情页面
  goToOrderDetail() {
    console.log('123')
    wx.navigateTo({
      url: '/pages/components/allOrderDetail/orderDetail/index',
    })
  },
  // 点击服务中跳转到维修清单页面
  goToMaintainList() {
    wx.navigateTo({
      url:
        '/pages/components/component/orderDetailComponents/maintainList/index',
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
