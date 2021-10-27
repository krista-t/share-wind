function wrangleFacetForPlotly(facet) {
	let plotlyFacet = {};
	if (facet) {
		for (const [key] of Object.entries(facet)) {
			plotlyFacet[facet[key]["rdfs:label"]] =
				facet[key]["occurrence "];
		}
		return plotlyFacet;
	} else {
		return;
	}
}

function sortDecending(plotlyFacet) {
	let sortedFacet = {};
	let keysSorted = Object.keys(plotlyFacet).sort(function (
		a,
		b
	) {
		return plotlyFacet[b] - plotlyFacet[a];
	});

	keysSorted.forEach(
		(key) => (sortedFacet[key] = plotlyFacet[key])
	);

	return sortedFacet;
}

export function topFiveTerms(facet) {
	let plotlyFacet = sortDecending(
		wrangleFacetForPlotly(facet)
	);

	if (Object.keys(plotlyFacet).length < 5) {
		return plotlyFacet;
	} else {
		let topFiveTerms = {};
		let otherTermsOccurence = 0;

		Object.entries(plotlyFacet)
			.slice(0, 5)
			.forEach((row) => (topFiveTerms[row[0]] = row[1]));
		Object.entries(plotlyFacet)
			.slice(5, -1)
			.forEach((row) => (otherTermsOccurence += row[1]));

		topFiveTerms["Other Terms"] = otherTermsOccurence;

		return topFiveTerms;
	}
}
