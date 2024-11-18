import { database } from "./aquariumData.js";

export const locationList = () => {
	const locationsHTML = database.locations
		.map(
			(location) => `
		<section class="location">
			<h2>${location.name}</h2>
			<h3>Country: ${location.country}</h3>
			<p>Description: ${location.description}</p>
		</section>
`,
		)
		.join("");

	return `<article class="locations">${locationsHTML}</article>`;
};
