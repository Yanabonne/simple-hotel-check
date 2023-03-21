const BASE_URL = "http://engine.hotellook.com/api/v2";

const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getHotelsInfo = (city, checkIn, days) => {
  return fetch(
    `${BASE_URL}/cache.json?location=${city}&currency=rub&checkIn=2023-03-22&checkOut=2023-03-24`
  )
    .then(getResponse)
    .catch((err) => {
      console.log(err);
    });
};
