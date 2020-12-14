Page({
  onLoad:function(){
    this.read()
    this.audioCtx = wx.createAudioContext('44'),
   // this.audioCtx.setSrc("http://music.xf1433.com/up/view.php/9377dc5288a358650819580ec040b31f.mp3"),
    this.audioCtx.play();
  },
  data:{
    result:[],
    dd:"暂无历史记录"
  },
  Remove:function(){
    var that=this;
    wx.cloud.callFunction({
      name:"remove",
      success:function(res){
        console.log(res);
        that.setData({
          result:[],
          dd:"暂无历史记录"
        })
      }
    })
  },
  read:function(){
    var that = this;var ress=[];
    wx.cloud.callFunction({
      name:"read",
      success:function(res){
      //  console.log(res);
            var resul = res.result.data;
            for(var i = 0; i < resul.length; i+=1){
               ress[i]=resul[i].a
           }
           ress.sort(function(a,b){return b-a});
          that.setData({
             result:ress,
          })
      },
      
    })
  }
})