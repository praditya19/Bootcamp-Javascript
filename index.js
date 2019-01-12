checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) console.log('ok');
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log('Licenci Berhasil');
    else console.log('points', points);
  }
}
