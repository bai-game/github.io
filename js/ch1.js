monogatari.script ({
	'car_1': [
		function(){clickClear()},
		function(){update_n()},
		'show scene village_2 with fadeIn',
		'y У Тебя есть машина Ford Focus III I 2017 г. с автоматической коробкой передач.',
		'show message Car1',
		{'Conditional': {
			'Condition': function(){
			return monogatari.storage().object.car_1 + '';
			},
			0: 'y Ошибка. У тебя нет этой машины!!! Ты хочешь продать чужую машину?!',
			1: 'y Эту машину ты покупал за полную стоимость',
			2: 'y Эту машину ты покупал в кредит. Поэтому часть денег уйдет на закрытие кредита.',
			3: 'y Эту машину ты покупал в рассрочку. Поэтому часть денег уйдет на закрытие рассрочки.',
		}},
				
		{'Choice': {
				'Dialog': 'y Что будем делать? {{player.inventory.money}}',
				'Купить': {
					'Text': 'Продать',
					'Do': function(){
						if (monogatari.storage().object.car_1 == 1) {
							sell_object(1000000);
						} else {
							sell_object_in_installments(1000000/10);
						}
						monogatari.storage().object.car_1 = 0;
						update_n();
						},
				},
				'Отказаться': {
					'Text': 'Отказаться',
					'Do': 'jump garage',
				}
			}
		},
		
		
		'y Эту машину ты покупал ................',
		'jump Map',
	],

});