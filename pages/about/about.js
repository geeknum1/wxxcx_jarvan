Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: true,
    userInfo: null,
    classics: [],
    myBooksCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    this.hasGottenUserInfo()
   
  },

  // onShow:function(options){

  // },

 

  hasGottenUserInfo: function () {
    wx.getSetting({
      success: (data) => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (data) => {
              this.setData({
                hasUserInfo: true,
                userInfo: data.userInfo
              })
            }
          })
        } else {
          this.setData({
            hasUserInfo: false
          })
        }
      }
    })
  },

  onGetUserInfo: function (event) {
    let userInfo = event.detail.userInfo
    if (userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      })
    }
  },

 
  onPreviewTap: function (event) {
    wx.navigateTo({
      url: '/pages/classic-detail/index?cid=' + event.detail.cid + '&type=' + event.detail.type
    })
  },


  onShareAppMessage() {

  }
})