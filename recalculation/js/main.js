if (!Modernizr.inputtypes.date) {
	alertify.alert("Используйте Google Chrome, для коректной работы приложения!");
}

$('#two-year').click(function(event) {
	$(this).addClass('active');
	$('#one-year').removeClass('active');
	$('#btn-1').addClass('visible');
	$('#btn-2').removeClass('visible');
});
$('#one-year').click(function(event) {
	$(this).addClass('active');
	$('#two-year').removeClass('active');
	$('#btn-2').addClass('visible');
	$('#btn-1').removeClass('visible');
});


$('#btn-1').click(function(event) {
	event.preventDefault();


	// Проверка полей!
	$('input:not(input[type=submit])').each(function() {
		$(this).on('focus', function(event) {
			$(this).next('span.error').fadeOut(250);
		});
		if ($(this).val() == '') {
			$(this).next('span.error').fadeIn(250);
		};
		
	});

	var oneYear = 365;
	var twoYear = 183;
	var oneYearMonth = 12;
	var twoYearMonth = 6;
	var dateOfPurchase = $('#dateOfPurchase').val();
	var dateOfBirth = $('#dateOfBirth').val();
	var firstResult = moment(dateOfBirth).diff(dateOfPurchase);
	var secondResult = oneYear - (firstResult / 1000 / 60 / 60 / 24);
	$('#first').text(Math.round(firstResult / 1000 / 60 / 60 / 24));
	$('#second').text(Math.round(secondResult));

	var priceAb1 = $('#price1').val();
	var priceAb2 = $('#price2').val();
	var a = (Math.round((priceAb1 / oneYear) * (firstResult / 1000 / 60 / 60 / 24)));
	var b = (Math.round(priceAb2 - (priceAb2 / oneYear) * (firstResult / 1000 / 60 / 60 / 24)));
	$('#firstPriceResult').text(Math.round(a));
	$('#secondPriceResult').text(Math.round(b));
	$('#totalPrice').text(a + b);


	$('#first-month').text(((firstResult / 1000 / 60 / 60 / 24) / 30).toFixed(1));
	$('#second-month').text((oneYearMonth - ((firstResult / 1000 / 60 / 60 / 24) / 30).toFixed(1)).toFixed(1));
});

$('#btn-2').click(function(event) {
	event.preventDefault();

	// Проверка полей!
	$('input:not(input[type=submit])').each(function() {
		$(this).on('focus', function(event) {
			$(this).next('span.error').fadeOut(250);
		});
		if ($(this).val() == '') {
			$(this).next('span.error').fadeIn(250);
		};
		
	});

	var oneYear = 365;
	var twoYear = 183;
	var oneYearMonth = 12;
	var twoYearMonth = 6;
	var dateOfPurchase = $('#dateOfPurchase').val();
	var dateOfBirth = $('#dateOfBirth').val();
	var firstResult = moment(dateOfBirth).diff(dateOfPurchase);
	var secondResult = twoYear - (firstResult / 1000 / 60 / 60 / 24);
	$('#first').text(Math.round(firstResult / 1000 / 60 / 60 / 24));
	$('#second').text(Math.round(secondResult));

	var priceAb1 = $('#price1').val();
	var priceAb2 = $('#price2').val();
	var a = (Math.round((priceAb1 / twoYear) * (firstResult / 1000 / 60 / 60 / 24)));
	var b = (Math.round(priceAb2 - (priceAb2 / twoYear) * (firstResult / 1000 / 60 / 60 / 24)));
	$('#firstPriceResult').text(Math.round(a));
	$('#secondPriceResult').text(Math.round(b));
	$('#totalPrice').text(a + b);

	$('#first-month').text(((firstResult / 1000 / 60 / 60 / 24) / 30).toFixed(1));
	$('#second-month').text((twoYearMonth - ((firstResult / 1000 / 60 / 60 / 24) / 30).toFixed(1)).toFixed(1));
});



// Открытие формы обратной связи //
$('.btn-callback').click(function(event) {
	$('.comments').addClass('show');
});
// Закритие формы обратной связи //
$('.close').click(function(event) {
	$('.comments').removeClass('show');
	$('.user-name, .comment-text').val('');
});
// Отправка формы обратной связи!
$('.comments').submit(function() {
		$.ajax({
			type: "GET",
			url: "php/mail.php",
			data: $(".comments").serialize()
		}).done(function() {
			$('.comments').removeClass('show');
			alert("Спасибо за Ваше пожелание! Я обязательно его учту!");
		});
		return false;
	});

