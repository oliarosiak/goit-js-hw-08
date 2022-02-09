import Player from '@vimeo/player';
let throttle = require('lodash.throttle');
// або import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playerTimeUpdate = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

player.on('timeupdate', throttle(playerTimeUpdate, 1000));

const videoStopTime = localStorage.getItem("videoplayer-current-time");
// player.setCurrentTime(videoStopTime);



//В документації приклад такий був:
player.setCurrentTime(videoStopTime).then(function(seconds) {
    console.log(seconds);    
}).catch(function (error) {
    console.log(error.name);
});


