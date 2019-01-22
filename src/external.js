
// var rupeeUnicode = "&#8377;";
// var globalObj = {
//   'slot1Label': "val * 0.06"
// }

// $.when( $.ready ).then(function() {
//   setDefaultResults();
//   $('.close-icon').click(function() {
//     $('#amount').val("");
//     setDefaultResults();
//   });
//   $('#amount').keydown(function (e) {
//     var key = e.which || e.keyCode;

//     if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
//       // numbers
//       key >= 48 && key <= 57 ||
//       // Numeric keypad
//       key >= 96 && key <= 105 ||
//       // comma, period and minus, . on keypad
//       //    key == 190 || key == 188 || key == 109 || key == 110 ||
//       // .,Backspace and Tab and Enter
//       key == 190 || key == 8 || key == 9 || key == 13 ||
//       // Home and End
//       key == 35 || key == 36 ||
//       // left and right arrows
//       key == 37 || key == 39 ||
//       // Del and Ins
//       key == 46 || key == 45){
//       return true;
//     }
//     return false;
//   });
//   $('#amount').keyup(function (e) {
//     var val = $(this).val().toString().trim();
//     val = parseFloat(val);
//     $('.input-amount .val').html(getIndianFormatNumber(val));
//     if(!val) {
//       setDefaultResults();
//     }
//     calculatResults(val);
//   });
// });

// function calculatResults(val) {
//   var result = 0;
//   if(val > 0 && val <= 25000) {
//     result = val * 0.06;
//   } else if(val > 25000 && val <= 50000) {
//     result = getPercentAmount(25000,6);
//     val = val - 25000;
//     result += val * 0.05;
//   } else if(val > 50000 && val <=  100000){
//     result = getPercentAmount(25000,6);
//     result += getPercentAmount(25000,5);
//     val = val - 50000;
//     result += val * 0.04;
//   } else if(val > 100000 && val <=  200000){
//     result = getPercentAmount(25000,6);
//     result += getPercentAmount(25000,5);
//     result += getPercentAmount(50000,4);
//     val = val - 10000;
//     result += val * 0.03;
//   } else if(val > 200000){
//     result = getPercentAmount(25000,6);
//     result += getPercentAmount(25000,5);
//     result += getPercentAmount(50000,4);
//     result += getPercentAmount(100000,3);
//     val = val - 200000;
//     result += val * 0.02;
//     // console.log(result);
//   }
//   if(result){
//     result1 = result;
//     $(".result1 .val").html(getIndianFormatNumber(result1));
//     var result2 = result1 + 250;
//     $(".result2 .val").html(getIndianFormatNumber(result2));
//   }
// }
// function setDefaultResults() {
//   $('.input-amount .val').html(rupeeUnicode + " 0");
//   $(".result1 .val").html(getIndianFormatNumber(0));
//   $(".result2 .val").html(getIndianFormatNumber(0));
// }

// function getPercentAmount(amount,percent) {
//   return amount * (percent * 0.01);
// }

// function getIndianFormatNumber(val) {
//   return val.toLocaleString('en-IN', {
//     maximumFractionDigits: 2,
//     style: 'currency',
//     currency: 'INR'
//   });
// }
