import { throttle } from 'lodash';
import Vimeo from '@vimeo/player';

// Vimeo player
const iframe = document.querySelector('iframe#vimeo-player');
const player = new Vimeo(iframe);
// console.log(player);

const STORAGE_KEY = 'videoplayer-current-time';
player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}
