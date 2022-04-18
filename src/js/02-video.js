import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// const player = new Vimeo.Player(iframe);
const VIDEOPLAYER_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay), 1000);

function onPlay(data) {
  const dataCurrentTime = JSON.stringify(data);
  localStorage.setItem(VIDEOPLAYER_KEY, dataCurrentTime);
}

function getDataTime() {
  const saveData = localStorage.getItem(VIDEOPLAYER_KEY);
  const parstData = JSON.parse(saveData);

  if (parstData) {
    return parstData.seconds;
  }
}

player
  .setCurrentTime(getDataTime())
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
