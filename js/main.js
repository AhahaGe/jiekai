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


  //发送请求获取最新banner数据
  $.ajax({
    method: "GET",
    url: "http://120.77.80.111/company/banner/list",
  })
    .done(function( res ) {
      var dongtai = '';
      var anli = '';
      for (var i = 0;i<res.length;i++) {
        dongtai+='<li><a target="blank" href="'+res[i].url+'">'+res[i].descrpiton+'</a></li>';
        anli+='<li><a>"'+res[i].url+'"></a></li>';
      }
      $('#dongtai').html(dongtai);
      $('#anli').html(anli);
    });
    
})