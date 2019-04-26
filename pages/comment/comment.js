// pages/comment/comment.js
import { network } from "../../utils/network.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    total: 0,
    start: 1,
    count: 20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    var that = this;
    that.setData(options);
    that.getComments(1);
  },
  // 获取评论
  getComments: function (start) {
    var that = this;
    var type = that.data.type;
    var id = that.data.id;
    // 开启预加载动画
    if (start > that.data.start) {
      that.setData({
        nextLoading: true
      })
    } else {
      that.setData({
        preLoading: true
      })
    }
    // 网络请I求
    network.getItemComments({
      type: type,
      id: id,
      start: start,
      count: 20,
      success: function (data) {
        // 获得data数据
        // console.log(data);
        var total = data.total;
        var comments = data.interests;
        that.setData({
          total: total,
          comments: comments,
          start: start,
          // 把预加载关闭
          nextLoading: false,
          preLoading: false
        });

      }
    });
  },

  // 按钮方法
  onprePageTap: function (event) {
    var that = this;
    var oldstart = that.data.start;
    var count = that.data.count;
    if (oldstart - count > 0) {
      var start = oldstart - count;
      that.getComments(start);
    }

  },
  onNextPageTap: function (event) {
    var that = this;
    var oldstart = that.data.start;
    var start = oldstart + that.data.count;
    that.getComments(start);
  },

  onItemTapEvent: function (event) {
    wx.navigateBack({});
  }
});
