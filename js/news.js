$(document).ready(function(){

  //发送请求获取最新news数据
    var Param = GetRequest();
    function GetRequest(link,name) {
      var url = location.search; //获取url中"?"符后的字串
      if (link) url = link.substr(link.indexOf('?'));
       var theRequest = {};
       if (url.indexOf("?") != -1) {
          var str = url.substr(1);
          var strs = str.split("&");
          for(var i = 0; i < strs.length; i ++) {
             theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
          }
       }
       if (!name) return theRequest;
       return theRequest[name];
    }

    if (Param.id) {
        $.ajax({
          method: "GET",
          url: "http://120.77.80.111:80/company/news/"+Param.id,
          success: function(res) {
              //{"id":7,"title":"title2","createtime":1488556800000,"updatetime":1488556800000,"category":"category3","categoryid":3,"content":"content2"}
            var newsContent = '<div class="panel panel-info"><div class="panel-heading">'+res.title+'</div><div class="datetimeTitle">日期：'+new Date(parseInt(res.updatetime)).format("yyyy-MM-dd")+'</div><div class="panel-body">'+res.content+'</div></div>';
            $('#news').html(newsContent);
          }
        })      
    }
    else{
        $.ajax({
          method: "GET",
          url: "http://120.77.80.111:80/company/news/list",
        })
          .done(function( res ) {
            var newsContent = '';
            for (var i = 0;i<res.length;i++) {
              newsContent+='<li class="list-group-item" id="'+res[i].id+'"><div class="newsTitle glyphicon glyphicon-leaf">'+res[i].title+'</div><p class="datetime">'+new Date(parseInt(res[i].updatetime)).format("yyyy-MM-dd")+'</p></li>';
            }
            $('#news').html(newsContent);
          });
    }

  $('#news').on('click','li',function(e){
    var id = $(this).attr('id');
    $.ajax({
      method: "GET",
      url: "http://120.77.80.111:80/company/news/"+id,
      success: function(res) {
          //{"id":7,"title":"title2","createtime":1488556800000,"updatetime":1488556800000,"category":"category3","categoryid":3,"content":"content2"}
        var newsContent = '<div class="panel panel-info"><div class="panel-heading">'+res.title+'</div><div class="datetimeTitle">日期：'+new Date(parseInt(res.updatetime)).format("yyyy-MM-dd")+'</div><div class="panel-body">'+res.content+'</div></div>';
        $('#news').html(newsContent);
      }
    })
  });

})