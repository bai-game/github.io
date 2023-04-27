'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:
	  //monogatari.registerComponent (FireCounterModal);

$_ready (() => {
	// 2. Inside the $_ready function:

  
  
  class MyCustomElement extends Monogatari.Component {
    render () {
     return `
	<div class="header">
		<!--<a href="#default" class="logo">CompanyLogo</a>-->
		
		
		<!--1-->
		
		<div class="header-center">
			<div class="l-split__item l-split__item--small2">
				<div class="ko">
					<svg class="svg-icon1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					      <!--<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						   <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path>
						   <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
						   <path d="M9.7 17l4.6 0"></path>
						</svg>-->
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					   <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z"></path>
					   <path d="M10 10c-.5 -1 -2.5 -1 -3 0"></path>
					   <path d="M17 10c-.5 -1 -2.5 -1 -3 0"></path>
					   <path d="M14.5 15a3.5 3.5 0 0 1 -5 0"></path>
					</svg>
					
				</div>
			</div>
			
			<div class="l-split__item"> 
				<div class="healthbar">
					<span id="span_inner_peace_scale">0</span>
					<div class="healthbar__meter healthbar__meter--player-one" id="healthbar__meter--player-one">
					
					</div>
					
				</div>
			</div>
			
			<div class="l-split__item l-split__item--small2">
				<div class="ko">
					<svg class="svg-icon1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						   <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
						</svg>
					
				</div>
			</div>
			
			
			<div class="l-split__item l-split__item--small3">
				<div class="ko">
					<span id="span_energy">150</span>
				</div>
			</div>
			
			
			
		</div>	
			
		<!--2-->	
			
		<div class="header-center">
			<div class="l-split__item l-split__item--small2">
				<div class="ko">
					<svg class="svg-icon1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						   <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z"></path>
						   <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4"></path>
						   <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z"></path>
						   <path d="M3 6v10c0 .888 .772 1.45 2 2"></path>
						   <path d="M3 11c0 .888 .772 1.45 2 2"></path>
						</svg>
					
				</div>
			</div>
			
			
			<div class="l-split__item">
				<div class="healthbar">
					<span id="span_financial_freedom_scale">0</span>
					<div class="healthbar__meter healthbar__meter--player-two"  id="healthbar__meter--player-two"></div>
					
				</div>
			</div>
			
			
			<div class="l-split__item l-split__item--small2">
				<div class="ko">
					<svg class="svg-icon1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					   <path d="M8 19v-14h6a3 3 0 0 1 0 6h-8"></path>
					   <path d="M14 15h-8"></path>
					</svg>
					
				</div>
			</div>
			
			<div class="l-split__item l-split__item--small3">
				<div class="ko">
					<span id="span_money">25000</span>
				</div>
			</div>
			
			
			
		</div>	
			
		<!--3-->
			
		<div class="header-right">
			
			<!--<button id="myClear" data-do="clear" data-choice="Clear">Clear</button>
			<button data-action="jump" data-jump="Classroom">Classroom2</button>-->
			
			<div class="l-split__item l-split__item--small4">
				<div class="ko" data-action="jump" data-jump="Map">
					<svg class="svg-icon2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					   <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
					   <path d="M9 4v13"></path>
					   <path d="M15 7v5.5"></path>
					   <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path>
					   <path d="M19 18v.01"></path>
					</svg>
					
				</div>
			</div>
			
			<div class="l-split__item l-split__item--small4">
				<div class="ko" data-action="jump" data-jump="garage">
					<svg class="svg-icon2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					   <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"></path>
					   <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"></path>
					</svg>
					
				</div>
			</div>
			
			<div class="l-split__item l-split__item--small4">
				<div class="ko" data-action="jump" data-jump="Call">
					<svg class="svg-icon2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					   <path d="M8 9h8"></path>
					   <path d="M8 13h6"></path>
					   <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"></path>
					</svg>
					
				</div>
			</div>
			
			<div class="l-split__item l-split__item--small4">
				<div class="ko" id="myClear" data-do="clear" data-choice="Clear"></div>
			</div>
		</div>
	</div>
  
	 `;   
    }
}

MyCustomElement.tag = 'my-custom-element';

monogatari.registerComponent (MyCustomElement);


  class MyDivElement extends Monogatari.Component {
    render () {
     return `
		<div class="input-range-n">
				<!--<div style="width: 100px; height: 100px; background: red; color: white;">Hello</div>-->
		

		
			<div id="image-map">	   
			   <img width="900" height="475" src="assets/scenes/map_new.png" alt="Our Locations">	
				
				<div class="tooltip2 airport" data-action="jump" data-jump="airport" >
				  <span class="tooltiptext2">Аэропорт</span>
				</div>
				
				<div class="tooltip2 expo" data-action="jump" data-jump="expo" >
				  <span class="tooltiptext2">Казань Экспо</span>
				</div>
				
				<div class="tooltip2 qul" data-action="jump" data-jump="qul" >
				  <span class="tooltiptext2">Кул-Шариф</span>
				</div>
				
				<div class="tooltip2 syuyumbike" data-action="jump" data-jump="syuyumbike" >
				  <span class="tooltiptext2">Сөембикә манарасы</span>
				</div>
				
				<div class="tooltip2 kremlin" data-action="jump" data-jump="kremlin" >
				  <span class="tooltiptext2">Казанский кремль</span>
				</div>
				
				<div class="tooltip2 chasha" data-action="jump" data-jump="chasha" >
				  <span class="tooltiptext2">Центр семьи Казан</span>
				</div>
				
				<div class="tooltip2 village" data-action="jump" data-jump="village" >
				  <span class="tooltiptext2">Деревня</span>
				</div>
				
				<div class="tooltip2 port" data-action="jump" data-jump="port" >
				  <span class="tooltiptext2">Порт</span>
				</div>
				
				<div class="tooltip2 beach" data-action="jump" data-jump="beach" >
				  <span class="tooltiptext2">Пляж</span>
				</div>
				
				<div class="tooltip2 mountains" data-action="jump" data-jump="mountains" >
				  <span class="tooltiptext2">Горы</span>
				</div>
				
				<div class="tooltip2 zoo" data-action="jump" data-jump="zoo" >
				  <span class="tooltiptext2">Зоопарк</span>
				</div>
				
				<div class="tooltip2 hospital" data-action="jump" data-jump="hospital" >
				  <span class="tooltiptext2">Больница</span>
				</div>
				
				<div class="tooltip2 sanatorium" data-action="jump" data-jump="sanatorium" >
				  <span class="tooltiptext2">Санаторий</span>
				</div>	
				
				<div class="tooltip2 market" data-action="jump" data-jump="market" >
				  <span class="tooltiptext2">Рынок</span>
				</div>	
				
				<div class="tooltip2 ship" data-action="jump" data-jump="ship" >
				  <span class="tooltiptext2">Корабль</span>
				</div>	
				
			</div>
		</div>
	 
	 `;   
    }
}

MyDivElement.tag = 'my-div-element';

monogatari.registerComponent (MyDivElement);


class MyDivGarage extends Monogatari.Component {
    render () {
     return `
		<div class="input-range-t">
		
			<div class="garage1">	   

			
				<div class="garage map_0" >Здесь пусто</div>

				<div class="garage car_1" data-action="jump" data-jump="car_1" >Ford Focus III I 2017 г. с автоматической коробкой передач</div>
				
				<div class="garage car_2" data-action="jump" data-jump="car_2" >Volkswagen Polo 2017 г. с автоматической коробкой передач</div>
				
				<div class="garage car_3" data-action="jump" data-jump="car_2" >Audi Q5 I (8R) 2013 г. с автоматической коробкой передач</div>
				
				<div class="garage flat_1" data-action="jump" data-jump="car_1" >1-комнатая квартира</div>
				
				<div class="garage flat_2" data-action="jump" data-jump="car_2" >2-комнатная квартира</div>
				
				<div class="garage flat_3" data-action="jump" data-jump="car_2" >2-комнатная квартира Ак Барс</div>
				
				<div class="garage company_1" data-action="jump" data-jump="car_1" >Организация по исламскому страхованию "Така́фул плюс"</div>
				
				<div class="garage company_2" data-action="jump" data-jump="car_2" >Фирменный кондитерский магазин "Бал"</div>
				
				<div class="garage company_3" data-action="jump" data-jump="car_2" >Свиноферма Пигги</div>
				
				<div class="garage map_1" data-action="jump" data-jump="Map" >Закрыть
				</div>
								
			</div>
		</div>
	 
	 `;   
    }
}

MyDivGarage.tag = 'my-div-garage';

monogatari.registerComponent (MyDivGarage);





	
	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:
		monogatari.component ('quick-menu').removeButton ('Back');
		monogatari.component ('quick-menu').removeButton ('Hide');
		monogatari.component ('quick-menu').removeButton ('Log');
		monogatari.component ('quick-menu').removeButton ('AutoPlay');


	});
});
