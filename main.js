/*
	используя синтаксис и анимационные эффекты jquery создайте модальное окно
	Что для этого нужно
	1.кнопка которая будет запускать функцию открытия
	2.разметка для модального окна(минимум)
	- полупрозрачный слой(overlay), который будет на весь экран т будет затемнять страницу
	- само модальное окно с 2 полями для ввода(имя, телефон), кнопками закрыть(х) и отправить
	3.Изначально модальное displfy none.Чтобы показать его можете восполльзоваться fadeIn.
	4. Сделайте так, чтобы при открытии ПЕРВЫЙ показывался overlay и только после него само окно
	5.При закрытии - наоборот, первым уходит модальное окно, затем overlay 
	6. Функция закрытия срабатывает в 2 случаях - при клике на кнопку закрытия на модалке или при клике на overlay
	7.По нажатию на кнопку отправить - выведите данные формы алертом, после закройте модалку
*/

/*$('#btn').click(function() {
	$('#overFlow').fadeIn(1000, function() {
			$('#myForm').fadeIn(200);

	//$('#overFlow').css({ display: 'block' });
	//	setTimeout(function() {
	//	$('#modalWindow').css({ display: 'block' });
	//}, 1000);
});*/
$('#btn').click(function() {
	$('#overFlow').fadeIn(1000, function() {
		$('#modalWindow').fadeIn(20);
	});
});
$('#X').click(function() {
	$('#modalWindow').fadeOut(20, function() {
		$('#overFlow').fadeOut(1000);
	});
});
$('#overFlow').click(function() {
	$('#modalWindow').fadeOut(20, function() {
		$('#overFlow').fadeOut(1000);
	});
});
$('#send').click(function() {
	var name = document.test.name.value;
	var phone = document.test.phone.value;
	alert('user Name: ' + name + '   user Phone: ' + phone);
	$('#modalWindow').fadeOut(20, function() {
		$('#overFlow').fadeOut(1000);
	});
});
