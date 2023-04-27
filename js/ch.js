
//monogatari.component("main-menu").addButton({string:"Credits2",data:{action:"open-screen",open:"credits"}});

//monogatari.component ('quick-menu').removeButton ('Hide');

monogatari.script ({


// SCRIPT STARTS HERE:

        'Start': [
		
		//function(){showfire()},
		//function(){setPlayerHealth(3)},
		function(){set_inner_peace_scale(0)},
		function(){set_financial_freedom_scale(0)},
		function(){set_energy(0)},
		function(){set_money(0)},
				
		
		'show scene airport_2 with fadeIn',
		{
			'Choice': {
				'Dialog': 'y Салям, друг! Сто лет сто зим, рад тебя видеть..',
				'Обнять друга': {
					'Text': 'Обнять друга'
				},
				'Достать подарок': {
					'Text': 'Достать подарок'
				}
			}
		},
		'p Взаимно, Тимур. Помнишь, как ты провожал меня 5 лет назад на этом же месте. Столько всего произошло за это время. Смотри, у меня кое-что есть для тебя!',
		'p Думаю, тебе понравится!',
		'y Турка? Хаха, турка из Турции – символично! Помнишь, как в школе на перемене заваривали кофе 3 в 1. По ночам рубились в танчики и потом засыпали на уроках. Ой, чет меня не туда понесло…',
		'p Ха-ха, да помню, было дело!',
		'y Кстати, слышал, ты открыл свое предприятие в Стамбуле. Планируешь выходить на Российский рынок?',
		'p Подбросишь меня до гостиницы? По дороге расскажу о своих планах. ',
		{
			'Choice': {
				'Dialog': 'y Конечно, еще спрашиваешь!',
				'Cесть в автомобиль ': {
					'Text': 'Cесть в автомобиль'
				},
			}
		},
		
		'p Ты спрашивал о бизнесе. Да, мы с университетскими ребятами открыли свою кофейню в районе Фатих, в Стамбуле. Вот недавно дело начало приносить прибыль хотим расширяться и подумываем начать самостоятельно обжаривать кофейные зерна и продавать их в Россию. Теперь мне нужны деловые связи, чтобы прощупать почву для нового бизнеса.',
		'y Ты по адресу, друг! У нас в Казани как раз начинается Казань Форум 2023. Отличная возможность для тебя познакомиться с местным деловым сообществом, завести полезные знакомства и посетить интересные выставки и лекции об экономическом сотрудничестве между странами.',
		{
			'Choice': {
				'Dialog': 'p О! Здорово, думаю, это как раз то, что мне нужно. Когда начало ',
				'Посетить Казань Форум 2023': {
					'Text': 'Посетить Казань Форум 2023',
					'Do': 'jump expo'
				},
				'Сначала посмотреть город': {
					'Text': 'Сначала посмотреть город',
					'Do': 'jump Map'
				}
			}
		}
	],
	
	'Topics': [
		function(){set_inner_peace_scale(4)},
		function(){set_financial_freedom_scale(-4)},
		function(){set_energy(-300)},
		function(){set_money(100)},
		'jump Start',
	],
	
	'Topics2': [
		function(){set_inner_peace_scale(-4)},
		function(){set_financial_freedom_scale(4)},
		function(){set_energy(300)},
		function(){set_money(-1000)},
		'jump Start',
	],
	

	
	'Map': [
		function(){clickClear()},
		function(){update_n()},
		function(){openMap()},
		'show scene we_1',
		'inv we_1'
	],
	
	'garage': [	
		function(){clickClear()},
		function(){update_n()},
		function(){openGarage()},
		'show scene we_1',
		'inv we_1'
	],
	
	'Call': [
		function(){clickClear()},
		function(){update_n()},

		'show scene Classroom',
		{
			'Choice': {
				'Dialog': 'Кому будем звонить?',
				'Мама': {
					'Text': 'Мама',
					'Do': 'jump mother'
				},
				'Папа': {
					'Text': 'Папа',
					'Do': 'jump father'
				},
				'Тренер': {
					'Text': 'Тренер',
					'Do': 'trainer'
				},
				'Карта': {
					'Text': 'Карта',
					'Do': 'jump Map'
				}
			}
		}
	],
	
	'village': [
		function(){clickClear()},
		function(){update_n()},
		'show scene village_2 with fadeIn',
		'y Сэлам! Друг детства. Как только узнал, что ты приехал, сразу прибежал к вам!',
		'Скоро у нас начинаются посевы. Нужна спец техника.',
		{
			'Choice': {
				'Dialog': 'y Поможешь купить ее халяльно?',
				'Помочь': {
					'Text': 'Помочь',
					'Do': 'next'
				},
				'Отказаться': {
					'Text': 'Отказаться',
					'Do': 'next'
				}
			}
		},
		
		
		'show message Car1',
		{
			'Choice': {
				'Dialog': 'y Что будем делать? {{player.inventory.money}}',
				'Купить': {
					'Text': 'Купить',
					'Do': function(){
						buy_object(1000000);
						monogatari.storage().object.car_1 = 1;
						},
					"Condition": function () {
						if( monogatari.storage().player.inventory.money > 0) {
							return true;
						} else {
							return false;
						}
					}
				},
				'Купить в кредит': {
					'Text': 'Купить в кредит',
					'Do': function(){
						buy_in_credit(1000000/10);
						monogatari.storage().object.car_1 = 2;
						},
				},
				'Купить в рассрочку': {
					'Text': 'Купить в рассрочку',
					'Do': function(){
						buy_in_installments(1000000/10);
						monogatari.storage().object.car_1 = 3;
						},
				},
				'Отказаться': {
					'Text': 'Отказаться',
					'Do': 'next',
				}
			}
		},
		
		{"Conditional": {
				"Condition": function () {
					return true;
				},
				"True": 'y Купил',
				"False": 'y Отказался'
			}
		},
		'y Что будем делать?',
		'jump village',
		
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
	],
	
	'market': [
		function(){clickClear()},
		function(){update_n()},
		'show scene village_2 with fadeIn',
		'y Car_1: {{object.car_1}}',
		
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'None': {
					'Text': 'None',
					'Do': function(){
						monogatari.storage().object.car_1 = 0;
						},
				},
				'Block': {
					'Text': 'Block',
					'Do': function(){
						monogatari.storage().object.car_1 = 1;
						},
				}
			}
		},
		'jump garage',
	],
	
	
	'Classroom': [
		function(){clickClear()},
		function(){update_n()},
		'show scene Classroom',
		'y ClassroomClassroomClassroomClassroom!',
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'Topics': {
					'Text': 'Topics',
					'Do': 'jump Topics'
				},
				'Map': {
					'Text': 'Map',
					'Do': 'jump Map'
				},
				'Clear': {
					'Text': 'Clear',
					'Do': 'clear'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	
	],
		
	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'show message Help',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
		
		
		/////////////

});