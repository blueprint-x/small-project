//logs.js


Page({
  onShow: function (e) {
   // this.audioCtx = wx.createAudioContext('33'),
    //this.audioCtx.setSrc("http://music.xf1433.com/up/view.php/614a8921c7e4ba5a11ef8c661fca785d.mp3"),
   // this.audioCtx.play();

  //  this.numdown();
  },
  data: {
    logs: [],
    cum:0,
    sec:5,num:5,tag:1,aut:0,up:1
  },
  aaut:function(){
    this.setData({
      aut:!this.data.aut
    })
  },
  numdown:function(){
    var that=this;
    var sec = that.data.sec;
    var num = that.data.num;
    setTimeout(function(){
        that.setData({sec:sec-1,num:num-1}),that.endnum()},1000)
  },
  endnum:function(){
    var that=this,sec=that.data.sec,cum=that.data.cum,aut=this.data.aut,up=that.data.up;
    if(sec==0){
      that.setData({
        sec:" 倒计时结束",num:0,
      })
      if(cum!=0&&aut&&up)that.upload();
    }else{
      that.numdown();
    }
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../his/his'
      
    });
    this.audioCtx.pause()
  },
  onLoad: function () {
   
  },
  Clear : function(){
    this.setData({
      cum:0,num:5,sec:5,up:1
    })
    this.numdown();
  },
  fuck:function(){
    if(this.data.cum <= 90&&this.data.num){
       this.setData({
        cum:this.data.cum + 10
      })
    }else if(this.data.cum>90&&this.data.cum<=100){
      this.setData({
        cum : 100
      })
    }
  },
  bra:function(){
    if(this.data.cum <= 95&&this.data.num){
       this.setData({
        cum:this.data.cum + 5
      })
    }else if(this.data.cum>95&&this.data.cum<=100){
      this.setData({
        cum : 100
      })
    }
  },
  ass:function(){
    if(this.data.cum <= 98&&this.data.num){
       this.setData({
        cum:this.data.cum + 2
      })
    }else if(this.data.cum>98&&this.data.cum<=100){
      this.setData({
        cum : 100
      })
    }
  },
  upload:function(){
    var cum=this.data.cum;
    var num=this.data.num;
    var up=this.data.up;
    var db = wx.cloud.database();
    var a=this.data.cum;
    var tag=this.data.tag;
    var that = this;
    if(cum&&(num==0)&&up){
      db.collection("play").add({
        data:{
          a:a,
          tag:tag,
          up:up
        },
        success:function(res){
          console.log(res)
          that.setData({
            up:0
          })
        }
    })}
  }
  
})
