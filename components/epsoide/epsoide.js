// components/epsoide/epsoide-cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    created: String

     
  },

  /**
   * 组件的初始数据, data 的值也会被页面绑定, 但data的值不可以从组件外部设置
   * 使用text组件会出现双文字的情况
   */
  data: {
      months:[
        '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月',
        '十二月'
      ],
      year:Number,
      month:String,
      _index:String
  },

  ready:function(){
    
    console.log(this.properties.created)
    let date = new Date(this.properties.created*1000 )
    let month = date.getMonth()
    let year = date.getFullYear()
    console.log(date.getDate())
    let day = date.getDate()
    this.setData({
      month: this.data.months[month],
      year: year,
      _index: day
    })
  },

   
 
 

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
