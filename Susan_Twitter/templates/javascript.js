$(document).ready(function() {
   $("#submit_tweet").prop('disabled',true); //disable the tweet submit button when page loads
   new_tweet = submit_tweet();
   check_keystroke(); 
   $("#small_box").click(click_tweet_box);
   $("#big_box").blur(leave_tweet_box); 
});


function submit_tweet(){ 
$("#submit_tweet").click(function () {
	var new_tweet = $("#big_box").val();
	$("#big_box").val(""); //clears the text_box
	display_tweet(new_tweet); 
	$(".Word_Count").text("Count:140") //reset count to 140
	$("#submit_tweet").prop('disabled',true);  //disable the tweet submit button 
	});
}

function display_tweet(tweet){ 
	var reply_button = '<a class="btn btn-mini reply" href="#"><i class="icon-share-alt"></i> Reply</a>';
	var favorite_button = '<a class="btn btn-mini fave" href="#"><i class="icon-star-empty"></i> Favorite</a>'; 
	var row = $("<div class='row'></div>");
	var timestamp = new Date();
	var my_avatar = "<div class='avatar'><img src='L.png'></div>"; 
	var new_tweet = "<div class='tweet'>" + tweet;
	var nametag = "<a href= 'https://www.google.com'><b>Susan Tan</b></a> @SusanTanHMC<br>";
	var tweet_div = $(new_tweet+'<br>'+timestamp+'<br>'+reply_button+favorite_button+'</div>');
	tweet_div.prepend(nametag);
	row.append(my_avatar);
	row.append(tweet_div);
	$("#tweet").append(row);
	leave_tweet_box();
}

function click_tweet_box() { 
	$("#small_box").hide();
	$("#big_box").show();
	$("#big_box").focus()
}

function leave_tweet_box() {
	if ($("#big_box").val() != "") {
		return false;
	}
	$("#small_box").show();
	$("#big_box").hide();
}

function check_keystroke(){ 
	$("#big_box").keyup(function(){
		char_count() 
	}) 
}

function char_count(){ 
	  length = document.getElementById('big_box').value.length
	  max = 140;

	  if (length == 0) { 
	  	$(".Error").text(" ");
	  	$("#submit_tweet").prop('disabled',true);
	  }
	  
	  if (length > 0 && length < max ) {
	  	$(".Error").text(" ");
	  	$("#submit_tweet").prop('disabled',false);
	  }

	  if (length > max) {
	  	$(".Error").text("Maximum character limit exceeded.");
	  	$("#submit_tweet").prop('disabled',true);
	  }

	  remaining = max-length; 
	  $(".Word_Count").text("Count: " + remaining);
} 
