## 1. What is the Box model in CSS? Which CSS properties are a part of it?
The box model is a model that wraps every HTML element. It consists of margin, border, padding and content. 

## 2. What are the advantages of using CSS?
- Better user experience. CSS enables you to create web apps with a pleasing look and also they are easier to interact with.
- CSS enables you to use less code. You can create a style for a certain class or tag and use that style on multiple HTML elements.
- With CSS it's easy to format the pages with the same CSS style sheet. You don't need to change a particular page's style.

## 3. What are the limitations of CSS?
- Sometimes the same CSS code won't be compatible across all browsers. Developers need to test for compatibility in different browsers.
- CSS can't perform logical operations such as: if, while, and for.
- CSS cannot interact with databases.

## 4. What are the different types of Selectors in CSS?
- HTML element selector(tag), ex.: `p`, `div`, `span`, `button`...
- Element id, ex.: `#btn`
- Element class, ex.: `.btn`
- Universal selector (selects all the elements), ex.: `div *`, `*`, `.btn *` 
- Grouping selector (elements with the same style), ex.: `div, p, span, .btn {}`

## 5. What is a CSS Preprocessor? What are Sass, Less, and Stylus? Why do people use them?
A CSS Preprocessor adds logic to the CSS. It enables you to use powerful features such as nesting and mixins. Mixins can be useful when writing a similar CSS code with different values. We can also use logic such as `@if`, `@for`, `@while`, and `@each` by using CSS Preprocessors. Sass, Less and Stylus are CSS Preprocessors, they share basically the same functionality. People use them to simplify their code and make it more readable. 

## 6. What is the difference between inline, inline-block, and block?
- `inline` ~ the element does not start in a new line and occupies only the width and height that it needs. You can't set width and height for such elements (ex. elements: span, a, img).
- `inline-block` ~ is the same as inline, but you can set the height and width.
- `block` ~ the opposite. It starts in a new line and occupies the entire width of the parent element. You can set the width and height.

## 7. What are Pseudo elements and Pseudo classes?
- Pseudo-classes enables you to add a style for the particular state of the element, ex.: `:hover`, `:active`, `:first-child`.
- Pseudo-elements act as if you added a whole new element, ex.: you can add some content before and after the element by using `::after` or `::before` pseudo elements.

## 8. Does margin-top or margin-bottom have an effect on inline elements?
It does not, because inline elements flow with the content on the page. However, you can set the horizontal margins.

## 9. What property is used for changing the font face?
`font-family`, `src`

## 10. What are the differences between adaptive design and responsive design?
Adaptive design changes the layout, depending on the screen size. On the other hand, responsive design does not change the layout. It will adjust its content for different screeen sizes.

## 11. How are the CSS selectors matched against the elements by the browser?
They are matched from right to left, ex.: ul li a {color: red;} 1 - `a`, 2 - `li`, 3 - `ul`

## 12. How is border-box different from the content-box?
So basically, `border-box` remains the width, and in case we are adding the border or padding to our element, the width remains the same. With the `content-box` borders and padding are added to the element's width. In conclusion, when using `border-box`, if we added padding and border, the total width and height of the element are not affected.

## 13. What is a z-index, and how does it function?
It determines the stack order of an element.

## 14. What are the properties of flexbox?
- `flex-direction`
- `flex-wrap`
- `flex-flow`
- `justify-content`
- `align-items`
- `align-content`

## 15. What is cascading in CSS?
Cascading in CSS is the process of determining which style rules should be applied to an HTML element when there are multiple conflicting rules, based on their levels of specificity and source order.

## 16. Explain CSS position property?
The `position` property in CSS is used to position an element on a web page. It has four values: `static` (default), `relative`, `absolute`, and `fixed`. `static` positions an element according to the normal flow of the document, while `relative` positions it relative to its normal position. `absolute` positions it relative to its nearest positioned ancestor or initial containing block, and `fixed` positions it relative to the viewport.

## 17. What is the grid system?
Grid system is the system of positioning elements on the page. It works as a table, but you can define such options as `grid-template-columns` and `grid-tamplate-rows` etc., which gives you more flexibility, comparing to the table system, when working with the grid-like elements on the page.

## 18. What are the different ways to hide the element using CSS?
There are several ways to hide an element using CSS:
- `visibility: hidden`
- `display: none`
- `opacity: 0;`
- `filter: opacity(0)`

## 19. How does Calc work?
`calc()` is a function in CSS that allows you to perform calculations to determine values for CSS properties. For example:
```
width: calc(100px + 100px);
height: calc(100% / 5);
```
In the above example, the `width` would be set to `200px` and the `height` would be set to `20%`.

## 20. What do CSS Custom properties variables mean?
Custom properties are a way to define your own variables in CSS, and can be defined starting with "--". They are useful for readability, as you can define the same value in them and use it across the whole style sheet. For example:
```
:root {
  --main-color: red;
}

body {
  background-color: var(--main-color, red); /* if var is not defined then red */
}
```

## 21. What does !important mean in CSS?
When defining a style, the `!important` property means that this particular style should be applied and others ignored.

## 22. What are the advantages of using translate() instead of absolute position?
When using `translate()` instead of absolute positioning, we can experience the following advantages:
- Better overall animation performance.
- Better responsiveness.

## 23. How will you fix browser-specific styling issues?
One way to fix browser-specific styling issues is by using specific prefixes, such as `-webkit`, `-moz`, etc. Another way is by defining the browser in JS, creating a function that defines which features are supported, and applying the styles accordingly.

## 24. Can we add 3D transformations to our project using CSS?
Yes, we can add 3D transformations to our project using CSS, such as `transform: rotateX(45deg) rotateY(45deg) rotateZ(45deg)`.

## 25. What are CSS transitions?
CSS transitions allow us to change the values of properties smoothly over a specified duration. For example:
```
button:hover {
  background-color: blue;
  transition: background-color 1s ease-in-out;
}
```

### 26. What are @keyframes used for?
`@keyframes` is used to define an animation sequence consisting of a series of keyframes. Using it, we can define what happens when the animation reaches a certain point (percentage or `from`/`to`). The animation name must be defined in the `animation` property.

### 27. What is meant by universal selector?
The universal selector `*` selects all HTML elements inside the specific element, such as `div * {}`. Also, it can be used to define general style for the whole page, such as `* {color: red;}`.

### 28. What are attribute selectors?
Attribute selectors match the element with the certain attribute or value. For example:
```
a[href="*.html"] {
  color: blue;
}

button[value="click me"] {
  background-color: green;
}
```

### 29. What class naming methodologies in CSS do you know?
Some popular class naming methodologies in CSS include:
- BEM (Block Element Modifier)
- ATOMIC
- SMACSS