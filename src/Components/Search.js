const Search = ({ search, setSearch, length }) => {
	return (
		<section className="search-wrapper">
			<div className="searchbar">
				<label htmlFor="search">Search Posts</label>
				<input
					id="search"
					type="text"
					placeholder=" &#128269;     enter search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<span>
				<p className="result">{length} results</p>
			</span>
		</section>
	);
};

export default Search;
