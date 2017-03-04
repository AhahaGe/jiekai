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
        caseType+='<li>'+res[i].name+'</li>';
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
        caseList+='<li><button name="button">'+res[i].title+new Date(parseInt(res[i].updatetime)).format("yyyy-MM-dd-mm-ss")+'</button></li>';
      }
      $('#case').html(caseList);
    });

})