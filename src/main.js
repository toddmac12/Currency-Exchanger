import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from '../src/currency-service.js';



function checkInput(dollar) {
 if (dollar <= 0 || dollar === "") {
  return new Error("Please enter valid input in both fields!");
 } else {
  return true;
 }
}

$(document).ready(function () {
 $('#convert').click(function () {
  let dollar = $('#amount').val();
  let currency = $("#currency").val();
  let promise = Conversion.convertCurrency();
  promise.then(function (response) {
   const body = JSON.parse(response);
   $('#convertedAmount').html(`The currency rate exchange for $${dollar} USA dollars is ${currency} $${body.conversion_rates[currency] * dollar}`);
   // $('#displayError').hide();
  }, function (error) {
   $('.showErrors').html(`There was an error processing your request: ${error}`);
  });
  try {
   const isInputValid = checkInput(dollar);
   if (isInputValid instanceof Error) {
    console.error(isInputValid.message);
    throw RangeError("Not a valid entry");
   } else {
    console.log("Successful.");
    $('#convertedAmount').show();
    $('#displayError').hide();
   }
  } catch (error) {
   console.error(`There's an error! ${error.message}`);
   // $('#displayError').html
   $('#displayError').show();
   $("#convertedAmount").hide();
  }
 });
});
