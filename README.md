# OctoPalm.js

## V 2.0.0 (Ladybug)

**OctoPalm.js** is a lightweight, customizable JavaScript library that adds real-time, interactive search functionality to your web applications. With smooth animations, emoji support, and customizable styles, it enhances the search experience and can be easily integrated into any web project.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v5zsnlk0d4zqhku6un6w.gif)

## Features

- **Real-Time Search**: Instant search results as users type, providing a seamless user experience.
- **Customizable Styles**: Easy to modify the look and feel of search results with built-in CSS or custom styles.
- **Animated Results**: Smooth animations for search result transitions, making the interface more engaging.
- **Emoji Support**: Add emojis to items for a more visually appealing and interactive search experience.
- **Duplicate Removal**: Automatically filters out duplicate results, ensuring a cleaner search.
- **Cross-Browser Compatibility**: Works seamlessly across all modern browsers (Chrome, Firefox, Safari, Edge, etc.).
- **Key-Based Searching**: Allows searching across multiple keys of each item (e.g., `itemName`, `label`, `emoji`).

## Installation

You can add **OctoPalm.js** to your project using one of two methods:

### 1. Via CDN

Add the following CDN link to the `<head>` of your HTML:

```html
<script src="https://aidalog.github.io/cdn/light/octopalm.ladybug.js"></script>
```

### 2. Download from GitHub

1. Download the latest version from the [OctoPalm GitHub Repository](https://github.com/eddiegulay/octopalm).
2. Include the `octopalm.ladybug.js` file in your project:

```html
<script src="/path/to/octopalm.ladybug.js"></script>
```

## Usage

### 1. HTML Setup

Create an input field where users can type their search queries:

```html
<input type="text" id="search-input" placeholder="Search..." />
```

### 2. Initialize OctoPalm.js

Add the following script to initialize the search functionality:

```html
<script src="/path/to/octopalm.ladybug.js"></script>
<script>
    // Example items for a shopping site
    const items = [
        { label: "Car Cover", link: "/accessories/car-cover", emoji: "🚔" },
        { label: "Helmet", link: "/accessories/helmet", emoji: "🪖" },
        { name: "Bike", link: "/vehicles/bike" },
        { label: "Scooter", link: "/vehicles/scooter", emoji: "🛵" },
        // Add more items as needed...
    ];

    // Initialize OctoPalm with the input ID and items
    new OctoPalm('search-input', items);
</script>
```

### 3. Customizing Styles

The library injects default styles for search results. You can modify these styles by updating the CSS in `octopalm.js` or by overriding them in your own stylesheet:

```css
.opalm-search-results {
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
    border: 1px solid #ddd;
}
```

## API

### Constructor

```javascript
new OctoPalm(inputId, items)
```

- **`inputId`**: The ID of the input element where users will type their search queries.
- **`items`**: An array of items to search through. Each item should be an object containing at least one search key (e.g., `itemName`, `label`, `emoji`) and a corresponding `link`.

### Example

```javascript
const items = [
    { itemName: "Example Item", link: "/example-item" },
    { label: "Car Cover", link: "/accessories/car-cover", emoji: "🚔" }
];
new OctoPalm('search-input', items);
```

### Key Search Properties

Each item in the `items` array can have one or more of the following properties:

- **`itemName`**: The name of the item to be displayed (e.g., `"Toyota Camry"`).
- **`label`**: Another possible label for the item (e.g., `"Car Cover"`).
- **`emoji`**: An emoji that will be displayed alongside the item's label.
- **`link`**: A URL where the user will be redirected when they click the search result.

## Examples

Here’s an example of a simple shopping search implementation:

```html
<input type="text" id="search-input" placeholder="Search products..." />
<script>
    const items = [
        { label: "Car Cover", link: "/accessories/car-cover", emoji: "🚔" },
        { label: "Helmet", link: "/accessories/helmet", emoji: "🪖" },
        { name: "Scooter", link: "/vehicles/scooter", emoji: "🛵" },
        // Add more items...
    ];
    
    new OctoPalm('search-input', items);
</script>
```

---

## License

**OctoPalm.js** is open-source and available for use under the MIT License.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests. Please ensure your code follows the existing coding style, and write tests for new features where possible.

---

## Support

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/eddiegulay/octopalm/issues).

---

By providing detailed information about the features, usage, and customization options, this README should guide users in understanding how to effectively use **OctoPalm.js** in their projects.

Let me know if you'd like any adjustments!