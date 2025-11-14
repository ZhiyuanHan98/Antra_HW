import React, { useState } from "react";
import Autocomplete from "./component/Autocomplete";

const topMovies: string[] = [
	"The Shawshank Redemption",
	"The Godfather",
	"The Dark Knight",
	"Pulp Fiction",
	"Inception",
	"Fight Club",
	"Forrest Gump",
	"The Matrix",
	"Interstellar",
	"Parasite",
];



const App: React.FC = () => {
	const [movies, setMovies] = useState<string[]>([]);

	return (
		<div style={{padding: 10}}>
			<Autocomplete
				multiple={true}
				label="Pick movies"
				placeholder="Type to search…"
				options={topMovies}
				onChange={setMovies}
			/>

			<p>
				Selected:
				<strong>{movies.length ? movies.join(", ") : "(None)"}</strong>
			</p>
		</div>
	);
};

export default App;
