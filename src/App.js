import { useState, useEffect } from "react";
import {
	Route,
	Switch,
	BrowserRouter,
} from "react-router-dom";
import Header from "./Components/Header";
import Template from "./Components/Template";
import Search from "./Components/Search";
import Facets from "./Components/Facets";
import Instances from "./Components/Instances";
import Modal from "./Components/Modal";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";

function App() {
	//HOOKS
	//show checkboxes
	const [showBoxes, setShowBoxes] = useState({});
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState([]);
	//modal
	const [isOpen, setIsOpen] = useState(false);
	//selected modal
	const [isSelected, setIsSelected] = useState(null);
	//results length
	const [length, setLength] = useState([]);

	//TEMPLATES STATE
	const [templates, setTemplates] = useState([]);
	const API_templates =
		"https://data.windenergy.dtu.dk/api/sesame/v1/get-template-ids";
	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(`${API_templates}`);
				const data = await response.json();
				setTemplates(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchItems();
	}, []);

	//GET FACETS IDs
	const API_facets =
		"https://data.windenergy.dtu.dk/api/sesame/v1/get-facets?templateID= ";
	const defaultTemplateID =
		"https://repo.metadatacenter.org/templates/2230186e-2890-4d38-9206-ded583fccafd";
	//FACETS STATE
	const [facets, setFacets] = useState([]);
	//SET DEFAULT STATE FOR FACETS REQuest
	const [facetID, setFacetID] = useState(defaultTemplateID);

	//CHANGE FACET STATE STATE DEPENDING ON TEMPLATE ID
	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(
					`${API_facets}${facetID}`
				);
				const data = await response.json();
				setFacets(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchItems();
	}, [facetID]);

	//GET INSTANCES IDs
	const API_instance =
		"https://data.windenergy.dtu.dk/api/sesame/v1/get-instances?templateID= ";
	//INSTANCES STATE
	const [instance, setInstance] = useState([]);
	const [instanceID, setInstanceID] = useState(
		defaultTemplateID
	);
	//CHANGE FACET STATE STATE DEPENDING ON TEMPLATE ID
	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(
					`${API_instance}${instanceID}`
				);
				const data = await response.json();
				setInstance(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchItems();
	}, [instanceID]);

	const handleChecked = (e) => {
		let checked = e.target.checked;
		//console.log(checked, showBoxes);
		const termID = e.target.value;
		const parentID =
			e.target.parentElement.parentElement.parentElement.id;
		setFilter((prev) =>
			checked
				? [...prev, [parentID, termID]]
				: prev.filter(function (el) {
						return el[1] !== termID;
				  })
		);
		console.log(filter.includes(checked));
	};
	const handleModal = (i) => {
		setIsOpen(true);
		setIsSelected(i);
	};
	return (
		<div className="App">
			<BrowserRouter>
				<Header></Header>

				<Template
					templates={templates}
					facetID={facetID}
					setFacetID={setFacetID}
					setInstanceID={setInstanceID}
					showBoxes={showBoxes}
					setShowBoxes={setShowBoxes}
					setFilter={setFilter}></Template>
				<Switch>
					<Route exact path="/">
						<Search
							instance={instance}
							search={search}
							setSearch={setSearch}
							length={length}></Search>
						<Facets
							facets={facets}
							showBoxes={showBoxes}
							setShowBoxes={setShowBoxes}
							handleChecked={handleChecked}
							filter={filter}
							setFilter={setFilter}></Facets>
						<Instances
							instance={instance}
							search={search}
							facets={facets}
							handleChecked={handleChecked}
							filter={filter}
							handleModal={handleModal}
							setIsSelected={setIsSelected}
							setLength={setLength}></Instances>
						<Modal
							open={isOpen}
							onClose={() => setIsOpen(false)}
							instance={instance}
							isSelected={isSelected}
							handleModal={handleModal}></Modal>
					</Route>
					<Route exact path="/dashboard">
						<Dashboard facets={facets}></Dashboard>
					</Route>
				</Switch>
			</BrowserRouter>
			<Footer></Footer>
		</div>
	);
}

export default App;
