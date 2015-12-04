$(document).ready(function(){	
  $("#circle1").css("border", "2px solid black");
  $('#quotedetails').show();
  $('#additionalinfo').hide();
  $('#noteto').hide();
  $('#circle1').click(function(){
    $("#circle1").css("border", "2px solid black");
    $("#circle2").css("border", "0px solid black");
    $("#circle3").css("border", "0px solid black");
    $('#quotedetails').show();
    $('#additionalinfo').hide();
    $('#noteto').hide();
  });
  $('#circle2').click(function(){
    $("#circle1").css("border", "0px solid black");
    $("#circle2").css("border", "2px solid black");
    $("#circle3").css("border", "0px solid black");
    $('#quotedetails').hide();
    $('#additionalinfo').show();
    $('#noteto').hide();
  });
  $('#circle3').click(function(){
    $("#circle1").css("border", "0px solid black");
    $("#circle2").css("border", "0px solid black");
    $("#circle3").css("border", "2px solid black");
    $('#quotedetails').hide();
    $('#additionalinfo').hide();
    $('#noteto').show();
  });
  $('#next1').click(function() {
	var y = $('#quotename');
	console.log(y);
	if(y === null ){
		alert('fill all boxes');
	}
	$("#circle1").css("border", "0px solid black");
	$("#circle2").css("border", "2px solid black");
	$("#circle3").css("border", "0px solid black");	
	$('#quotedetails').hide();
	$('#additionalinfo').show();
	$('#noteto').hide();
	
		//alert('hello');
	
  });
  $('#next2').click(function(){
	$("#circle1").css("border", "0px solid black");
	$("#circle2").css("border", "0px solid black");
	$("#circle3").css("border", "2px solid black");
	$('#quotedetails').hide();
	$('#additionalinfo').hide();
	$('#noteto').show();
  });
  $('#back2').click(function(){
	$("#circle1").css("border", "2px solid black");
	$("#circle2").css("border", "0px solid black");
	$("#circle3").css("border", "0px solid black");
	$('#quotedetails').show();
	$('#additionalinfo').hide();
	$('#noteto').hide();
  });
  $('#back3').click(function(){
	$("#circle1").css("border", "0px solid black");
	$("#circle2").css("border", "2px solid black");
	$("#circle3").css("border", "0px solid black");
	$('#quotedetails').hide();
	$('#additionalinfo').show();
	$('#noteto').hide();
  });

});
