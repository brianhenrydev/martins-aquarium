import { database } from "./aquariumData.js";

export const fishCard = (fishData = database.fish) => {
	// Generate an HTML representation of each fish
	const fishCard = fishData
		.map(
			(fish) => `
      <div class="fish-card">
          <h2 class="fish-name">${fish.name}</h2>
          <img id="fish-img" src="${fish.image}" alt="${fish.name} - ${fish.species}">
          <div class="fish-facts">
            <p>Species: ${fish.species}</p>
            <pLength: ${fish.length} inches.</p>
            <p>Location: ${fish.location}</p>
            <p>Diet: ${fish.diet}</p>
        </div>
      </div>
`,
		)
		.join("");

	return fishCard;
};
