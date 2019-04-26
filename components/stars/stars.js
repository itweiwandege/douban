Component({
  /* 组件的属性列表
  
   */
  properties: {
    rate: {
      type: Number,
      value: 0
    },
    // 星星大小
    starsize : {
      type : Number,
      value : 20  
    },
    fontsize : {
      type : Number,
      value : 20 
    },
    fontcolor : {
      type : String,
      value : "#ccc"
    },
    istext : {
      type : Boolean,
      value : true
    }
  },

  lifetimes: {
    attached: function() {
      var that = this;
      // console.log(that.properties.rate);
      // 拿到评分
      var rate = that.properties.rate;
      //转换成int型
      var intRate = parseInt(rate);
      //计算高亮的需要多少个
      var light = parseInt(intRate/2);
      //计算半高亮的需要多少个 
      var half = intRate%2;
      //计算灰色的需要多少个
      var gray = 5-light-half;

      var lights = [ ];
      var halfs = [ ]; 
      var grays = [ ] ;
      for (var index=1;index<=light;index++){
          lights.push(index);
      }
      for (var index = 1; index <= half; index++) {
        halfs.push(index);
      }
      for (var index = 1; index <= gray; index++) {
        grays.push(index);
      }
      var ratetext = rate && rate >0 ? rate.toFixed(1) : "未评分"

      //得到3个数组
      that.setData({
        lights : lights,
        halfs : halfs,
        grays : grays,
        ratetext: ratetext
      })
      // console.log(light);
      // console.log(half);
      // console.log(gray);
    }
  }
})