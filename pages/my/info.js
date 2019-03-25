//info.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scene:{},
    domInfo:{}

  },

  onLoad: function () {
    this.setData({ scene: JSON.stringify(wx.getLaunchOptionsSync()) });
  },
  onReady:function(){
    const query = wx.createSelectorQuery();
    query.select('#showInfo').boundingClientRect();
    query.exec((res) =>{
      this.setData({ domInfo: JSON.stringify(res[0])});
    })
  },
  goTab:function(){
    wx.switchTab({
      url: './index',
    });
  },
  goToList:function(e){
    console.log(e.target);
    console.log(e.currentTarget);
    wx.navigateTo({
      url: '../list/index',
    })
  },
  goDetail:function(e){
    console.log(e.target);
    console.log(e.currentTarget);
  },
  onUnload:function(){
    console.log('我被卸载哒');
  }

})