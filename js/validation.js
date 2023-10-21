// Contact form
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

setInputFilter(document.getElementById("phone"), function (value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});


function formSubmission() {
    $('.contact-form__form button').prop('disabled', true);
    var formData = $(".contact-form__form").serializeArray();
    var data = {};
    var action = $('.contact-form__form').attr('action');
    $(formData).each(function (index, obj) {
        if (obj.name != "check")
            data[obj.name] = obj.value;
    });
 
    $.ajax({
        type: 'POST',
        url: action,
        data: JSON.stringify(data),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            if (data.status === 'success') {
                $(".contact-form__form")[0].reset();
                window.location.href='/sucess.php';
                jQuery('#contact_id').modal('hide');
            } else {
                alert('Something went wrong. Please try again later');
            }
        },
        error: function (errMsg) {
            alert('Something went wrong. Please try again later');
        },
    });

    // $('.contact-form__form button').prop('disabled', false);
}


$(".contact-form__form.eng").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
        },
        phone: {
            required: true,
            number: true,
            minlength: 10,
            maxlength: 10,
        },
        message: {
            maxlength: 450,
        }
    },
    messages: {
        name: {
            required: "Name is required",
            minlength: "Name cannot be this short",
        },
        phone: {
            required: "phone number is required",
            number: "input should be a number",
            minlength: "At least 10 digits required!",
            maxlength: "Please enter only 10 digits!",
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        formSubmission();
    }
});

// function (form) {





// }


$(".contact-form__form.tamil").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            number: true,
            minlength: 10,
            maxlength: 10,
        },
        message: {
            maxlength: 450,
        }
    },
    messages: {
        name: {
            required: "உள்ளீடு தேவை",
            minlength: "உள்ளீடு குறுகியதாக உள்ளது",
        },
        email: {
            required: "உள்ளீடு தேவை",
            email: "மின்னஞ்சல் முகவரி வடிவம் தவறானது",
        },
        phone: {
            required: "உள்ளீடு தேவை",
            number: "உள்ளீடு எண்ணாக இருக்க வேண்டும்",
            minlength: "10 இலக்கங்களை உள்ளிடவும்!",
            maxlength: "10 இலக்கங்களை மட்டும் உள்ளிடவும்!",
        },
        message: {
            maxlength: "உள்ளீடு நீளமாக உள்ளது",
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        formSubmission();
    }
});