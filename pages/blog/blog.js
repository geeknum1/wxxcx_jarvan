import {
  ItemModel
} from '../../models/item.js'
import {
  random
} from '../../utils/util.js'
let itemModel = new ItemModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    dataArray: [],
    more: true,
    loading: false,
    nextPage: 1
  },

  onReachBottom: function (event) {
    if (this.data.more) {
      this.setData({
        loading: true,
      })
      itemModel.getItemList(this.data.nextPage,'blog', (data) => {
        this.setData({
          dataArray: this.data.dataArray.concat(data.data.list),
          more: data.data.hasNextPage,
          loading: false,
          nextPage: data.data.nextPage

        })
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var page = options.page
    wx.showLoading({
      title: '加载中',
    })
    itemModel.getItemList(this.data.nextPage, 'blog', (data) => {
      wx.hideLoading()
      this.setData({
        dataArray: this.data.dataArray.concat(data.data.list),
        more: data.data.hasNextPage,
        loading: false,
        nextPage: data.data.nextPage

      })
    })
  },

  method: {

  }




})