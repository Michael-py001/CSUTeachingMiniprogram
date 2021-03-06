// miniprogram/pages/scoreList/scoreList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    floorstatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.queryScoreList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  queryScoreList: function() {
    var that = this
    wx.request({
      url: 'https://xt98.tech:987/queryscorelist',
      data: {
        account: wx.getStorageSync("account"),
        password: wx.getStorageSync("password")
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      }, // 设置请求的 header
      success: function(res) {
        // success
        console.log('ssss', res)
        if (res.data.code == 900) {
          that.setData({
            scoreList: res.data.data,
          })
        }

      },
      fail: function() {
        console.log('fff')
        // fail
      },
      complete: function() {
        console.log('cccc')
        // complete
        that.setData({
          isLogining: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  // 获取滚动条当前位置
  onPageScroll: function (e) {
    console.log(e)
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  //回到顶部
  goTop: function (e) {  // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})