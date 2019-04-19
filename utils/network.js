// 链接抽取重构
import {globalUrls} from "url.js"
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
        if (params && params.success) {
          params.success(items);
        }
      }
    });
  }
}
// 导出
export {
  network
}