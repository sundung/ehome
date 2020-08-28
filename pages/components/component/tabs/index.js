// pages/components/component/tabs/index.js
Component({
  /**
   * 组件的属性列表
   * 存放的数据时从父组件中接受的数据
   */
  properties: {
  /*   // 要接受的数据名称
    aaa:{
      // type 要接受的数据类型
      type:String,
      // value 要接受的默认值
      value:''
    } */
    tabs:{
      type:Array,
      value:[]
    }
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
    handleItemTap(e) {
      /* 
        1.绑定点击事件,需要在methods中绑定
        2.获取被点击的索引
        3.获取原数组
        4.对数组循环
          1 给每一个循环 选中属性 改为false
          2 给当前 索引的项添加激活效果
        5.子组件传递数据给父组件是通过自定义事件
      */
     // 2 获取索引
     const {index} = e.currentTarget.dataset
     // 触发父组件自定义事件
     this.triggerEvent('itemChange',{index})
    }
  }
})
