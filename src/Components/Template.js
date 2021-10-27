import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

const Template = ({
	templates,
	setFacetID,
	setInstanceID,
	showBoxes,
	setShowBoxes,
	setFilter,
}) => {
	const [templateVal, setTemplateVal] = useState("");

	useEffect(() => {
		setTemplateVal(Object.values(templates)[2]);
	}, [templates]);

	const [show, setShow] = useState(false);

	const handleChange = (e, key, value) => {
		setTemplateVal(e.target.textContent);
		setFacetID(key);
		setShow(!show);
		setInstanceID(key);
		setShowBoxes(!showBoxes);
		setFilter([]);
	};

	const handleToggle = (e) => {
		setShow({ show: !show });
	};
	return (
		<section className="template-select">
			<div
				className="value-container"
				onClick={(e) => handleToggle(e)}>
				{templateVal}
				<span>
					<FaAngleDown />
				</span>
			</div>
			<div className="list-container">
				{Object.entries(templates).map(([key, value]) => (
					<li
						hidden={!show}
						key={key}
						value={value}
						onClick={(e) => handleChange(e, key)}>
						{value}
					</li>
				))}
			</div>
		</section>
	);
};

export default Template;
