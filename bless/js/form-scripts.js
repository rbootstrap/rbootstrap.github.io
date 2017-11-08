$("#contactForm").validator().on("submit", function (event) {
	if (event.isDefaultPrevented()) {
		// handle the invalid form...
		formError();
		submitMSG(false, "Form Working has been disabled here! The Form will work on your PHP enabled server!");
	} else {
		// everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
	// Initiate Variables With Form Content
	var name = $("#name").val();
	var email = $("#email").val();
	var events = $("#events").val();
	var number_of_people = $("#number_of_people").val();

	$.ajax({
		type: "POST",
		//Set the Path to Your PHP File here
		url: "/bless/form-process.php",
		data: "name=" + name + "&email=" + email + "&events=" + events + "&number_of_people=" + number_of_people,
        success : function(text){
			if (text == "success"){
				formSuccess();
				$("#contact_form_fields").slideUp(); //hide form after success
            } else {
                formError();
                submitMSG(false,text);
            }
		}
	});
}


function formSuccess(){
	$("#contactForm")[0].reset();
	submitMSG(true, "Thank you!")
}

function formError(){
	$(this).removeClass();
}

function submitMSG(valid, msg){
	if(valid){
		var msgClasses = "h3 text-center text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
	$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}