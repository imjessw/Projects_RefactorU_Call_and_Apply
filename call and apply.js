




$(".buttonSet .toggle").on("click", function(){
	$(this).hide();
	var buttonSet = $(this).closest(".buttonSet");
	var output= buttonSet.find(".output");
	var input= buttonSet.find(".form-control");
	var submit=buttonSet.find(".submit")
	input.show().focus();
	submit.show();
	console.log(input);
});


$(".submit").on("click", function(){
	var buttonSet= $(this).closest(".buttonSet");
	var input= buttonSet.find(".form-control");
	var output= buttonSet.find(".output");
	var inputVal= input.val();
	output.prepend("<p>"+ inputVal + "</p>");
	input.val("")
	$(".toggle").show();
	input.hide();
	$(this).hide();
	
});



