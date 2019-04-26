//index.js
//获取应用实例
// 导入
import {network} from "../../utils/network.js";
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /*生命周期函数--监听页面加载 */
  onLoad: function (options) {
    var that = this;
    //电影
    network.getMovieList({
      success : function(movies){
        that.setData({
          movies : movies 
        })
      }
    });
    //电视剧
    network.getTvList({
      success: function (tvs) {
        that.setData({
          tvs: tvs
        })
      }
    });
    //综艺
    network.getShowList({
      success: function (shows) {
        that.setData({
          shows: shows
        })
      }
    });
  },
  /* */
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
