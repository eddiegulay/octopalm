# OctoPalm.js

**OctoPalm.js** is a lightweight JavaScript library designed to add real-time, customizable search functionality to your web applications. It provides a seamless search experience with animated results and custom-styled scrollbars, making it a robust solution for enhancing search features on your site.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7zwjl2e64m91tr38obr5.gif)

## Features

- **Real-Time Search**: Provides instant search results as users type in the search input.
- **Customizable Styling**: Easily customizable styles to fit your design.
- **Animated Results**: Smooth animations for search result appearance and item interactions.
- **Cross-Browser Support**: Compatible with modern browsers including Chrome, Firefox, and Safari.

## Installation

You can use **OctoPalm.js** in two ways:

### Via CDN

Include the following CDN link in your document `<head>`:

```html
<script src="https://aidalog.github.io/cdn/light/octopalm.js"></script>
```

### Download from GitHub

1. Download the latest version from the [OctoPalm GitHub Repository](https://github.com/eddiegulay/octopalm).
2. Include the `octopalm.js` file in your project.

```html
<script src="/path/to/octopalm.js"></script>
```

## Usage

### 1. Preparing Your HTML

Add an input element where users will type their search queries. For example:

```html
<input type="text" id="search-input" placeholder="Search..." />
```

### 2. Initializing OctoPalm.js

Include the `OctoPalm.js` script in your HTML and initialize it with your input ID and search items. Here's how:

```html
<script src="/path/to/octopalm.js"></script>
<script>
    // Example search items for a auto shop
    const items = [
        { itemName: "Toyota Camry", link: "/vehicles/toyota-camry" },
        { itemName: "Honda Civic", link: "/vehicles/honda-civic" },
        { itemName: "Ford F-150", link: "/vehicles/ford-f150" },
        { itemName: "Chevrolet Silverado", link: "/vehicles/chevrolet-silverado" },
        { itemName: "Brake Pads", link: "/parts/brake-pads" },
    ];

    // Initialize OctoPalm with the search input ID and items
    new OctoPalm('search-input', items);
</script>
```

### 3. Customizing Styles

**OctoPalm.js** injects default styles into your document. However, you can customize these styles by modifying the CSS in `octopalm.js` or overriding them in your own stylesheet.


## API

### Constructor

```javascript
new OctoPalm(inputId, items)
```

- **`inputId`**: The ID of the input element where users will type their search queries.
- **`items`**: An array of search items, each with the properties `itemName` (string) and `link` (string).

### Example

```javascript
const items = [
    { itemName: "Example Item", link: "/example-item" }
];
new OctoPalm('search-input', items);
```

## License

**OctoPalm.js** is open-source and available for any use.

## Contributing

Well, it's open for all :)

## Support

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/eddiegulay/octopalm/issues).

---