//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'hello 雪梅',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    src2: "http://pokemondic.oss-cn-beijing.aliyuncs.com/cover.jpg?Expires=1516374339&OSSAccessKeyId=TMP.AQFHrL8cJD5s8MjT3RHfLYqVztiXmBXI9s6w05lGxobWUVeUfmXw5lsLIA93ADAtAhUA530Zc7pejBEiTig7P2Yr9uG7FAQCFHbjP4KTilK92VQiTop1ooFbILqY&Signature=eMGyB7JP097dkN6N13yYkz0FlPA%3D",

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {

    return {

      title: '自定义分享标题',

      desc: '自定义分享描述',

      path: '/page/index'

    }

  }
})
