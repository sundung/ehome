
// 使用 promise 封装 request请求
export const  request = (params)=>{
  // 定义公共的 url
  const baseUrl = 'http://v2xtest.gz2vip.idcfengye.com/api'
  return new Promise((resolve,reject)=>{
    // 发送网络请求
    wx.request({
      // 将参数结构出来
     ...params,
     // 进行请求路径拼接
     url:baseUrl+params.url,
     // 成功回调
     success:(result)=>{
      resolve(result)
     },
     // 失败回调
     fail:(err)=> {
       reject(err)
     }
    })
  })
}