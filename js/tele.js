$(function () {
    var code = "+19876543210"; // Assigning value from model.
    $('#mobile').val(code);
    $('#mobile').intlTelInput({
        autoHideDialCode: true,
        autoPlaceholder: "ON",
        dropdownContainer: document.body,
        formatOnDisplay: true,
       // hiddenInput: "full_number",
        initialCountry: "eg",
      //  nationalMode: true,
        placeholderNumberType: "MOBILE",
        preferredCountries: ['us','gb','in'],
        separateDialCode: true
    });
    $('#btn-submit').on('click', function () {
        var code = $("#mobile").intlTelInput("getSelectedCountryData").dialCode;
        var phoneNumber = $('#mobile').val();
      //  $('#mobile').val(code+phoneNumber);
        //  alert('Country Code : ' + code + '\nPhone Number : ' + phoneNumber );
        document.getElementById("code").innerHTML = code;
        document.getElementById("mobile-number").innerHTML = phoneNumber;
    });
});
$(function () {
    var code = "+11550408799"; // Assigning value from whats.
    $('#whats').val(code);
    $('#whats').intlTelInput({
        autoHideDialCode: true,
        autoPlaceholder: "ON",
        dropdownContainer: document.body,
        formatOnDisplay: true,
       // hiddenInput: "full_number",
        initialCountry: "eg",
      //  nationalMode: true,
        placeholderNumberType: "WHATS",
        preferredCountries: ['us','gb','in'],
        separateDialCode: true
    });
    $('#btn-submit').on('click', function () {
        var code = $("#whats").intlTelInput("getSelectedCountryData").dialCode;
        var phoneNumber = $('#whats').val();
      //  $('#mobile').val(code+phoneNumber);
        //  alert('Country Code : ' + code + '\nPhone Number : ' + phoneNumber );
        document.getElementById("code").innerHTML = code;
        document.getElementById("mobile-number").innerHTML = phoneNumber;
    });
});

