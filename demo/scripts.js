// scripts.js

// Sample data
const items = [
    // Vehicle Makes and Models
    { itemName: "Toyota Camry", link: "/vehicles/toyota-camry" },
    { itemName: "Honda Civic", link: "/vehicles/honda-civic" },
    { itemName: "Ford F-150", link: "/vehicles/ford-f150" },
    { itemName: "Chevrolet Silverado", link: "/vehicles/chevrolet-silverado" },

    // Vehicle Parts
    { itemName: "Brake Pads", link: "/parts/brake-pads" },
    { itemName: "Air Filter", link: "/parts/air-filter" },
    { itemName: "Oil Filter", link: "/parts/oil-filter" },
    { itemName: "Alternator", link: "/parts/alternator" },

    // Accessories
    { itemName: "Car Cover", link: "/accessories/car-cover" },
    { itemName: "Dashboard Camera", link: "/accessories/dashboard-camera" },
    { itemName: "Seat Covers", link: "/accessories/seat-covers" },
    { itemName: "Floor Mats", link: "/accessories/floor-mats" },

    // Services
    { itemName: "Oil Change Service", link: "/services/oil-change" },
    { itemName: "Tire Rotation", link: "/services/tire-rotation" },
    { itemName: "Brake Inspection", link: "/services/brake-inspection" },
    { itemName: "Engine Diagnostic", link: "/services/engine-diagnostic" },

    // Promotions and Specials
    { itemName: "Winter Tire Sale", link: "/promotions/winter-tire-sale" },
    { itemName: "Oil Change Discount", link: "/promotions/oil-change-discount" },
    { itemName: "Free Brake Inspection", link: "/promotions/free-brake-inspection" },
    { itemName: "Buy 1 Get 1 Free Accessories", link: "/promotions/buy-1-get-1-free-accessories" },

    // Web Navigation
    { itemName: "Home", link: "/" },
    { itemName: "About Us", link: "/about" },
    { itemName: "Contact Us", link: "/contact" },
    { itemName: "FAQ", link: "/faq" },
    { itemName: "Blog", link: "/blog" },

    // Brands
    { itemName: "Bosch", link: "/brands/bosch" },
    { itemName: "Denso", link: "/brands/denso" },
    { itemName: "Michelin", link: "/brands/michelin" },
    { itemName: "Goodyear", link: "/brands/goodyear" },

    // Vehicle Types
    { itemName: "Sedans", link: "/vehicles/sedans" },
    { itemName: "SUVs", link: "/vehicles/suvs" },
    { itemName: "Trucks", link: "/vehicles/trucks" },
    { itemName: "Hybrids", link: "/vehicles/hybrids" },

    // Locations
    { itemName: "New York Store", link: "/locations/new-york" },
    { itemName: "Los Angeles Store", link: "/locations/los-angeles" },
    { itemName: "Chicago Store", link: "/locations/chicago" },
    { itemName: "Houston Store", link: "/locations/houston" },

    // Frequently Searched Items
    { itemName: "Headlight Bulbs", link: "/parts/headlight-bulbs" },
    { itemName: "Windshield Wipers", link: "/parts/windshield-wipers" },
    { itemName: "Battery", link: "/parts/battery" },
    { itemName: "Transmission Fluid", link: "/parts/transmission-fluid" }
];



new OctoPalm('search-input', items);