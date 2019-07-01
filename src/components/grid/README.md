# Simple CSS Grid (Flex)
## Example config 
[_variables.scss](https://github.com/lased/LayoutTemplate/blob/master/src/components/grid/_variables.scss)
```scss
// Set the number of columns you want to use on your layout.
$grid-columns: 12;
// Set breakpoints 
$breakpoints: (
    'xs': ('max': '599px'),
    'sm': ('min': '600px', 'max': '1023px'),
    'md': ('min': '1024px', 'max': '1439px'),
    'lg': ('min': '1440px')
);
```
### Responsive
Modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.
````html
<div class="row">
    <div class="col-6 col-md-3 col-xs-12">.col-6  .col-md-3 .col-xs-12</div>
    <div class="col-6 col-md col-xs-12">.col-6  .col-md (auto width) .col-xs-12</div>
    <div class="col-6 col-md-3 col-xs-12">.col-6  .col-md-3 .col-xs-12</div>
</div>
````
#### OR
````html
<div class="row column-xs">
    <div class="col">.col</div>
    <div class="col">.col</div>
    <div class="col">.col</div>
</div>
````
### Offset a column
`.offset-`
````html
<div class="row">
    <div class="col-3 col-offset-3">.col-3 .col-offset-3</div>
    <div class="col-3 col-offset-2">.col-3 .col-offset-2</div>
</div>
````
### Alignment
`.start-`
````html
<div class="row start">
    <div class="col-3">.col-3</div>
</div>
````
`.center-`
````html
<div class="row center">
    <div class="col-3">.col-3</div>
</div>
````
`.end-`
````html
<div class="row end">
    <div class="col-3">.col-3</div>
</div>
````
`.top-`
````html
<div class="row top">
    <div class="col-3">.col-3</div>
</div>
````
`.middle-`
````html
<div class="row middle">
    <div class="col-3">.col-3</div>
</div>
````
`.bottom-`
````html
<div class="row bottom">
    <div class="col-3">.col-3</div>
</div>
````
`.self-start-`
````html
<div class="row self-start">
    <div class="col-3">.col-3</div>
</div>
````
`.self-center-`
````html
<div class="row self-center">
    <div class="col-3">.col-3</div>
</div>
````
`.self-end-`
````html
<div class="row self-end">
    <div class="col-3">.col-3</div>
</div>
````
### Distribution
`.around-`
````html
<div class="row around">
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
</div>
````
`.between-`
````html
<div class="row between">
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
</div>
````
### Reordering
`.first-`
````html
<div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <b class="col first">3</b>
</div>
````
`.last-`
````html
<div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <b class="col last">3</b>
</div>
````
