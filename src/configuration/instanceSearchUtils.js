// eslint-disable-next-line no-unused-vars
function createFilterArrayCriteria(filterCriteriaObject) {
	let filterCriteriaArray = [];

	Object.keys(filterCriteriaObject).forEach((key) => {
		for (
			let i = 0;
			i < filterCriteriaObject[key].length;
			i++
		) {
			filterCriteriaArray.push([
				key,
				filterCriteriaObject[key][i],
			]);
		}
	});

	return filterCriteriaArray;
}

export function facetedSearch(
	filterCriteriaObject,
	instances
) {
	let filterCriteriaArray = filterCriteriaObject;
	return instances.filter(function (instance) {
		for (let i = 0; i < filterCriteriaArray.length; i++) {
			if (
				Array.isArray(instance[filterCriteriaArray[i][0]])
			) {
				if (
					!instance[filterCriteriaArray[i][0]].includes(
						filterCriteriaArray[i][1]
					)
				) {
					return false;
				}
			} else {
				if (
					instance[filterCriteriaArray[i][0]] !==
					filterCriteriaArray[i][1]
				) {
					return false;
				}
			}
		}
		return true;
	});
}

export function freeTextSearch(
	inputText,
	instancesFiltered
) {
	const searchQ =
		instancesFiltered[0] &&
		Object.keys(instancesFiltered[0]);
	let results = instancesFiltered.filter((i) => {
		return searchQ.some(
			(q) =>
				i[q]
					.toString()
					.toLowerCase()
					.indexOf(inputText.toLowerCase()) > -1
		);
	});

	return results;
}
