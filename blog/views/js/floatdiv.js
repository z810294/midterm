 var adWidth = 200;//a?¢Ga¡¥?a¡Â?ao|
  var nowX = 0;//c?Ra??a??c?R(left)
  var nowY = 10;//c?Ra??a??c?R(top)

  var posY=10;
  function fadIni()
  {
      innerWidth = document.body.clientWidth;
      innerHeight = document.body.clientHeight;
  
      edge = (innerWidth-1000)/2;
  
      if( edge > adWidth )
      {
          posX = edge + 1000;
      }
      else
      {
          posX = innerWidth-adWidth;
      }
  
      posY = 10;
  
  }
  function fadRefresh()
  {
       
	  //var offsetX = posX + document.body.scrollLeft - nowX;
      var offsetY = posY + $(window).scrollTop() - nowY;
      //nowX += offsetX / 5;
      nowY += offsetY / 5;
      //fad_style.left = nowX;
      //fad_style.top = nowY;
	  //$('#iRFloating').css('top', nowY);
	  //$('#').css('top', nowY);
	  //alert(nowY);
	  $('#iRFloating').css('top', nowY);
      floatID = setTimeout('fadRefresh()', 20 );//Refresha??e¡V¡§
  }
  function fadStart()
  {
	 
      fadIni();
      window.onresize=fadIni;
      fadRefresh();
  }
  function iRFloating_hide(){
	var width=parseInt($("#iRFloating").css("width"));
	$("#iRFloating").css("left","-"+(width-10)+"px");
}
var _iRFloatingtimer;
var _enable_float_hide=true;
  function iRFloating_show(){
	$("#iRFloating").css("left","0px");
	if(_enable_float_hide){
		clearInterval (_iRFloatingtimer);
		_iRFloatingtimer=setTimeout("iRFloating_hide()", 10000 );
	}
}
_iRFloatingtimer=setTimeout("iRFloating_hide()", 10000 );
  fadStart();