import axios from 'axios';

axios.defaults.headers['Authorization'] = JSON.parse(
  localStorage.getItem('info'),
).token;
// * >>>> Orders >>>
// 1*Выводит все заказы
// apiOrders.GetAllOrders().then(data => console.log(data.data));

// 2*Вывод ID новго заказа
// apiOrders.createNewOrder({"address": {
//   "city": "dsfs",
//   "country": "werwrewr",
//   "place": "rewrewr
//   "street": "rwerwer",
//   "block": "",
//   "building": "15",
//   "flat": "35"
// },
// "productList": [
//   "5f1021fbc7a15c871d735f48",
//    "5f154f156a4df46aa14dc526"]}
// ).then(data => console.log(data.data.id));

export default {
  async GetAllOrders() {
    try {
      const response = await axios.get(
        'https://goit-store.herokuapp.com/orders',
      );
      console.log(response);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  },

  async createNewOrder(newOrder) {
    try {
      const response = await axios.post(
        'https://goit-store.herokuapp.com/orders',
        newOrder,
      );
      console.log(response);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  },
};