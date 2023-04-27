/* global monogatari */


// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'Help2': {
		title: 'Help2',
		subtitle: 'Some useful Links2',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'Car1': {
		title: 'FORD FOCUS',
		subtitle: 'АПКК, 2017г.',
		body: `Стоимость: 1000000 <br>
		Стоимость в рассрочку: 2000000 <br>
		Стартовый взнос: 200000 <br>
		Пассивный доход при покупке сразу: +3 <br>
		Пассивный доход при покупке в кредит: +1 <br>
		`
	}
	
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}	
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({
	"universe": {"particles":{"number":{"value":0,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
});



// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	"Theme": "_ghost_-_Reverie_(small_theme).mp3"
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"Main": "start.jpg",
	"Classroom": "classroom.jpg",
	"Home": "home.png",
	"Room": "room.jpg",
	"Sea": "sea.jpg",
	"village_2": "village_2.jpg",
	"village_1": "village_1.jpg",
	"temple_2": "temple_2.jpg",
	"temple_1": "temple_1.jpg",
	"port_1": "port_1.jpg",
	"mountains_1": "mountains_1.jpg",
	"lake_2": "lake_2.jpg",
	"lake_1": "lake_1.jpg",
	"kazan_3": "kazan_3.jpg",
	"kazan_2": "kazan_2.jpg",
	"kazan_1": "kazan_1.jpg",
	"expo_1": "expo_1.jpg",
	"expo_2": "expo_2.jpg",
	"expo_3": "expo_3.jpg",
	"expo_4": "expo_4.jpg",
	"expo_5": "expo_5.jpg",
	"expo_6": "expo_6.jpg",
	"expo_7": "expo_7.jpg",
	"airport_2": "airport_2.jpg",
	"airport_1": "airport_1.jpg",
	"we_1": "11.png"	
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Тимур',
		color: '#5bcaff'
	},
	'p': {
		name: 'Артур',
		color: '#ff3951'
	},
	'e':{
		name: 'evelyn',
        color: '#00bfff', 
        directory: 'Evelyn', 
        sprites: {
            normal: 'normal.png',
            sad: 'hmph!.png',
            surprised: 'ngggg....png'
        }
	},
	'inv': {
		name: '',
	}
});


/*function jumpClassroomB(){
		;
}*/

function setPlayerHealth1(newNumber){
		document.getElementById('healthbar__meter--player-two').style.width = newNumber+"%";
}

function set_inner_peace_scale(newNumber){
        monogatari.storage().player.inventory.inner_peace_scale += newNumber; /*from -10 to 10*/
		if (monogatari.storage().player.inventory.inner_peace_scale > 10 ) monogatari.storage().player.inventory.inner_peace_scale = 10;
		if (monogatari.storage().player.inventory.inner_peace_scale < -10 ) monogatari.storage().player.inventory.inner_peace_scale = -10;
		if (monogatari.storage().player.inventory.inner_peace_scale < -5 ) 
			document.getElementById('healthbar__meter--player-one').style.backgroundColor = "#ff0000"; 
		if (monogatari.storage().player.inventory.inner_peace_scale > -5 ) 
			document.getElementById('healthbar__meter--player-one').style.backgroundColor = "#5ff371"; 
		
		document.getElementById("span_inner_peace_scale").innerHTML = monogatari.storage().player.inventory.inner_peace_scale;
		percent = (monogatari.storage().player.inventory.inner_peace_scale + 10)*100/20;
		document.getElementById('healthbar__meter--player-one').style.width = percent+"%";
		
}

function set_financial_freedom_scale(newNumber){
        monogatari.storage().player.inventory.financial_freedom_scale += newNumber;
		if (monogatari.storage().player.inventory.financial_freedom_scale > 10 ) monogatari.storage().player.inventory.financial_freedom_scale = 10;
		if (monogatari.storage().player.inventory.financial_freedom_scale < -10 ) monogatari.storage().player.inventory.financial_freedom_scale = -10;
		if (monogatari.storage().player.inventory.financial_freedom_scale < -5 ) 
			document.getElementById('healthbar__meter--player-two').style.backgroundColor = "#ff0000"; 
		if (monogatari.storage().player.inventory.financial_freedom_scale > -5 ) 
			document.getElementById('healthbar__meter--player-two').style.backgroundColor = "#625ff3"; 
		
		
		document.getElementById("span_financial_freedom_scale").innerHTML = monogatari.storage().player.inventory.financial_freedom_scale;
		percent = (monogatari.storage().player.inventory.financial_freedom_scale + 10)*100/20;
		document.getElementById('healthbar__meter--player-two').style.width = percent+"%";
}

function set_energy(newNumber){
        monogatari.storage().player.inventory.energy += newNumber;
		document.getElementById("span_energy").innerHTML = monogatari.storage().player.inventory.energy;
}

function set_money(newNumber){
        monogatari.storage().player.inventory.money += newNumber;
		document.getElementById("span_money").innerHTML = monogatari.storage().player.inventory.money;
}

function update_data(newNumber){
		monogatari.storage().player.inventory.data = newNumber;
}

function update_n(){
	set_inner_peace_scale(0);
	set_financial_freedom_scale(0);
	set_energy(0);
	set_money(0);
	closeGarage();
	closeMap();
	check_objects();
}

