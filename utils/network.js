// 链接抽取重构
import { globalUrls } from "url.js"
const network = {

  //电影
  getMovieList: function (params) {
    params.type = "movie";
    this.getItemList(params);
  },

  //电视剧
  getTvList: function (params) {
    params.type = "tv";
    this.getItemList(params);
  },

  // 综艺
  getShowList: function (params) {
    params.type = "show";
    this.getItemList(params);
  },

  //重构
  // 获取列表
  getItemList: function (params) {
    var url = "";
    if (params.type == 'movie') {
      url = globalUrls.movieList;
    } else if (params.type == 'tv') {
      url = globalUrls.tvList;
    } else {
      url = globalUrls.showList;
    }
    var count = params.count ? params.count : 7;
    wx.request({
      url: url,
      data: {
        count: count
      },
      success: function (res) {
        var items = res.data.subject_collection_items;
        // 生成一个空数据
        var itemsCount = items.length;
        var left = itemsCount % 3;
        if (left === 2) {
          items.push(null);
        }
        // 
        if (params && params.success) {
          params.success(items);
        }
      }
    });
  },
  // 获取详情
  getItemDetail: function (params) {
    var type = params.type;
    var id = params.id;
    var url = "";
    if (type === 'movie') {
      url = globalUrls.movieDetail + id;
    } else if (type === 'tv') {
      url = globalUrls.tvDetail + id;
    } else {
      url = globalUrls.showDetail + id;
    }
    wx: wx.request({
      url: url,
      success: function (res) {
        // console.log(res);
        // 拿到detail
        var item = res.data;
        if (params.success) {
          params.success(item);
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 获取标签 标签页处理方法
  getItemTags: function (params) {
    var type = params.type;
    var id = params.id;
    var url = "";
    if (type === 'movie') {
      url = globalUrls.movieTags(id);
    } else if (type === 'tv') {
      url = globalUrls.tvTags(id);
    } else {
      url = globalUrls.showTags(id);
    }
    //有了请求链接之后发送请求
    wx.request({
      url: url,
      success: function (res) {
        // console.log(res);
        // 获取tags
        var tags = res.data.tags;
        if (params.success) {
          params.success(tags);
        }
      }
    })
  },
  // 获取评论
  getItemComments: function (params) {
    var type = params.type;
    var id = params.id;
    // 判断是否传start值
    var start = params.start ? params.start : 0;
    var count = params.count ? params.count : 3;
    var url = "";
    if (type === 'movie') {
      url = globalUrls.movieComments(id, start, count);
    } else if (type === 'tv') {
      url = globalUrls.tvComments(id, start, count);
    } else {
      url = globalUrls.showComments(id, start, count);
    }
    wx: wx.request({
      url: url,
      success: function (res) {
        // console.log(res);
        var data = res.data;
        if (params.success) {
          params.success(data);
        }
      },
    })
  },
  // 搜索电影URL
  getItemSearch: function(params) {
    var q = params.q;
    var url = globalUrls.searchUrl(q);
    wx.request({
      url: url,
      success: function (res) {
        console.log(res);
        var subjects = res.data.subjects;
        if(params.success){
          params.success(subjects);
        }
      }
    })
  }
}
// 导出
export {
  network
}