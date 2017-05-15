$(document).ready(function($){
//****** СНЕГ
/* $(document).snowfall({
	 	shadow : true,
	 	round : true,
	 	minSize: 5
	 });*/
}); // <-- end ready


$('#btn').click(function(event) {
	event.preventDefault();

	// Проверка полей обязательных для заполнения!
	// Вывод сообщения ошибки!
	if (!$('#price').val()) {
		$('.required').slideDown(100);
		$('#price').css('border', '1px solid red');
	};
	// Удаление сообщения ошибки!
	$('#price').focus(function() {
		$('.required').slideUp(100);
		$('#price').css('border', '1px solid #26a65b');
	});

	if ($('input:checked').val() != 1 && $('#price').val() != '') {


		// Переменные
		var price = $('#price').val();
		var count = $('#count').val();
		var cash = $('#cash').val();

		// Формулы
		var overpayment = ((price - cash) * 0.029) * count;
		var bonus = overpayment / (price / 365);
		var payment = ((price - cash) + overpayment) / count;
		var one_payment = overpayment / count;

		//Вывод данных
		$('.result span:first()').html(Math.round(bonus));
		$('.result p:nth-child(2) span').html(Math.round(payment));
		$('.result p:nth-child(3) span').html(Math.round(overpayment));
		$('.result p:nth-child(4) span').html(Math.round(one_payment));

	} else if ($('input:checked').val() != 0 && $('#price').val() != ''){

		$('#full_pay, label[for=full_pay]').click(function(event) {
			$('#cash').val('0');
		});

		// Переменные
		var price = $('#price').val();
		var count = $('#count').val();
		var cash = $('#cash').val();
		
		// Формулы
		var bonus = 11 * count;
		var overpayment = (price * 0.029) * count;
		var payment = ((price-cash) + overpayment) / count;
		var one_payment = overpayment / count;
		 
		//Вывод данных
		$('.result span:first()').html(Math.round(bonus));
		$('.result p:nth-child(2) span').html(Math.round(payment));
		$('.result p:nth-child(3) span').html(Math.round(overpayment));
		$('.result p:nth-child(4) span').html(Math.round(one_payment));

	}

});

// Скроем/покажем не нужные поля
$('#full_pay, label[for=full_pay]').click(function(event) {
	$('#cash , label[for=cash]').slideUp(200);
});
$('#not_full_pay, label[for=not_full_pay]').click(function(event) {
	$('#cash , label[for=cash]').slideDown(200);
});