function check_objects(){
		int_9 = 0;
		if ( monogatari.storage().object.car_1 == 0) {
			document.getElementsByClassName('car_1')[0].style.display = 'none';
			int_9 += 1;
		} else {
			document.getElementsByClassName('car_1')[0].style.display = 'block';
		}
		
		if ( monogatari.storage().object.car_2 == 0) {
			document.getElementsByClassName('car_2')[0].style.display = 'none';
			int_9 += 1;
		} else {
			document.getElementsByClassName('car_2')[0].style.display = 'block';
		}
		
		if ( monogatari.storage().object.car_3 == 0) {
			document.getElementsByClassName('car_3')[0].style.display = 'none';
			int_9 += 1;
		} else {
			document.getElementsByClassName('car_3')[0].style.display = 'block';
		}
		
		if ( monogatari.storage().object.flat_1 == 0) {
			document.getElementsByClassName('flat_1')[0].style.display = 'none';
			int_9 += 1;
		} else {
			document.getElementsByClassName('flat_1')[0].style.display = 'block';
		}
		
		if ( monogatari.storage().object.flat_2 == 0) {
			document.getElementsByClassName('flat_2')[0].style.display = 'none';
			int_9 += 1;
		} else {
			document.getElementsByClassName('flat_2')[0].style.display = 'block';
		}
		
		if ( monogatari.storage().object.flat_3 == 0) {
			document.getElementsByClassName('flat_3')[0].style.display = 'none';
			int_9 += 1;
		} else {
			document.getElementsByClassName('flat_3')[0].style.display = 'block';
		}
		
		if ( monogatari.storage().object.company_1 == 0) {
			document.getElementsByClassName('company_1')[0].style.display = 'none';
			int_9 += 1;
		} else {
			document.getElementsByClassName('company_1')[0].style.display = 'block';
		}
		
		if ( monogatari.storage().object.company_2 == 0) {
			document.getElementsByClassName('company_2')[0].style.display = 'none';
			int_9 += 1;
		} else {
			document.getElementsByClassName('company_2')[0].style.display = 'block';
		}
		
		if ( monogatari.storage().object.company_3 == 0) {
			document.getElementsByClassName('company_3')[0].style.display = 'none';
			int_9 += 1;
		} else {
			document.getElementsByClassName('company_3')[0].style.display = 'block';
		}
		
		if ( int_9 == 0) {
			document.getElementsByClassName('map_0')[0].style.display = 'none';
		} else {
			document.getElementsByClassName('map_0')[0].style.display = 'none';
		}
		
		int_9 == 0;
}

function buy_object(price){
		monogatari.storage().player.inventory.money -= price;
		monogatari.storage().player.inventory.financial_freedom_scale += 3;
		monogatari.storage().player.inventory.inner_peace_scale += 2;
		update_n();
		
}

function buy_in_credit(price){
		monogatari.storage().player.inventory.money -= price/10;
		monogatari.storage().player.inventory.financial_freedom_scale += 1;
		monogatari.storage().player.inventory.inner_peace_scale -= 1;
		update_n();
}

function buy_in_installments(price){
		monogatari.storage().player.inventory.money -= price/10;
		monogatari.storage().player.inventory.financial_freedom_scale += 1;
		monogatari.storage().player.inventory.inner_peace_scale += 1;
		update_n();
}

function sell_object(price){
		monogatari.storage().player.inventory.money += price;
		monogatari.storage().player.inventory.financial_freedom_scale -= 3;
		update_n();
		
}


function sell_object_in_installments(price){
		monogatari.storage().player.inventory.money += price/10;
		monogatari.storage().player.inventory.financial_freedom_scale -= 1;
		update_n();
}

function sell_object_in_credit(price){
		monogatari.storage().player.inventory.money += price/10;
		monogatari.storage().player.inventory.financial_freedom_scale -= 1;
		update_n();
}



/*
function(){set_inner_peace_scale(10)},
function(){set_financial_freedom_scale(10)},
function(){set_energy(10)},
function(){set_money(10)},

energy: 150,  
        money: 25000
        inner_peace_scale:3,
		financial_freedom_scale:3,*/
		


/*function setPlayerHealth(newNumber){
        monogatari.storage().player.inventory.life = newNumber;
        document.getElementById("labels-list").setAttribute("data-value",monogatari.storage().player.inventory.life) // change the value
}



function addPlayerHealth(newNumber){
        monogatari.storage().player.inventory.life += newNumber;
        document.getElementById("labels-list").setAttribute("data-value",monogatari.storage().player.inventory.life) // add to the value
}


function removePlayerHealth(newNumber){
        monogatari.storage().player.inventory.life -= newNumber;
        document.getElementById("labels-list").setAttribute("data-value",monogatari.storage().player.inventory.life)  // substract to the value
}*/

function removeElementsByClassAnimated(){
    var col_wrapper = document.getElementsByTagName("choice-container");
	col_wrapper[0].parentNode.removeChild(col_wrapper[0]);
}


/*
function showfire(){
    document.getElementById("labels-list").style.display="block"
}
function hidefire(){
    document.getElementById("labels-list").style.display="none"
}*/


function hidebar(){
    document.getElementsByClassName('input-range')[0].style.visibility = 'hidden';
}

function openMap(){
    document.getElementsByClassName('input-range-n')[0].style.display = 'block';
}

function closeMap(){
    document.getElementsByClassName('input-range-n')[0].style.display = 'none';
}

function openGarage(){
    document.getElementsByClassName('input-range-t')[0].style.display = 'block';
}

function closeGarage(){
    document.getElementsByClassName('input-range-t')[0].style.display = 'none';
}

function clickClear() {
  document.getElementById("myClear").click();
}

