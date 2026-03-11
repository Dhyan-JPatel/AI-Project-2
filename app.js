/**
 * App logic for the Product Idea Generator.
 * Selects a random idea based on the chosen product type and displays
 * it in the result card.  Clicking "Generate Idea" multiple times for
 * the same combination of selections will cycle through all available
 * suggestions (15 or more per product type).
 */
(function () {
    var generateBtn = document.getElementById("generate-btn");
    var resultCard = document.getElementById("result-card");
    var resultTitle = document.getElementById("result-title");
    var resultDescription = document.getElementById("result-description");
    var resultProductTag = document.getElementById("result-product-tag");
    var resultAudienceTag = document.getElementById("result-audience-tag");
    var resultStyleTag = document.getElementById("result-style-tag");
    var resultPriceTag = document.getElementById("result-price-tag");
    var resultFeatures = document.getElementById("result-features");

    // Track the last shown index per product type so consecutive clicks
    // always produce a different suggestion.
    var lastIndexByType = {};

    /**
     * Generate and display a product idea based on all four selections.
     * Each call randomly picks from the full pool of ideas for the
     * selected product type, ensuring 15+ suggestions are accessible
     * for every unique combination of selections.
     */
    function generateIdea() {
        var productType = document.getElementById("product-type").value;
        var audience = document.getElementById("target-audience").value;
        var style = document.getElementById("design-style").value;
        var price = document.getElementById("price-range").value;

        var ideasForType = IDEAS[productType];
        if (!ideasForType || ideasForType.length === 0) {
            return;
        }

        // Pick a random index, avoiding the same idea shown consecutively.
        var index;
        if (ideasForType.length === 1) {
            index = 0;
        } else {
            var lastIndex = (lastIndexByType[productType] !== undefined) ? lastIndexByType[productType] : -1;
            do {
                index = Math.floor(Math.random() * ideasForType.length);
            } while (index === lastIndex);
        }
        lastIndexByType[productType] = index;

        var idea = ideasForType[index];

        resultTitle.textContent = idea.name;
        resultDescription.textContent = idea.description;

        resultProductTag.textContent = PRODUCT_TYPES[productType] || productType;
        resultAudienceTag.textContent = AUDIENCES[audience] || audience;
        resultStyleTag.textContent = STYLES[style] || style;
        resultPriceTag.textContent = PRICES[price] || price;

        resultFeatures.innerHTML = "";
        for (var i = 0; i < idea.features.length; i++) {
            var li = document.createElement("li");
            li.textContent = idea.features[i];
            resultFeatures.appendChild(li);
        }

        resultCard.classList.remove("hidden");
    }

    generateBtn.addEventListener("click", generateIdea);
})();
