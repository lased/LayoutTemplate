# Simple slider
## API
| Function | Description |
|:----:|:----:|
| `Slider.init(options: SlideOptions)` | Initialize slider with parameters. |
| `Slider.next()` | Go to the next slide. |
| `Slider.prev()` | Go to the previous slide. |
| `Slider.toSlide(num: Number)` | Go to the slide number `num`. |
## SlideOptions
| Name | Description |
|:----:|:----:|
| `name: String` | Initialize slider with `data-name="name"`. |
| `duration: Number` | Animation duration. Default `500 ms`.|
| `active: Number` | Make the index `active` slider active. Default `0`.  |
## Examples
### Example 1
#### JS
```js
Slider.init({
    name: 'first',
    active: 2,
    duration: 1000
});
```
#### HTML
```html
<div class="slider" data-name="first">
    <div class="slider__button--next" onclick="Slider.next()"></div>
    <div class="slider__button--prev" onclick="Slider.prev()"></div>
    <div class="slider__list">
        <div class="slider__item">Slide 1</div> 
        <div class="slider__item">Slide 2</div>  
        <div class="slider__item">Slide 3</div>  
    </div>
    <ul class="slider__order"></ul>
</div>
```
### Example 2
#### JS
```js
Slider.init();
```
#### HTML
```html
<div class="slider">
    <div class="slider__list">
        <div class="slider__item">Slide 1</div> 
        <div class="slider__item slider__item--active">Slide 2</div>  
        <div class="slider__item">Slide 3</div>  
    </div>
    <ul class="slider__order"></ul>
</div>
```