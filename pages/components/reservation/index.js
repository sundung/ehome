// pages/components/reservation/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 控制弹出层
    showModal: false,
    // 报修项目
    msg:"空调维修",
    // 控制服务项点击时高亮
    num1:1,
    // icon图标
    typeList: ['success'],
    // 控制input框默认值
    num:1,
    // input的控制状态 disable 禁止输入
    minusStatus:'disable',
   // 控制空调机型弹出框的
    showAirModalDlg:false,
  //  控制空调机型的高亮
    num2:1,
    //点击空调机型,页面上渲染的值
    AirModalDlgValue:'定频挂机',
    // 控制空调功率弹出框的
    showAirPowerModalDlg:false,
    // 点击空调功率渲染到页面的初始值
    AirPowerModalDlgValue:'1P',
    //控制选择空调功率高亮的
    num3:1,
    // 页面总高度将会放在这里
    windowHeight: 0,
    // navbar的高度
    navbarHeight: 0,
    // header的高度
    headerHeight: 0,
    // scroll-view的高度
    scrollViewHeight: 0
  },
  // 外面的弹窗 报修项目的
  alertChange: function () {
    this.setData({
      showModal: true
    })
  },

  // 禁止屏幕滚动
  preventTouchMove: function () {
  },
  // 点击差号关闭弹出层
  closeModalDlg() {
    this.setData({
      showModal: false,
      showAirModalDlg:false,
      showAirPowerModalDlg:false
    })
  },
  // 点击服务项目获取其值付给报修项目
  getValue(e) {
    this.setData({
      msg:e.currentTarget.dataset.value,
      num1:e.currentTarget.dataset.num1
    })
  },
  // 点击空调机型获取其值,显示页面上
  getAirModalDlgValue(e){
    this.setData({
      AirModalDlgValue:e.currentTarget.dataset.value,
      num2:e.currentTarget.dataset.num2
    })
  },
  // 点击空调功率获取其值,显示页面上
  getAirPowerModalDlgValue(e){
    this.setData({
      AirPowerModalDlgValue:e.currentTarget.dataset.value,
      num3:e.currentTarget.dataset.num3
    })
  },
   // 弹出空调机型的弹出框
   airModalDlg() {
    this.setData({
      showAirModalDlg:true
    })
  },
  // 弹出空调功率的弹出框
  airPowerModalDlg() {
    this.setData({
      showAirPowerModalDlg:true
    })
  },
  //事件处理函数
  /*点击减号*/
  bindMinus: function() {
    var num = this.data.num;
    if (num>1) {
      num--;
    }
    var minusStatus = num>1 ? 'normal':'disable';
    this.setData({
      num:num,
      minusStatus:minusStatus
    })
  },
  /*点击加号*/
  bindPlus: function() {
    var num = this.data.num;
    num++;
    var minusStatus = num > 1 ? 'normal' : 'disable';
    this.setData({
      num:num,
      minusStatus: minusStatus
    })
  },
  /*输入框事件*/
  bindManual: function(e) {
    var num = e.detail.value;
    var minusStatus = num > 1 ? 'normal' : 'disable';
    // 页面实时渲染
    this.setData({
      num:num,
      minusStatus: minusStatus
    })
  },
  // 点击立即预约按钮弹出订单已提交的弹出框
    //打开透明层
    alertOrder: function () {
      this.setData({
        isRuleTrue: true
      })
    },
    // 点击知道了跳转到订单页面
    goToOrder() {
      // wx.switchTab 可以跳转到tabr页面
      wx.switchTab({
        url: '/pages/order/index',
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
        // 先取出页面高度 windowHeight
        wx.getSystemInfo({
          success: function(res) {
              that.setData({
                  windowHeight: res.windowHeight
              });
          }
      });

      // 然后取出navbar和header的高度
      // 根据文档，先创建一个SelectorQuery对象实例
      let query = wx.createSelectorQuery().in(this);
      // 然后逐个取出上边木块的高度和底部按钮的高度的节点信息
      // 选择器的语法与jQuery语法相同
      query.select('.air-conditioner').boundingClientRect();
      query.select('.button').boundingClientRect();

      // 执行上面所指定的请求，结果会按照顺序存放于一个数组中，在callback的第一个参数中返回
      query.exec((res) => {
          // 分别取出navbar和header的高度
          let navbarHeight = res[0].height;
          let headerHeight = res[1].height;
          // 然后就是做个减法
          let scrollViewHeight = this.data.windowHeight - navbarHeight - headerHeight;

          // 算出来之后存到data对象里面
          this.setData({
              scrollViewHeight: scrollViewHeight
          });
      });
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