function date() {
  let sec = Math.round(Date.now() / 1000) % 60;
  let min = Math.floor(Math.round(Date.now() / 1000) / 60) % 60;
  let hour = Math.floor(1 + Math.round(Date.now() / 1000) / 60 / 60) % 24;
  let day = Math.ceil(Math.round(1.47 + Date.now() / 1000 / 60 / 60) / 24);
  let month = 0;
  let year = 1970;
  while (day > 365) {
    if (year % 4 === 0) {
      day -= 366;
      year += 1;
    } else {
      day -= 365;
      year += 1;
    }
  }
  const qwe = Math.floor(day / 31);
  switch (0) {
    case Math.floor(day / 31):
      month = 1;
      break;
    case Math.floor(day / (31 + 28)):
      month = 2;
      break;
    case Math.floor(day / (31 + 28 + 31)):
      month = 3;
      break;
    case Math.floor(day / (31 + 28 + 31 + 30)):
      month = 4;
      break;
    case Math.floor(day / (31 + 28 + 31 + 30 + 31)):
      month = 5;
      break;
    case Math.floor(day / (31 + 28 + 31 + 30 + 31 + 30)):
      month = 6;
      break;
    case Math.floor(day / (31 + 28 + 31 + 30 + 31 + 30 + 31)):
      month = 7;
      break;
    case Math.floor(day / (31 + 28 + 31 + 30 + 31 + 30 + 31 * 2)):
      month = 8;
      break;
    case Math.floor(day / (31 + 28 + 31 + 30 + 31 + 30 + 31 * 2 + 30)):
      month = 9;
      break;
    case Math.floor(day / (31 + 28 + 31 + 30 + 31 + 30 + 31 * 2 + 30 + 31)):
      month = 10;
      break;
    case Math.floor(
      day / (31 + 28 + 31 + 30 + 31 + 30 + 31 * 2 + 30 + 31 + 30)
    ):
      month = 11;
      break;
    case Math.floor(
      day / (31 + 28 + 31 + 30 + 31 + 30 + 31 * 2 + 30 + 31 + 30 + 31)
    ):
      month = 12;
      break;
  }
  sec = String(sec).padStart(2, '0');
  min = String(min).padStart(2, '0');
  hour = String(hour).padStart(2, '0');
  month = String(month).padStart(2, '0');
  const date = `${year}.${month}.${day} - ${hour}:${min}:${sec}`;
  console.log('date: ', date);
}
date();
