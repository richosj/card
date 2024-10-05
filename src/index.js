import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
//import 'bootstrap'; // Bootstrap JS
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules'; // Navigation 모듈 가져오기
import './styles.scss';

const swiper = new Swiper('.swiper-container', {
  modules: [Navigation], // Navigation 모듈 추가
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
