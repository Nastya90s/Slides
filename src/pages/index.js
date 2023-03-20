import '../styles/index.css';
import $ from 'jquery';
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//нажатие на табы
function tabSelected(activeTab = 0) {
    const tabs = document.querySelectorAll('.tab__item')

    tabs[activeTab].classList.add('tab__item_active')

    for (const tab of tabs) {
        tab.addEventListener('click', () => {
            clearActiveClasses()
            
            tab.classList.add('tab__item_active')
        });
    };

    function clearActiveClasses() {
        tabs.forEach(tab => {
            tab.classList.remove('tab__item_active')
        });
      };
    };

    tabSelected();



//подсчет количества
document.querySelectorAll('.card__amount_button-plus').forEach(number => {

    number.addEventListener('click', () => {
        ++number.parentElement.querySelector('input').value;
    });
});

document.querySelectorAll('.card__amount_button-minus').forEach(number => {
    
    number.addEventListener('click', () => {
        --number.parentElement.querySelector('input').value;

        if (number.parentElement.querySelector('input').value < 2) {
            number.parentElement.querySelector('input').value = 1
        }
    });
});


//слайдеры
$(document).ready(function(){
   $('.slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        prevArrow: '<button class="slider__button slider__button-prev" type="button"></button>',
        nextArrow: '<button class="slider__button slider__button-next" type="button"></button>',
 });
 //слайдер изображения внутри карточки
    $('.slider__image-container').slick({
        arrows: false,
        slidesToShow: 1,
        dots: true,
        dotsClass: 'dots-style',
    });
        $('.slider').slick('slickSetOption');
  });