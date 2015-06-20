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

		 $(".js-size").click(function (){
				 $(".js-popup-size").show();
				 overlay.show();
				 return false;
		 });

		 $(".js-goods").click(function (){
				 $(".js-popup-goods").show();
				 overlay.show();
				 return false;
		 });

		 $(".js-location").click(function (){
				 $(".js-popup-location").show();
				 overlay.show();
				 return false;
		 });

		$(document).click(function() {
			 $(".js-drop ul").hide();
			 $(".js-select-list").hide();
			 $(".js-select").removeClass("is-active");
				});

		$(".js-del").bind("click", function(){
        $(this).closest('.offspring').remove();
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
						firstname: '* Вас так зовут?',
						lastname: '* У вас такая фамилия?',
						fathername: '* У вас такое отчество?',
						password: {
							required: '* Введите пароль',
							minlength: '* Минимум 5 символов'
						},
						confirm_password: {
							 required: '* Пароли не совпадают',
							 minlength: '* Минимум 5 символов',
							 equalTo: '* Пароли не совпадают'
						},
						email: '* Неверный формат',
						address: '* Это Ваш адрес?',
						any: '* Заполните поле',
						company: '* Заполните поле',
						tel: {
							required: '* Введите Ваш терефон',
							minlength: '* Минимум 5 символов'
						},
						username: {
							required: '* Введите Ваше имя',
							minlength: 'Минимум 2 символa'
						},
						message: {
							required: '* Заполните поле',
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

// scroll in sidebar

$(function()
	{
		$('.scroll-pane').jScrollPane({
			mouseWheelSpeed:4,
			animateScroll: true
		});
	});

// check select

function select() {
	$(".js-select").each(function(){
		var select_list = $(this).parent().find(".js-select-list");
		var text = select_list.find("li").first().text();
		$(this).find(".js-select-text").text(text);
		$(this).click(function(event){
			if ($(this).hasClass("is-active")) {
			    $(this).removeClass("is-active");
			    select_list.slideUp("fast");
			}
			else {
			    $(".js-select").removeClass("is-active");
			    $(".js-select-list").hide();
			    select_list.slideDown("fast");
			    $(this).addClass("is-active");
			}
			event.stopPropagation();
		});
		select_list.find("li").click(function(event) {
			var id = $(this).attr("data-id");
			var text = $(this).text();
			$(this).parent().parent().find(".js-select-text").text(text);
			$(this).parent().parent().find(".js-select-input").val(id);
			$(this).parent().hide();
			$(this).parents(".js-select").removeClass("is-active");
			event.stopPropagation();
		});
	});
}
select();

$('.js-select').click(function(event){
    event.stopPropagation();
});


	$('.js-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-carousel-preview',
	});
	$('.js-carousel-preview').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-carousel',
		dots: false,
		arrows: true,
		infinite: false,
		centerMode: false,
		focusOnSelect: true,
	});

	$(".js-carousel-preview .slick-slide").on("click",function (){
	  $(this).parent().find(".slick-slide").removeClass("is-active");
	  $(this).addClass("is-active")

	  return false;
	});

// $('.slick-slide').hover(function(){
// 	$(this).parents().find('.carousel__shadow-1').hide(1000)
// });



// tabs




    function tab() {
        $(".js-tab").each(function(){

            var tab_link = $(this).find("a");
            var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
            tab_cont.hide();
            $(this).parents(".js-tab-group").find(".js-tab1").show();

            tab_link.bind("click", function() {
                var index = $(this).attr("href");
                tab_link.removeClass("is-active");
                tab_link.parent().removeClass("is-active");
                $(this).addClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.hide();
                $(this).parents(".js-tab-group").find("."+index).slideDown("fast");
                return false;
            });
        });
    }
    tab();

});