import '../../sass/main.scss';
// import '../../sass/sections/information.scss';
import { refs } from '../components/refs';

function markupInformation() {
  let markup = `
  <section class="information container">
    <ul class="information__icon-list">
      <li class="information__icon-item">
        <img
          src="./images/information/delivery.svg"
          alt="credit card icon"
          width="80"
        />
      </li>
      <li class="information__icon-item">
        <img
          src="../../images/information/payment.svg"
          alt="credit card icon"
          width="80"
        />
      </li>
      <li class="information__icon-item">
        <img
          src="../../images/information/conditions.svg"
          alt="icon 24/7"
          width="80"
        />
      </li>
      <li class="information__icon-item">
        <img
          src="../../images/information/return.svg"
          alt="icon discount"
          width="80"
        />
      </li>
    </ul>

    <ul class="information__title-list">
      <li class="information__title-item information__wrapper-item">
        <span class="information__title">
          Доставка
        </span>
      </li>
      <li class="information__title-item information__wrapper-item">
        <span class="information__title">
          Оплата
        </span>
      </li>
      <li class="information__title-item information__wrapper-item">
        <span class="information__title">
          В2В Условия и предложения
        </span>
      </li>
      <li class="information__title-item information__wrapper-item">
        <span class="information__title">
          Обмен или возврат товара
        </span>
      </li>
    </ul>

    <ul class="information__description-list">
      <li class="information__description-item information__wrapper-item">
        <p class="information__description">
          Мы предоставляем бесплатную доставку в отделение "Нова Пошта"
          или "Укрпошта" для всех заказов на сумму от 1000 грн. Доставка
          заказов на сумму менее 1000 грн оплачивается покупателем по
          тарифам почты.
        </p>
      </li>
      <li class="information__description-item information__wrapper-item">
        <p class="information__description">
          Наличный расчет, Безналичный расчет, Online оплата LiqPay
        </p>
      </li>
      <li class="information__description-item information__wrapper-item">
        <p class="information__description">
          Основным направлением деятельности нашей компании является
          оптовая и розничная торговля женской, мужской и детской обувью.
        </p>
      </li>
      <li class="information__description-item information__wrapper-item">
        <p class="information__description">
          Весь товар можно вернуть или обменять в течение 14 дней с
          момента получения заказа при условии, что он не был в
          использовании.
        </p>
      </li>
    </ul>
  </section>
  `;
  refs.sections.innerHTML = markup;
  return markup;
}

export default markupInformation;