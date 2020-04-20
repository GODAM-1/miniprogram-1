// pages/Date/Date.js
let initData = '只有一行原始数据'
let extraLine = [];
bgcolor:"#000000",



Page({

  /**
   * 页面的初始数据
   */
  data:{
    tabs: ["北京", "上海", "广州", "深圳"],
activeIndex:0,
    bgcolor:"#000000",
    muted: true
  },
  
  tabClick: function (e) {
    console.log(e)
    this.setData({
      activeIndex: e.currentTarget.id
    });
  },

  addLine: function (e) {
    extraLine.push('新增的内容')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  removeLine: function (e) {
    if (extraLine.length > 0) {
        extraLine.pop()
        this.setData({
          text: initData + '\n' + extraLine.join('\n')
        })
    }
  },

  changeMuted: function (e) {
    this.setData({
      muted: !this.data.muted
    })
  },

redTap(){
  this.setData({
      bgcolor: "#cd584a"
  })
},
yellowTap(){
  this.setData({
      bgcolor: "#f8ce5f"
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