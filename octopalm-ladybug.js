class OctoPalm {
    constructor(inputId, items) {
        this.inputElement = document.getElementById(inputId);
        this.items = items;
        this.itemsByKey = {};
        this.resultsContainer = this.createResultsContainer();
        this.injectStyles();

        this.initialize();
    }

    initialize() {
        if (!this.inputElement) {
            console.error(`Input element with id ${this.inputElement.id} not found.`);
            return;
        }
        this.organizeItemsByKey();
        this.inputElement.addEventListener('input', () => this.performSearch());
    }

    organizeItemsByKey() {
        this.items
            .filter(item => item && typeof item === 'object')
            .forEach(item => {
                Object.keys(item).forEach(key => {
                    if (!this.itemsByKey[key]) {
                        this.itemsByKey[key] = [];
                    }
                    this.itemsByKey[key].push(item);
                });
            });
    }

    createResultsContainer() {
        const container = document.createElement('div');
        container.className = 'opalm-search-results';
        this.inputElement.parentElement.appendChild(container);
        return container;
    }

    injectStyles() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.textContent = `
            .opalm-search-results {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                border: 1px solid #ccc;
                background: #fff;
                max-height: 320px;
                overflow-y: auto;
                z-index: 1000;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                transition: opacity 0.3s ease, transform 0.3s ease;
                opacity: 0;
                transform: scaleY(0);
                transform-origin: top;
                scrollbar-width: thin;
                scrollbar-color: #000 #fff;
            }
            .opalm-search-results.show {
                opacity: 1;
                transform: scaleY(1);
            }
            .opalm-search-result-item {
                padding: 12px 16px;
                border-bottom: 1px solid #eee;
                display: flex;
                align-items: center;
                transition: background-color 0.3s ease, transform 0.3s ease;
                cursor: pointer;
            }
            .opalm-search-result-item:hover {
                background-color: #f0f0f0;
                transform: translateX(5px);
            }
            .opalm-search-result-item a {
                text-decoration: none;
                color: #333;
                font-weight: 600;
            }
            .opalm-search-result-item a:hover {
                text-decoration: underline;
            }

            .opalm-search-results::-webkit-scrollbar {
                width: 8px;
            }
            .opalm-search-results::-webkit-scrollbar-track {
                background: #fff;
            }
            .opalm-search-results::-webkit-scrollbar-thumb {
                background: #333;
                border-radius: 10px;
            }
            .opalm-search-results::-webkit-scrollbar-thumb:hover {
                background: #000;
            }
        `;
        document.head.appendChild(style);
    }

    performSearch() {
        const query = this.inputElement.value.toLowerCase();
        this.resultsContainer.innerHTML = '';

        if (query.length === 0) {
            this.resultsContainer.classList.remove('show');
            return;
        }

        const filteredResults = this.getFilteredResults(query);
        const uniqueResults = this.removeDuplicates(filteredResults);
        this.displayResults(uniqueResults);
    }

    getFilteredResults(query) {
        const filteredResults = [];
        for (let key in this.itemsByKey) {
            const filteredItems = this.itemsByKey[key].filter(item => {
                const value = item[key];
                return value && typeof value === 'string' && value.toLowerCase().includes(query);
            });
            filteredResults.push(...filteredItems);
        }
        return filteredResults;
    }

    removeDuplicates(items) {
        const uniqueItems = [];
        const seen = new Set();

        items.forEach(item => {
            const identifier = item.itemName || item.name || item.label || item.item || 'Unknown Item';
            if (!seen.has(identifier)) {
                seen.add(identifier);
                uniqueItems.push(item);
            }
        });

        return uniqueItems;
    }

    displayResults(filteredResults) {
        filteredResults.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.className = 'opalm-search-result-item';
            const itemName = item.itemName || item.name || item.label || item.item || 'Unknown Item';
            resultItem.innerHTML = `<a href="${item.link}">${itemName}</a>`;
            this.resultsContainer.appendChild(resultItem);
        });

        if (filteredResults.length > 0) {
            this.resultsContainer.classList.add('show');
        } else {
            this.resultsContainer.classList.remove('show');
        }
    }
}
