// pages/detail/detail.js
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
    // 获取id
    // console.log(options);
    // 请求数据
    var that = this;
    var type = options.type;
    var id = options.id;
    // 保存type id
    that.setData({
      type : type,
      id :id
    });

    network.getItemDetail({
      type :type ,
      id :id,
      success : function(item){
        // 把，转换成/
        var genres = item.genres;
        genres = genres.join("/");
        item.genres = genres;
        // 获取前3个主演
        var actors = item.actors;
        var actorNames = [];
        if(actors.length>3){
          actors = actors.slice(0,3);
          // actors = actors.join("/");
        }
        for(var i=0;i<actors.length;i++){
          var actor = actors[i];
          actorNames.push(actor.name);
        }
        actorNames = actorNames.join("/");

        var director = item.directors[0].name;
        var authors = director + "(导演)  /" +actorNames;
        item.authors = authors;
        // console.log(item);
        that.setData({
          item :item 
        })
      }
    });
    // 获取标签tags
    network.getItemTags({
      type : type,
      id : id,
      success :function(tags){
        that.setData({
          tags : tags
        });
      }
    });
    // 获取评论
    network.getItemComments({
      type:type,
      id : id,
      success:function(data){
        console.log(data);
        var totalcomment = data.total;
        var comments = data.interests;
        that.setData({
          totalcomment:totalcomment,
          comments:comments 
        })

      }
    })
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
    wx.pageScrollTo({
      scrollTop: ({
        scrollTop:0,
      }),
    })
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

  }
})