// components/searchbar/searchbar.js
Component({
  properties: {
    isnavigator: {
      type: Boolean,
      value: false
    }
  },

  methods :{
    oninputEvent : function(event){
      // console.log(event);
      var value = event.detail.value;
      var detail = {"value":value};
      var options ={};
      this.triggerEvent("searchinputEvent",detail,options);
    }
  }

})