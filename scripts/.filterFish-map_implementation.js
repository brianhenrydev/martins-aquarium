import { database } from "./aquariumData.js";

export const mostHolyFish = () => {
	return database.fish.filter((fish) => {
		return fish.length % 3 === 0;
	});
};

export const soldierFish = () => {
	return database.fish.filter((fish) => {
		return fish.length % 5 === 0;
	});
};

export const regularFish = () => {
	const unholyFish = database.fish.filter((fish) => {
		return fish.length % 5 !== 0;
	});
	const normalFish = unholyFish.filter((fish) => {
		return fish.length % 3 !== 0;
	});
	return normalFish;
};

export const sortedFish = () => {
	const holyFishList = mostHolyFish();
	const soldierFishList = soldierFish();
	const regularFishList = regularFish();
	return [...holyFishList, ...soldierFishList, ...regularFishList];
};
