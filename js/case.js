$(document).ready(function(){

  //发送请求获取最新case数据
  //发送请求获取最新banner数据
  $.ajax({
    method: "GET",
    url: "http://120.77.80.111:80/company/caseCategory/list",
  })
    .done(function( res ) {
      var caseType = '';
      for (var i = 0;i<res.length;i++) {
        caseType+='<li class="list-group-item li-hover" id="'+res[i].id+'">'+res[i].name+'</li>';
      }
      $('#caseType').html(caseType);
    });

  $.ajax({
    method: "GET",
    url: "http://120.77.80.111:80/company/case/list",
  })
    .done(function( res ) {
      var caseList = '';
      for (var i = 0;i<res.length;i++) {
        caseList+='<li class="list-group-item right-li" id="'+res[i].id+'"><div class="caseTitle">'+res[i].title+'</div><p class="datetime">'+new Date(parseInt(res[i].updatetime)).format("yyyy-MM-dd-mm-ss")+'</p></li>';
      }
      $('#case').html(caseList);
    });

  $('#caseType').on('click','li',function(e){
    $.ajax({
      method: "GET",
      url: "http://120.77.80.111:80/company/case/categoryId/"+e.target.id,
      success: function(res) {
        var caseListOfCategory = '';
        for (var i = 0;i<res.length;i++) {
          //{"id":7,"title":"title2","createtime":1488556800000,"updatetime":1488556800000,"category":"category3","categoryid":3,"content":"content2"}
          caseListOfCategory+='<li class="list-group-item" id="'+res[i].id+'"><div class="caseTitle">'+res[i].title+'</div><p class="datetime">'+new Date(parseInt(res[i].updatetime)).format("yyyy-MM-dd-mm-ss")+'</p></li>';
        }
        $('#case').html(caseListOfCategory);
      }
    })
    $(this).addClass("active").siblings('li').removeClass('active');
  });

  $('#case').on('click','li',function(e){
    var id = $(this).attr('id');
    $.ajax({
      method: "GET",
      url: "http://120.77.80.111:80/company/case/"+id,
      success: function(res) {
          //{"id":7,"title":"title2","createtime":1488556800000,"updatetime":1488556800000,"category":"category3","categoryid":3,"content":"content2"}
        var caseContent = '<div class="panel panel-primary"><div class="panel-heading">'+res.title+'</div><div class="panel-body">'+res.content+'</div></div>';
        $('#case').html(caseContent);
      }
    })
  });

})