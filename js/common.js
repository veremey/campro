head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

$(document).ready(function() {


	var overlay = $(".js-overlay");
		 $(".js-close-popup").click(function (){
				 $(this).parents(".js-popup").hide();
				 overlay.hide();
		 });
		 overlay.click(function(){
				 $(this).hide();
				 $(".js-popup").hide();
		 });

		 $(".js_enter_link").click(function (){
				 $(".js-popup-enter").show();
				 overlay.show();
				 return false;
		 });


});



//  FORM VALIDATION


$(document).ready(function() {
    function validate() {
    $('.js-validate').each(function(){
      if ($(this).length > 0) {
        $(this).validate({
          errorClass: 'has-error',
          rules: {
            username: {
              minlength: 2
            },
            any: {
              minlength: 2
            },
            password: {
              minlength: 5
            },
            confirm_password: {
              minlength: 5,
              equalTo: '#password'
            },
            email: {
              email: true
            },
            tel: {
              minlength: 5,
            },
            address: {
              minlength: 2
            },
            message: {
              minlength: 4
            },
            field: {
              required: true
            },
            text_area:{
              minlength: 4
            }
            // fruit: {
            //   required: true
            // }
          },
          messages: {
            firstname: 'Вас так зовут?',
            lastname: 'У вас такая фамилия?',
            fathername: 'У вас такое отчество?',
            password: {
              required: 'Введите пароль',
              minlength: 'Минимум 5 символов'
            },
            confirm_password: {
               required: 'Пароли не совпадают',
               minlength: 'Минимум 5 символов',
               equalTo: 'Пароли не совпадают'
            },
            email: 'Неверный формат',
            address: 'Это Ваш адрес?',
            any: 'Заполните поле',
            company: 'Заполните поле',
            tel: {
              required: '* Введите Ваш терефон',
              minlength: 'Минимум 5 символов'
            },
            username: {
              required: '* Введите Ваше имя',
              minlength: 'Минимум 2 символa'
            },
            message: {
              required: 'Заполните поле',
              minlength: 'Заполните поле',
            },
            text_area: {
              required: '* Заполните поле',
              minlength: 'Заполните поле'
            }
          }
        });
      }
    });
  }

  validate();

});

// polzunok


function ui_slider() {
    $(".js-ui-slider").each(function(){
        var slider = $(this).find(".js-ui-slider-main");
        var input_from = $(this).find(".js-ui-slider-from");
        var input_to = $(this).find(".js-ui-slider-to");
        slider.slider({
            range: true,
            min: 0,
            max: 23500,
            step: 5,
            values: [ 12595, 23500 ],
            slide: function( event, ui ) {
                $(this).find(".ui-slider-handle").html("<span></span>");
                var handle_0 = $(this).find(".ui-slider-range").next().find("span")
                var handle_1 = $(this).find(".ui-slider-range").next().next().find("span");
                input_from.val(ui.values[0]);
                input_to.val(ui.values[1]);
                handle_0.text(ui.values[0]);
                handle_1.text(ui.values[1]);
            }
        });
        console.log(handle_0);
        console.log(handle_1);
        $(this).find(".ui-slider-handle").html("<span></span>");
        var handle_0 = $(this).find(".ui-slider-range").next().find("span")
        var handle_1 = $(this).find(".ui-slider-range").next().next().find("span");
        handle_0.text(slider.slider( "values", 0 ));
        handle_1.text(slider.slider( "values", 1 ));
        input_from.val(slider.slider( "values", 0 ));
        input_to.val(slider.slider( "values", 1 ));
    });
}
ui_slider();



});