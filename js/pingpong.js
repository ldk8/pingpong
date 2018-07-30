var KEY={
	UP:38,
	DOWN:40,
	W:87,
	S:83
}
$(function(){
	$(document).keydown(
		function(e){
			switch(e.which){
				case KEY.UP:
				var top=parseInt($("#paddleB").css("top"));
				$("#paddleB").css("top",top-5);
				break;
			}
		}
		);
});