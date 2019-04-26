// pages/search/search.js
import {network} from "../../utils/network.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onsearchInputEvent: function(event) {
    var that = this;
    // console.log(event);
    var value = event.detail.value;
    network.getItemSearch({
      q:value,
      success:function(subjects){
        that.setData({
          subjects : subjects
        })
      }
    });
  },
  // 监听点击搜索后的跳转页面
  onitemTapEvent : function(event){
    // console.log(event);
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/detail/detail?type=movie&id="+id,
    });
  }
})