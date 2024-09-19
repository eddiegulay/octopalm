class OctoPalm {
    constructor(inputId, items) {
        this.inputElement = document.getElementById(inputId);
        this.items = items;
        this.resultsContainer = this.createResultsContainer();
        this.injectStyles();

        this.initialize();
    }

    initialize() {
        if (!this.inputElement) {
            console.error(`Input element with id ${this.inputElement.id} not found.`);
            return;
        }

        this.inputElement.addEventListener('input', () => this.performSearch());
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

        const filteredItems = this.items.filter(item =>
            item.itemName.toLowerCase().includes(query)
        );

        filteredItems.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.className = 'opalm-search-result-item';
            resultItem.innerHTML = `<a href="${item.link}">${item.itemName}</a>`;
            this.resultsContainer.appendChild(resultItem);
        });

        this.resultsContainer.classList.add('show');
    }
}
