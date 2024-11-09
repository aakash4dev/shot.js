Here’s the updated `README.md` with the correct CDN link for `shot.js`.

---

# shot.js

A minimalist JavaScript utility library designed to make common DOM operations faster and easier in browser environments.

## Installation

You can use `shot.js` directly in your HTML file by including it from the jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/aakash4dev/shot.js/index.js"></script>
```

## Overview

`shot.js` simplifies JavaScript code by providing shorthand functions for frequently used DOM operations, making your code shorter and more readable.

### Without `shot.js` vs. With `shot.js`

| Standard JavaScript                    | With `shot.js`       |
|----------------------------------------|-----------------------|
| `console.log('text')`                  | `out('text')`        |
| `document.getElementById('IDname')`    | `id('IDname')`       |
| `document.getElementsByClassName('ClassName')` | `cl('ClassName')` |
| `document.getElementsByTagName('div')` | `tag('div')`         |

## Usage

Add `shot.js` to your HTML file using the CDN link, then call the functions directly in your scripts:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Using shot.js</title>
</head>
<body>
<div id="myId">Hello by ID</div>
<div class="myClass">Hello by Class</div>
<input id="inputId" value="Input Value">
<input class="inputClass" value="Class Input Value">

<!-- Include shot.js from CDN -->
<script src="https://cdn.jsdelivr.net/gh/aakash4dev/shot.js/index.js"></script>

<!-- Use shot.js functions -->
<script>
  out("Hello World"); // Logs "Hello World" to the console

  const elementById = id("myId"); // Retrieves element by ID
  console.log(elementById.textContent); // Output: Hello by ID

  const elementsByClass = cl("myClass"); // Retrieves elements by class name
  console.log(elementsByClass[0].textContent); // Output: Hello by Class

  const valueById = idValue("inputId"); // Gets value of an input by ID
  console.log(valueById); // Output: Input Value

  const valueByClass = clValue("inputClass"); // Gets value of an input by class
  console.log(valueByClass); // Output: Class Input Value
</script>
</body>
</html>
```

## API Reference

- **out(value)**: Logs `value` to the console.

  ```javascript
  out("Hello, World!"); // Logs: "Hello, World!"
  ```

- **id(id)**: Returns the DOM element with the specified ID.

  ```javascript
  const element = id("myId");
  ```

- **cl(className)**: Returns an HTMLCollection of elements with the specified class name.

  ```javascript
  const elements = cl("myClass");
  ```

- **tag(tagName)**: Returns an HTMLCollection of elements with the specified tag name.

  ```javascript
  const divs = tag("div");
  ```

- **idValue(IDname)**: Returns the `.value` property of an element by ID.

  ```javascript
  const inputValue = idValue("inputId");
  ```

- **clValue(className)**: Returns the `.value` property of the first element found with the specified class name.

  ```javascript
  const firstInputValue = clValue("inputClass");
  ```

## License

[MIT License](LICENSE)

---

This `README.md` provides clear instructions for including `shot.js` in an HTML project directly from the CDN.