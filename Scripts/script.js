jQuery('Document').ready(function ()/*Ждет полной прогрузки документа и запускает функцию*/
{
    window.onscroll = function(){window.scrollTo(0, 0);};/*Фиксирует положение скролла в самом верху*/
	jQuery('#Yes').on('click',function()/*Если кнопка с ID="#Yes" нажата выполнить функцию*/
	{
		jQuery('#Banner').remove();/*Удалить div с ID="#Banner"*/
		jQuery('.Brand').css('filter','none');
		jQuery('.History').css('filter','none');
		jQuery('.About_Beer').css('filter','none');
		jQuery('.Sponsorship').css('filter','none');
		jQuery('.footer').css('filter','none');
		window.onscroll=function(){};/*Очистить положение скролла*/
	});
	jQuery('#No').on('click',function(){/*Если кнопка с ID="#No" нажата выполнить функцию*/
		alert("Sorry, you are not old enough to visit this website.");/*Выводит сообщение о том что возраст меньше рекомендованного.*/
	});
});