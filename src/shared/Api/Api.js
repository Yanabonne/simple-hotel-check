const BASE_URL = "http://engine.hotellook.com/api/v2";

const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

const addDays = (date, days) => {
  const checkIn = new Date(Date.parse(date) + 86400000 * days);
  return checkIn.toISOString().slice(0, 10);
};

export const getHotelsInfo = (city, date, days) => {
  return fetch(
    `${BASE_URL}/cache.json?location=${city}&currency=rub&checkIn=${date}&checkOut=${addDays(
      date,
      days
    )}`
  )
    .then(getResponse)
    .catch((err) => {
      console.log(err);
    });
};
