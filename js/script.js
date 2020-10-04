 //arrays declaration
 var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


//calculate function for day of the week

function getDay (cc,yy,mm,dd){
  return(((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+ dd)%7
}
function userInput(){
  var century = document.getElementById("century").value;
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;
 
  var birthDay = new Date();
  birthDay.setDate(parseInt(day));
  birthDay.setMonth(parseInt(month)-1);
  birthDay.setFullYear(parseInt(year));
  var dob = birthDay.getDay();

  if(dob===0){
    console.log(dob);
  }else if(dob===1){
    console.log(dob);
  }else if(dob===2){
    console.log(dob);
  }else if(dob===3){
    console.log(dob);
  }else if(dob===4){
    console.log(dob);
  }else if(dob===5){
    console.log(dob);
  }else if(dob===6){
    console.log(dob);
  }
  if(year==""||year>2020 ||year<0){
      alert("please enter a valid year");
  }else if(month=="" ||month>12 ||month<1){
      alert("Please enter a valid month");
  }else if(day=="" ||day>31 ||day<0){
      alert("Please enter a valid date");
  }else if(document.getElementById("male").checked==true && document.getElementById("female").checked==false){
      alert("Your Akan name is " + maleName[dob]);
  }else if(document.getElementById("male").checked==false && document.getElementById("female").checked==true){
      alert("Your Akan name is " + femaleName[dob]);
  }
}