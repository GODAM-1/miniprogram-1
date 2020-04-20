// pages/lianxi/lianxi.js


Page({

  /**
   * 页面的初始数据
   */

  data: {
    imgUrls: [
        'http://img.godreams.cn/images/2020/02/09/iDCu.th.jpg',
        'http://img.godreams.cn/images/2020/02/09/i45p.th.jpg',
        'http://img.godreams.cn/images/2020/02/09/ix1V.th.jpg'
      ],

      artical:[
        {
            name:"第一篇文章",
            content:"随便写点什么把，想要通过小程序首先练习实现一个简单的博客功能，目前仍然是个静态的网站",
            date:"2020.04.15"
        }
    ],

      interval: 5000,
      duration: 1000,
      indicatorDots: true,
      indicatorColor: "#ffffff",
      activecolor:"#2971f6",
      autoplay: true,
  },
  /**
   * 生命周期函数--监听页面加载
   */

  allArtical(){
    wx.navigateTo({
      url: '/pages/tapevent/tapevent'
  })
},

  wenzhang(){
    wx.navigateTo({
      url: '/pages/lianxi/lianxi'
  })
},

wo(){
  wx.navigateTo({
    url: '/pages/index/index'
})
},

zhaopian(){
  wx.navigateTo({
    url: '/pages/tapevent/tapevent'
})
},

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
    onShareAppMessage: function (res) {
      if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target)
      }
      return {
          title: '云开发技术训练营',
          path: "pages/home/home",
          imageUrl:"https://hackwork.oss-cn-shanghai.aliyuncs.com/lesson/weapp/4/weapp.jpg",
          success: function (res) {
              // 转发成功
          },
          fail: function (res) {
              // 转发失败
          }
      }
  },
})
