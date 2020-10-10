// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:'立即登录',
    avatarUrl:''
  },
  // 跳转到新增地址
  goToNewAddress() {
    wx.navigateTo({
      url: '/pages/components/selectAddress/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 进入我的页面 获取用户信息,没有则使用默认的
    const UserInfo = wx.getStorageSync('userInfo')
    this.setData({
      nickName:UserInfo.nickName,
      avatarUrl:UserInfo.avatarUrl
    })
    
  },
  
  // 获取用户不敏感信息
  bindGetUserInfo (e) {
    // 将用户信息存储到缓存中
    wx.setStorageSync('userInfo', e.detail.userInfo)
    // 从新加载页面
    this.onLoad()
  },
  // 退出小程序账号信息
  loginOut() {
    // 清楚本地缓存
    wx.clearStorageSync('userInfo')
    // 从新给头像,昵称赋值
    this.setData({
      nickName:'立即登录',
      avatarUrl:'/assets/imgs/mine/morentouxiang.png'
    })
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