$(document).ready(function() {
	var visibility = false;

	$("#nick").hover(function(){
		$("#nick").html("I AM NOT JUST PAGE ;)");
	})
	$("#nick").mouseout(function(){

		$("#nick").html("I AM JUST PAGE.");
 	});

	var temp;
 	$(".material-icons").click(function(){
 		if(visibility) {
 			$("#name").html(temp);
 			$("#nick").hover(function(){
				$("#nick").html("I AM NOT JUST PAGE ;)");
			})
			$("#nick").mouseout(function(){

				$("#nick").html("I AM JUST PAGE.");
		 	});

 			$("#subname").html("OF THE FULLSTACK DEVELOPER");

 			$(".material-icons").html("airplanemode_active");
 			visibility = false;
 		}
 		else{
 			temp = $("#name").html();
 			$("#name").html("<a href='https://vk.com/id258387614' style='text-decoration: none'>@SHJSTSPC</a>");
 			$("#subname").html("<a href='https://github.com/gusevGitAcc'>profile</a>");
 			$("#subname").append(" - <a href='https://github.com/gusevGitAcc/YuriiGusev'>repo</a>")
 			$("#subname").append(" - <a href='https://github.com/sofiazakharova/SofiaZakharova.github.io/wiki'>wiki</a>")
 			$(".material-icons").html("airplanemode_inactive");
 			visibility = true;
 		}
 	})


});
