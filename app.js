/**
 * App logic for the Product Idea Generator.
 * Selects an idea based on all four user selections (product type,
 * target audience, design style, and price range) and displays it
 * in the result card.  Each unique combination of selections
 * produces a distinct suggestion.
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
     * Return a deterministic hash code for the given string.
     * Used to map each unique combination of selections to a
     * consistent index so that changing any filter changes the result.
     */
    function hashString(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            var ch = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + ch;
            hash = hash | 0; // convert to 32-bit integer
        }
        return Math.abs(hash);
    }

    /**
     * Generate and display a product idea based on all four selections.
     * Every unique combination of product type, audience, style, and
     * price produces a distinct suggestion.
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

        var selectionKey = productType + "|" + audience + "|" + style + "|" + price;
        var index = hashString(selectionKey) % ideasForType.length;
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
