import {
  ItemModel
} from '../../models/item.js'

const app = getApp();
let itemModel = new ItemModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: null,
    comments: [],
    noComment: true,
    posting: false,
    like: false,
    count: 0,
    //article将用来存储towxml数据
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    })
    let cid = options.cid
    itemModel.getDetail(cid, (data) => {
      //将markdown内容转换为towxml数据
      let markdown = app.towxml.toJson(data.data.content, 'markdown');
      //设置文档显示主题，默认'light'
      markdown.theme = 'light';
      wx.hideLoading()
      this.setData({
        item: data.data,
        article: markdown
      })
    })

   /* commentModel.getComment(bid, (data) => {
      this.setData({
        noComment: data.comments == false ? true : false,
        comments: data.comments
      })
    })

    bookModel.getLikeStatus(bid, (data) => {
      this.setData({
        like: data.like_status,
        count: data.fav_nums
      })
    })*/
  },

  onFakePost: function() {
    this.setData({
      posting: true
    })
  },

  onPost: function(event) {
    let comment = event.detail.value || event.detail.text
    if (!comment) {
      return
    }
    if (comment.length>12){
      wx.showToast({
        title: '短评最多12个字',
        icon:'none'
      })
      return
    }
    commentModel.post(this.data.book.id, comment, (data) => {
      wx.showToast({
        title: '+ 1',
        icon:"none"
      })
      this.data.comments.unshift({
        content: comment,
        nums: 1
      })
      this.setData({
        comments: this.data.comments,
        noComment:false
      })
    })

    this.setData({
      posting: false
    })
  },

  onCancel: function(event) {
    this.setData({
      posting: false
    })
  },  

  onLike: function(event) {
    let like_or_cancel = event.detail.behavior
    likeModel.like(like_or_cancel, this.data.book.id, 400)
  },


  onShareAppMessage(){

  }
})