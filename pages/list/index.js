//index.js
//获取应用实例
const app = getApp();
const listData = require('../../data/list.js');

Page({
  data: {
     list:[]
  },

  onReady: function () {
    this.setData({ list: listData.listData});
  },
  clickMe:function(e){
    console.log(e)
  }
 
})
