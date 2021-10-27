import { useEffect } from "react";
import {
	defaultKeywords,
	getIntancesSummary,
} from "../configuration/iterateObj";
import {
	facetedSearch,
	freeTextSearch,
} from "../configuration/instanceSearchUtils";
import { sliceTxt } from "../configuration/sliceTxt";
const Instances = ({
	instance,
	search,
	filter,
	handleModal,
	setLength,
}) => {
	let instancesSummary = getIntancesSummary(
		instance,
		defaultKeywords
	);
	let filteredList = facetedSearch(
		filter,
		instancesSummary
	);
	let newList = freeTextSearch(search, filteredList);
	let newListLength = newList.length;

	useEffect(() => {
		setLength(newListLength);
	}, [newListLength, setLength]);
	return (
		<section className="instances">
			{newList.map((data, i) => (
				<div
					key={i}
					className="content"
					onClick={() => handleModal(i)}>
					<h2>
						{data["title"]}
						{data["catalogTitle"]}
					</h2>
					<h4>LAST UPDATED: {data["pav:lastUpdatedOn"]}</h4>
					<p className="description">
						{sliceTxt(data["description"])}
						{sliceTxt(data["catalogDescription"])}
					</p>{" "}
				</div>
			))}
		</section>
	);
};

export default Instances;
