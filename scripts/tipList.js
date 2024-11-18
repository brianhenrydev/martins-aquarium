import { database } from "./aquariumData.js";

export const tipList = () => {
	const tips = database.tips;
	let tipHtml = "";
	for (const tip of tips) {
		tipHtml += `
		<li class="tip">${tip.text}</li>
`;
	}
	return `<header id='tips-header'>Tips:</header><ul class='tips'>${tipHtml}</ul>`;
};
