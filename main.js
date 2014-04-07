var phoneNumber = prompt("Please enter your phone number (xxx-xxx-xxxx): ");

if(phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-"){
	alert("True");
}
else{
	alert("False");
}

var birthDate = prompt("Please enter your date of birth (mm/dd/yy): ");

if(birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/"){
	alert("True");
}
else{
	alert("False");
}

var postalCode = prompt("Please enter your zip code: ");

if(postalCode.length === 5 || (postalCode.length === 10 && postalCode.charAt(5) === "-")){
	alert("True");
}
else{
	alert("False");
}

var stateAbb = prompt("Please enter your State: ");

if(stateAbb.length === 2 && (stateAbb.charAt(0) >= "A" && stateAbb.charAt(0) <= "Z") && (stateAbb.charAt(1) >= "A" && stateAbb.charAt(1) <= "Z")){
	alert("True");
}
else{
	alert("False");
}

var maritalStatus = prompt("Are you married? ");

if(maritalStatus.toLowerCase() === "yes" || maritalStatus.toLowerCase() === "no"){
	alert("True");
}
else{
	alert("False");
}