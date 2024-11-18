import { fishCard } from "./fishList.js";
import { tipList } from "./tipList.js";
import { locationList } from "./locationList.js";
import { sortedFish } from "./filterFish.js";

const fishList = document.getElementById("fishList");
const tipListEl = document.getElementById("tipList");
const locationsListEl = document.getElementById("locationList");

// Render each HTML string to the correct DOM element
const fishInOrder = sortedFish();
// Generate the fish list from sorted data
const fisHTML = fishCard(fishInOrder);
fishList.innerHTML = fisHTML;

// Generate the care tips
const tipListHTML = tipList();
tipListEl.innerHTML = tipListHTML;

// Generate the location list
const locationHTML = locationList();
locationsListEl.innerHTML = locationHTML;
