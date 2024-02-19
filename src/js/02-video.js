import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// console.log(throttle)
const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const a = e => {
  console.log(e);
  console.log(e.seconds);
  localStorage.setItem('videoplayer-current-time', e.seconds);
  console.log(localStorage.getItem('videoplayer-current-time'));
  console.log('played the video!');
};

player.on('timeupdate', throttle(a, 1000));

a();

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
