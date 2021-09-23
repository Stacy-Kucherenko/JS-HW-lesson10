function check() {
	var surname = $("#Surname").val();
	var name = $("#Name").val();
	var age = $("#Age").val();
	var address = $("#Address").val();
	
	if (surname && name && (age > 0 && age <= 100) && address) {
		$("#Message").css("visibility", "hidden");
		$("#AjaxGET").prop("disabled", false);
		$("#AjaxPOST").prop("disabled", false);		
	} else {
		$("#Message").css("visibility", "visible");
		$("#AjaxGET").prop("disabled", true);
		$("#AjaxPOST").prop("disabled", true);		
	}
}

function validateAge() {
	var age = $("#Age");

	if (age.val() > 0 && age.val() <= 100) {
		age.removeClass("error");		
	} else {
		age.addClass("error");
		age.val("");
		age.focus();		
		console.log("Age must be a number between 1 and 100 years old!");
	}
}

function sendDataByGetMethod() {
	var userData = {
		userSurname : $("#Surname").val(),
		userName : $("#Name").val(),
		userAge : $("#Age").val(),
		userAddress : $("#Address").val()
	};

	$.ajax({
		type: "GET",
		contentType: "application/json",
		url: "/userGet?Surname=" + userData.userSurname + "&Name="
		+ userData.userName + "&Age=" + userData.userAge + "&Address="
		+ userData.userAddress,		
		success: function(data) {
			alert("Ajax GET method is completed successfully!");
			console.log(JSON.stringify(data));
		}
	});
}

function sendDataByPostMethod() {
	var userData = {
		userSurname : $("#Surname").val(),
		userName : $("#Name").val(),
		userAge : $("#Age").val(),
		userAddress : $("#Address").val()
	};

	$.ajax({
		type: "POST",
		data: JSON.stringify(userData),
		contentType: "application/json",
		url: "/userPost",
		success: function(data) {
			alert("Ajax POST method is completed successfully!");
			console.log(JSON.stringify(data));
		}
	});	
}

function clearFields() {
	$("#Surname").val("");
	$("#Name").val("");
	$("#Age").val("");
	$("#Address").val("");
	check();
}

$(document).ready(function() {
	$("#Surname").keyup(check);
	$("#Name").keyup(check);
	$("#Age").keyup(check);
	$("#Age").blur(validateAge);
	$("#Address").keyup(check);
	
	$("#AjaxGET").click(sendDataByGetMethod);
	$("#AjaxPOST").click(sendDataByPostMethod);
	$("#ClearFields").click(clearFields);
})