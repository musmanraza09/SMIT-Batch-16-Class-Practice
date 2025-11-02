console.log("JavaScript Connected!");

//  function checkForSelection() {
//    if (document.getElementById("states").selectedIndex === 0) {
//       alert("Please select a state.");
//       return false;
//     }
// //   }

//  form validation for select box
//  function checkForSelection(selecID) {
//    var target = document.getElementById(selecID);
//     if (target.selectedIndex === 0) {
//       alert("Please select a state.");
//       return false;
//     }
// return false;


//   }

//   function validateRadios() {  
// var radios = document.getElementsByName("r1") ;   
//  }
//  for (var i = 0; i < radios.length; i++) {
//  if (radios[i].checked) {
//  return true; 
// }
//  }
//  alert("Please check one.");
//  return false;
// // }
// function validateZip(){
//     var InpValue = document.getElementById("zip").value.trim();

//     if(InpValue.length !== 5){
//         alert

//     }
// }


// function validateZip(){
//     var v = document.getElementById("zip").ariaValueMax.trim();
//     var regex = !/^\d{5}$/;
    
//     if(!regex.test(v)){
//         alert("Please enter exactly 5 digits")
//         return false;
//     }
//     return true;
// }

// console.log(validatePassword("usman1@"))

function validateEmail(){
    var email = document.getElementById("email").value.trim();

    var at = email.indexof("@");

    if(at < 1 ||at > email.length - 5){
        alert("Invalid Position of @");
        return false;
    }
return true;
}


