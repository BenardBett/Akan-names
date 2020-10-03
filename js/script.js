 var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];




function getDay (cc,yy,mm,dd){
  return ((((cc/19)+1*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
}
function userInput(){
  var century = document.getElementById("century").value;
  var year = document.getElementById("year").value;
  var Month = document.getElementById("month").value;
  var day = document.getElementById("day").value;
 
  var birthDay = new Date();
  birthDay.setDate(parseInt(day));
  birthDay.setMonth(parseInt(Month)-1);
  birthDay.setFullYear(parseInt(year));
  var dob = birthDay.getDay();

  if(dob===0){
      alert("Sunday");
  }else if(dob===1){
      alert("Monday");
  }else if(dob===2){
      alert("Tuesday");
  }else if(dob===3){
      alert("Wednesday");
  }else if(dob===4){
      alert("Thursday");
  }else if(dob===5){
      alert("Friday");
  }else if(dob===6){
      alert("Saturday");
  }
  if(year==""||year>2056){
      alert("insert a valid year");
  }else if(Month=="" ||Month>12){
      alert("Enter a valid month");
  }else if(day=="" ||day>31){
      alert("Enter a valid month");
  }else if(document.getElementById("male").checked==true && document.getElementById("female").checked==false){
      alert("Your Akan name is " + maleName[dob]);
  }else if(document.getElementById("male").checked==false && document.getElementById("female").checked==true){
      alert("Your Akan name is " + femaleName[dob]);
  }
}