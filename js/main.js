$(document).ready(function(){
	
	//发送请求获取最新banner数据
	$.ajax({
	  method: "GET",
	  url: "http://120.77.80.111/company/banner/list",
	})
  	.done(function( res ) {
  		var con = '';
  		var indicators = '';
  		for (var i = 0;i<res.length;i++) {
  			if(i==0){
  				con+='<div class="item active"><img src="'+res[i].url+'" alt="'+res[i].descrpiton+'">'+
              	 '<div class="carousel-caption">'+res[i].descrpiton+'</div></div>';

              	indicators+='<li data-target="#carousel-example-generic" data-slide-to="'+i+'" class="active"></li>';
  			}else {
  				con+='<div class="item"><img src="'+res[i].url+'" alt="'+res[i].descrpiton+'">'+
              	 '<div class="carousel-caption">'+res[i].descrpiton+'</div></div>';

              	indicators+='<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>';
  			}
  		
  		}
  		$('.carousel-inner').html(con);
  		$('.carousel-indicators').html(indicators);
  		$('.carousel').carousel({
		  interval: 2000
		})
  	});


  //发送请求获取最新新闻数据
  $.ajax({
    method: "GET",
    url: "http://120.77.80.111/company/banner/list",
  })
    .done(function( res ) {
      var dongtai = '';
      for (var i = 0;i<res.length;i++) {
        dongtai+='<li><a target="blank" href="'+res[i].url+'">'+res[i].descrpiton+'</a></li>';
      }
      $('#dongtai').html(dongtai);
    });


  //发送请求获取最新案例数据
  $.ajax({
    method: "GET",
    url: "http://120.77.80.111:80/company/case/list",
  })
    .done(function( res ) {
      var anli = '';
      for (var i = 0;i<res.length;i++) {
        anli+='<li id="'+res[i].id+'"><div class="anliTitle">'+res[i].title+'</div><p class="datetime">'+new Date(parseInt(res[i].updatetime)).format("yyyy-MM-dd-mm-ss")+'</p></li>';
      }
      $('#anli').html(anli);
    });

  //注册监听
  $('#anli').on('click','li',function(e){
    var id = $(this).attr('id');
    // $.ajax({
    //   method: "GET",
    //   url: "http://120.77.80.111:80/company/case/"+id,
    //   success: function(res) {
    //     var caseContent = '<div class="panel panel-primary"><div class="panel-heading">'+res.title+'</div><div>日期：'+new Date(parseInt(res.updatetime)).format("yyyy-MM-dd-mm-ss")+'</div><div class="panel-body">'+res.content+'</div></div>';
    //     $('#case').html(caseContent);
    //     window.location.href = './pages/case.html';
    //   }
    // })
    window.location.href = './pages/case.html?id='+id;
  });
    
})