// scripts.js

// Sample data
const items = [
    // Food
    { label: "Apple", link: "/food/apple", emoji: "🍎" },
    { label: "Banana", link: "/food/banana", emoji: "🍌" },
    { label: "Orange Juice", link: "/food/orange-juice", emoji: "🍊" },
    { label: "Burger", link: "/food/burger", emoji: "🍔" },
    { label: "Pizza", link: "/food/pizza", emoji: "🍕" },
    { label: "Coffee", link: "/food/coffee", emoji: "☕" },
    { label: "Hotdog", link: "/food/hotdog", emoji: "🌭" },
    { label: "Ice Cream", link: "/food/ice-cream", emoji: "🍦" },
    { label: "Pasta", link: "/food/pasta", emoji: "🍝" },
    { label: "Sushi", link: "/food/sushi", emoji: "🍣" },

    // Clothes
    { label: "T-Shirt", link: "/clothes/t-shirt", emoji: "👕" },
    { label: "Jeans", link: "/clothes/jeans", emoji: "👖" },
    { label: "Jacket", link: "/clothes/jacket", emoji: "🧥" },
    { label: "Sneakers", link: "/clothes/sneakers", emoji: "👟" },
    { label: "Dress", link: "/clothes/dress", emoji: "👗" },
    { label: "Sweater", link: "/clothes/sweater", emoji: "🧣" },

    // Vehicles
    { label: "Car", link: "/vehicles/car", emoji: "🚗" },
    { label: "Motorcycle", link: "/vehicles/motorcycle", emoji: "🏍️" },
    { label: "Bicycle", link: "/vehicles/bicycle", emoji: "🚲" },
    { label: "Truck", link: "/vehicles/truck", emoji: "🚚" },

    // Health
    { label: "Vitamins", link: "/health/vitamins", emoji: "💊" },
    { label: "First Aid Kit", link: "/health/first-aid-kit", emoji: "🩹" },
    { label: "Yoga Mat", link: "/health/yoga-mat", emoji: "🧘‍♀️" },
    { label: "Dumbbells", link: "/health/dumbbells", emoji: "🏋️‍♂️" },
    { label: "Thermometer", link: "/health/thermometer", emoji: "🌡️" }
];


new OctoPalm('search-input', items);