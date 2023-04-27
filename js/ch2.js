monogatari.script ({
	'expo': [
		function(){clickClear()},
		function(){update_n()},
		'show scene expo_6 with fadeIn',
		'y Добро пожаловать на Казань Форум 2023!',
		'y Здесь вы сможете посетить Russia Halal Expo, Послушать лекции и завести полезные знакомства в Халяль сфере.',
		{
			'Choice': {
				'Dialog': 'y С чего начнем?',
				'Регистрация': {
					'Text': 'Регистрация',
					'Do': 'show scene expo_7 with fadeIn'
				},
				'Халяль Ехро': {
					'Text': 'Халяль Ехро',
					'Do': 'show scene expo_1 with fadeIn'
				},
				'Деловая программа': {
					'Text': 'Деловая программа',
					'Do': 'show scene expo_5 with fadeIn'
				},
				'Переговорные': {
					'Text': 'Переговорные',
					'Do': 'show scene expo_4 with fadeIn'
				}
			}
		},	
		'jump expo',
	],

});