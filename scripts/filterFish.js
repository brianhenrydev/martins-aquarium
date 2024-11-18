import { database } from "./aquariumData.js";

export const mostHolyFish = () => {
	let holyFish = [];
	const fishTank = database.fish;

	for (const fish of fishTank) {
		if (fish.length % 3 === 0) {
			holyFish.push(fish);
		}
	}
	return holyFish;
};

export const soldierFish = () => {
	let soldierFish = [];
	const fishTank = database.fish;

	for (const fish of fishTank) {
		if (fish.length % 5 === 0) {
			soldierFish.push(fish);
		}
	}
	return soldierFish;
};

export const regularFish = () => {
	let normalFish = [];
	let notHolyFish = [];
	const fishTank = database.fish;

	for (const fish of fishTank) {
		if (fish.length % 5 !== 0) {
			notHolyFish.push(fish);
		}
	}

	for (const fish of notHolyFish) {
		if (fish.length % 3 !== 0) {
			normalFish.push(fish);
		}
	}

	return normalFish;
};

export const sortedFish = () => {
	const holyFishList = mostHolyFish();
	const soldierFishList = soldierFish();
	const regularFishList = regularFish();
	return [...holyFishList, ...soldierFishList, ...regularFishList];
};

