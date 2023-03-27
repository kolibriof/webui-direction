## 1. What is HTML?

- HyperText Markup Language

## 2. What is the difference between HTML elements and tags?

- Tag begins with `<` and ends with `>`. Element, however, is what inside those tags, it can be an image, text, table, etc.

## 3. What are Attributes and how do you use them?

- Attributes are often called options in other words. Attributes can be assigned to the HTML element, and can provide specific values or options, e.g., `href=""`, `value=""`, `src=""`.

## 4. What is the difference between a block-level element and an inline element?

- Block elements start in a new line and you can define top and bottom margins for them. However, inline elements start next to the element and do not have top and bottom margins.

## 5. When are comments used in HTML? Why shouldn't we use too many comments and how to maintain readability in HTML?

- Comments are usually used to explain a certain area of code on the page. We shouldn't use too many comments because it decreases the readability of the code. To maintain readability in HTML, we should use appropriate tags and try to have an HTML file as clean as possible, avoiding inline styles and JS code.

## 6. Can we display a web page inside a web page or Is nesting of web pages possible?

- `<iframe>`, `<p><strong></p>`

## 7. What are the HTML tags used to display the data in tabular form?

- `<table>`, `<tr>`, `<td>`, `<th>`

## 8. Name some common lists that are used when designing a page.

- `<ul>`, `<ol>`

## 9. Can we make all the markup using only the div tag? What is semantic HTML? Why should we follow a semantic approach to markup?

- Yes, we certainly can. Semantic HTML elements are tags that describe its meaning to the browser and developer, e.g., `<form>`, `<table>`, `<article>`, `<section>`. We should follow a semantic approach because it is good for accessibility, meaning screen readers can properly read the content on our page. It is also important to use them because of search engine optimization. Search engines use the structures of a web page to determine its relevance to the search request.

## 10. How to create a nested webpage in HTML?

- `<iframe>`

## 11. What is an image map?

- Clickable areas on the image

## 12. Explain the default layout of HTML.

- `<html><head><head><body></body></html>`

## 13. What is the difference between DIV and SPAN in HTML? What is the use of the span tag? Explain with example

- `<span>` is inline, `<div>` is a block element. The span is used for phrasing content, e.g., `<p>Hello <span style="color: red;">World!</span></p>`

## 14. What is the purpose of using alternative texts in images?

- Accessibility, alternative text if the image is not loaded.

## 15. What is `<!DOCTYPE html>`? Is the `<!DOCTYPE html>` tag considered as an HTML tag?

- It triggers the browser to render content in HTML5 specifications. It's not an HTML tag.

## 16. How do you create text on a webpage that allows you to send an email when clicked?

- `href="mailto: w@mail.com"`

## 17. What happens if there is no text between the tags? Does this affect the display of the HTML file?

- It does not display any content. It can result in a white empty space.

## 18. What types of graphics are supported by HTML5?

- SVG, canvas

## 19. How can you apply JavaScript to a web page?

- `<script src="js.js">` and inside the `<script>` tag,

## 20. What are `data-` attributes good for?

- `data-` attributes are used for storing information that can be accessible in JS or CSS. It can be used to perform some logical operations inside the JS file, and also we can use it inside a CSS stylesheet by referring to its attribute `.span[data-text="text"] {}`.

## 21. Describe the difference between `<script>`, `<script async>`, and `<script defer>`.

- `async` will execute JS code as soon as it's downloaded, `defer` will wait for HTML content to finish parsing.

## 22. Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

- It is a good idea because of performance and page appearance. Your CSS code may load after the HTML elements are loaded, which can result in weird styling behavior.
  ##23. What is metadata in HTML5 and how is it specified?
- Metadata is providing the information about the content itself, most of the attributes are not displayed on the page, except of, for example, `<title>`, which displays the page title. Example metadata tags: `<link>`, `<meta>`

##24. How can HTML5 web pages be optimized?

- By using semantic tags, compressing images and minimizing code

##25. What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements?

- `id` is used to identify a single element, while `class` is used to identify a group of elements

##26. What is the difference between `<strong>`, `<b>` tags and `<em>`, `<i>` tags?

- The main difference is that `<strong>` and `<em>` are semantic and other two are not

##27. How to specify the link in HTML and explain the target attribute?

- To specify a link in HTML we use the anchor tag `<a>`. For example, `<a href="https://example.com">Example</a>`. The `target` attribute specifies where the link should be opened, ex.: `_self`, `_blank`, `_top`, `_parent`.

##28. What is a manifest file in HTML5?

- A manifest file is a simple text file with the extension `.appcache` that tells the browser to cache certain pages or files. It's used in offline web applications to allow them to work even when the user is not connected to the internet.

##29. What’s one main result if you do not specify a doctype in an HTML page?

- If you do not specify a doctype in an HTML page, it can result in the browser switching to quirks mode, which means that it will not follow the standard rendering rules of the latest HTML version.

##30. Can we modify the attribute’s value of the HTML tag dynamically?

- Yes, we can use JavaScript to modify the attribute's value of an HTML tag dynamically. For example, `document.getElementById("myImage").src = "new-image.jpg";` would change the `src` attribute of the image with id `"myImage"` to `"new-image.jpg"`.
