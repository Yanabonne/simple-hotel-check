export function convertDate(date) {
  date = date.split("-");
  const month = Number(date[1]);
  const day = Number(date[2]);
  let monthTransformed = "";

  switch (month) {
    case 1:
      monthTransformed = "января";
      break;
    case 2:
      monthTransformed = "февраля";
      break;
    case 3:
      monthTransformed = "марта";
      break;
    case 4:
      monthTransformed = "апреля";
      break;
    case 5:
      monthTransformed = "мая";
      break;
    case 6:
      monthTransformed = "июня";
      break;
    case 7:
      monthTransformed = "июля";
      break;
    case 8:
      monthTransformed = "августа";
      break;
    case 9:
      monthTransformed = "сентября";
      break;
    case 10:
      monthTransformed = "октября";
      break;
    case 11:
      monthTransformed = "ноября";
      break;
    case 12:
      monthTransformed = "декабря";
  }

  return day + " " + monthTransformed + " " + date[0];
}

export function transformDays(days) {
  if (days.endsWith("1")) {
    return "день";
  } else if (days.endsWith("2") || days.endsWith("3") || days.endsWith("4")) {
    return "дня";
  } else if (
    days.endsWith("5") ||
    days.endsWith("6") ||
    days.endsWith("7") ||
    days.endsWith("8") ||
    days.endsWith("9") ||
    days.endsWith("0")
  ) {
    return "дней";
  }
}
