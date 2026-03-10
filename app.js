/**
 * App logic for the Product Idea Generator.
 * Selects a random idea based on the chosen product type and
 * displays it in the result card.
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

    /**
     * Return a random integer between 0 (inclusive) and max (exclusive).
     */
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    /**
     * Generate and display a random product idea.
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

        var randomIndex = getRandomInt(ideasForType.length);
        var idea = ideasForType[randomIndex];

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
