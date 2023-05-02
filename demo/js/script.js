"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
    "Help": {
        "Title": "Help",
        "Subtitle": "Some useful Links",
        "Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
    }
};

// Define the notifications used in the game
let notifications = {
    "Welcome": {
        title: "Welcome",
        body: "This is the Monogatari VN Engine",
        icon: ""
    }
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
    "t": "T.jpg"
};

// Define the Characters
const characters = {
    "d": {
        "Name": "Dylan",
        "Directory": "Dylan",
        "Color": "rgb(118, 125, 184)",

        "Side": {
            "angry":"Angry.png",
            "smile": "Smile.png",
            "grin": "Grin.png",
            "neutral": "Neutral.png",
            "sad": "Sad.png",
            "shock": "Shock.png"

        }
    },
    
    "k": {
        "Name": "Kaine",
        "Directory": "Kaine",
        "Color": "#7db876",

        "Images": {
            "angry":"Angry.png",
            "smile": "Smile.png",
            "grin": "Grin.png",
            "neutral": "Neutral.png",
            "sad": "Sad.png",
            "shock": "Shock.png"

        }
    },

};

let script = {
    // The game starts here.
    "Start": [
        "scene t with fadeIn",

        /*"notify Welcome",
		{
			"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
					return true;
				},
				"Warning": "You must enter a name!"
			}
		},*/
        "show k smile right with fadeIn",
		"k:neutral Hey there! It's so good to see you again!",
        "k Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Incididunt ut.",
		"hide k",
		
		"show d smile with fadeIn",
		
        "d:neutral Hey there! It's so good to see you again!",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Incididunt ut.",

        {
            "Choice": {
                "Dialog": "d:sl Have you already read some documentation?",
                "Yes": {
                    "Text": "Yes",
                    "Do": "jump Yes"
                },
                "No": {
                    "Text": "No",
                    "Do": "jump No"
                }
            }
        }
    ],

    "Yes": [

        "d That's awesome!",
        "d Then you are ready to go ahead and create an amazing Game!",
        "d I can't wait to see what story you'll tell!",
        "end"
    ],

    "No": [

        "d You can do it now.",

        "display message Help",

        "d Go ahead and create an amazing Game!",
        "d I can't wait to see what story you'll tell!",
        "end"
    ]
};
