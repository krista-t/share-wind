import Plot from "react-plotly.js";
import { topFiveTerms } from "../configuration/plotlyUtils";

const Dashboard = ({ facets }) => {
	return (
		<div className="chart-container">
			{Object.keys(facets).length === 0 ||
			!Object.keys(facets).includes("subject") ? (
				<h3 style={{ margin: "10px auto" }}>
					No Data to Show
				</h3>
			) : (
				<Plot
					data={[
						{
							type: "scatter",
							mode: "points",
							name: "Line",
							x: Object.keys(
								topFiveTerms(facets["subject"])
							),
							y: Object.values(
								topFiveTerms(facets["subject"])
							),
							marker: {
								color: "rgba(102,194,165,1)",
								line: { color: "transparent" },
							},
						},
						{
							type: "bar",
							name: "Bar",
							x: Object.keys(
								topFiveTerms(facets["subject"])
							),
							y: Object.values(
								topFiveTerms(facets["subject"])
							),
							hoverinfo: "label+percent",
							marker: {
								color: [
									"#00ffbf",
									"#ffbf00",
									"#8000ff",
									"#fb55a8",
									"#ffff99",
									"#58797f",
								],
							}, //TODO: MAKE LAYOUT STILE VARIABLE
						},
					]}
					layout={{
						title: "Top 5 Subjects",
						titlefont: {
							size: 24,
						},
						font: {
							size: 14,
						},
						margin: { t: 80, b: 100 },
						plot_bgcolor: "rgba(0,0,0,0)",
						paper_bgcolor: "rgba(0,0,0,0)",
					}}
					useResizeHandler={true}
					style={{ width: "100vw", height: "45vh" }}
				/>
			)}

			{Object.keys(facets).length === 0 ||
			!Object.keys(facets).includes("variable") ? (
				<h3 style={{ margin: "10px auto" }}>
					No Data to Show
				</h3>
			) : (
				<Plot
					data={[
						{
							labels: Object.keys(
								topFiveTerms(facets["variable"])
							),
							values: Object.values(
								topFiveTerms(facets["variable"])
							),
							type: "pie",
							domain: {
								row: 0,
								column: 0,
							},
							marker: {
								colors: [
									"#ffbf00",
									"#0099ff",
									"#cc99ff",
									"#00ffbf",
									"#fb55a8",
									"#58797f",
								],
							},
							hoverinfo: "label+percent",
							textinfo: "none",
							hole: 0.3,
						},
					]}
					layout={{
						title: "Top 5 Variables",
						titlefont: {
							size: 24,
						},
						autosize: true,
						font: {
							size: 14,
						},
						plot_bgcolor: "rgba(0,0,0,0)",
						paper_bgcolor: "rgba(0,0,0,0)",
					}}
					useResizeHandler={true}
					style={{ width: "100vw", height: "50vh" }}
				/>
			)}
		</div>
	);
};

export default Dashboard;
