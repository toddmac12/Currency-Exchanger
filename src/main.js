import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from '../src/currency-service.js';

function checkInput(dollar) {
  if (dollar <= 0 || dollar === '') {
    return new Error('Please enter valid input in both fields!');
  } else {
    return true;
  }
}

$(document).ready(function() {
  const currency = '../src/currencyList.json';

  $.getJSON(currency, function(data) {
    // eslint-disable-next-line no-unused-vars
    data.currency.forEach(function(value, index) {
      $('#currency').append(`<option>${value}</option>`);
    });
  });
  $('#convert').click(function() {
    const dollar = $('#amount').val();
    const currency = $('#currency').val();
    const promise = Conversion.convertCurrency();
    promise.then(
      function(response) {
        const body = JSON.parse(response);
        $('#convertedAmount').html(
          `The currency rate exchange for $${dollar} USA dollars is ${currency} $${
            body.conversion_rates[currency] * dollar
          }`,
        );
      },
      function(error) {
        $('.showErrors').html(`There was an error processing your request: ${error}`);
      },
    );
    try {
      const isInputValid = checkInput(dollar);
      if (isInputValid instanceof Error) {
        console.error(isInputValid.message);
        throw new RangeError('Not a valid entry');
      } else {
        $('#convertedAmount').show();
        $('#displayError').hide();
      }
    } catch (error) {
      console.error(`There's an error! ${error.message}`);
      $('#displayError').show();
      $('#convertedAmount').hide();
    }
  });
});


 });
});
