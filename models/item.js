import { HTTP } from '../utils/http.js'
class ItemModel extends HTTP {
  constructor() {
    super()
  }

  getItemList(page,type,success) {
    var params = {
      url: type+'/page/'+page,
      success: success
    }
    this.request(params)
  }

  getDetail(cid, success) {
    let params = {
      url: 'blog/article/' + cid,
      success: success
    }
    this.request(params)
  }

  getLikeStatus(bid, success) {
    let params = {
      url: '/book/' + bid + '/favor',
      success: success
    }
    this.request(params)
  }

  getMyBookCount(success) {
    let params = {
      url: '/book/favor/count',
      success: success
    }
    this.request(params)
  }
}

export { ItemModel }