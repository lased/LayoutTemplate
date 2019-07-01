/**
 * 
 * Layout
 * 
 * <div class="slider" [data-name="first"]>
 *  [<div class="slider__button--[next, prev]" onclick="Slider.[next(), previous()]"></div>]
 *  <div class="slider__list">
 *   <div class="slider__item [slider__item--active]">Text</div>     
 *  </div>
 *  [<ul class="slider__order"></ul>]  
 * </div>
 * 
 */

window.Slider = (function () {
    var ClassName = {
        SLIDER: 'slider',
        ACTIVE: 'slider__item--active',
        LIST: 'slider__list',
        ITEM: 'slider__item',
        NEXT: 'slider__item--next',
        PREV: 'slider__item--prev',
        ORDER: 'slider__order',
        ORDER_ITEM: 'slider-order__item',
        ORDER_ITEM_ACTIVE: 'slider-order__item--active'
    };

    function goToSlide(num) {
        var self = this;
        var oldSlideIndex = self.currentSlide;
        var oldSlide = self.list[oldSlideIndex];
        var currentSlide;
        var orderClassName;
        var direction;

        if (self.slideDirection) return;

        self.slideDirection = true;
        self.currentSlide = (num + self.list.length) % self.list.length;
        currentSlide = self.list[self.currentSlide];

        if (num > oldSlideIndex) { // NEXT
            direction = 'left';
            orderClassName = ClassName.NEXT;
        } else { // PREVIOUS
            direction = 'right';
            orderClassName = ClassName.PREV;
        }

        currentSlide.classList.add(orderClassName);

        _transform({
            elementCurrent: currentSlide,
            elementPrevious: oldSlide,
            direction: direction,
            duration: self.duration
        }, () => {
            oldSlide.classList.remove(ClassName.ACTIVE);
            currentSlide.classList.remove(orderClassName);
            currentSlide.classList.add(ClassName.ACTIVE);
            self.slideDirection = false;
        });

        function _transform(options, callback) {
            var start = performance.now();

            requestAnimationFrame(function animate(time) {
                var timePassed = time - start;
                var percent = timePassed / options.duration * 100;

                if (timePassed >= options.duration) {
                    options.elementCurrent.style.transform = null;
                    options.elementPrevious.style.transform = null;
                    callback();

                    return;
                }

                options.elementPrevious.style.transform = "translateX(" + (options.direction == 'left' ? -percent : percent) + "%)";
                options.elementCurrent.style.transform = "translateX(" + (options.direction == 'left' ? 100 - percent : percent - 100) + "%)";

                if (timePassed < options.duration) {
                    requestAnimationFrame(animate);
                }

            });
        }
    }

    return {
        slider: null,
        list: null,
        currentSlide: 0,
        slideDirection: false,
        duration: 500,
        init: function (options) {
            options = options ? options : {};

            var sliderName = options.name ? '[data-name=' + options.name + ']' : '';
            var order;
            var activeItem;

            if (options.duration)
                this.duration = options.duration;

            this.slider = document.querySelector('.' + ClassName.SLIDER + sliderName);
            this.list = this.slider.querySelectorAll('.' + ClassName.ITEM);
            order = this.slider.querySelector('.' + ClassName.ORDER);
            activeItem = this.slider.querySelector('.' + ClassName.ITEM + '.' + ClassName.ACTIVE);
            this.list.forEach((element, index) => {
                if (activeItem === element)
                    this.currentSlide = index;
            });

            if (order)
                for (var i = 0; i < this.list.length; i++) {
                    var element = document.createElement('li');

                    element.innerHTML = i + 1;
                    element.classList.add(ClassName.ORDER_ITEM, i === this.currentSlide ? ClassName.ORDER_ITEM_ACTIVE : null);
                    element.setAttribute('onclick', 'Slider.toSlide(' + i + ')');
                    order.appendChild(element);
                }

            if (this.list.length && !activeItem) this.list[0].classList.add(ClassName.ACTIVE);
        },
        next: function () {
            goToSlide.call(this, this.currentSlide + 1);
        },
        previous: function () {
            goToSlide.call(this, this.currentSlide - 1);
        },
        toSlide: function (num) {
            if (this.slideDirection) return;

            var orderList = this.slider.querySelectorAll('.' + ClassName.ORDER + ' .' + ClassName.ORDER_ITEM);

            if (orderList) {
                orderList[num].classList.add(ClassName.ORDER_ITEM_ACTIVE);
                orderList[this.currentSlide].classList.remove(ClassName.ORDER_ITEM_ACTIVE);
            }

            goToSlide.call(this, num);
        }
    }
})()
