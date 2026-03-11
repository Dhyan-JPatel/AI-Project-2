/**
 * App logic for the Product Idea Generator.
 * Each unique combination of all four selections (product type, audience,
 * design style, price range) maintains its own independently shuffled
 * sequence of ideas.  Clicking "Generate Idea" cycles through all 15+
 * suggestions before repeating, guaranteeing a different idea each click.
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

    // Each entry is keyed by the full 4-value combination and stores a
    // shuffled sequence of idea indices plus the current position in it.
    var cycleByKey = {};

    /** Shuffle an array in place using the Fisher-Yates algorithm. */
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
        return array;
    }

    /**
     * Generate and display a product idea based on all four selections.
     * Each unique combination cycles through its own shuffled sequence of
     * all available ideas so a different suggestion appears on every click.
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

        // Build a compound key for the full combination of all four values.
        var key = productType + "|" + audience + "|" + style + "|" + price;

        if (!cycleByKey[key]) {
            // First time for this combination: create a shuffled index sequence.
            var sequence = [];
            for (var i = 0; i < ideasForType.length; i++) {
                sequence.push(i);
            }
            cycleByKey[key] = { sequence: shuffle(sequence), position: 0 };
        }

        var cycle = cycleByKey[key];

        // Once all ideas have been shown, reshuffle and start the cycle over.
        if (cycle.position >= cycle.sequence.length) {
            shuffle(cycle.sequence);
            cycle.position = 0;
        }

        var index = cycle.sequence[cycle.position];
        cycle.position++;

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
