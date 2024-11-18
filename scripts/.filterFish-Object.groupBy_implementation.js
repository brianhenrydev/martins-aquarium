import { database } from "./aquariumData.js";

export const mostHolyFish = () => {
	const isHolyFish = Object.groupBy(
		database.fish,
		(fish) => fish.length % 3 === 0,
	);
	return isHolyFish[true];
};

export const soldierFish = () => {
	const isSoldierFish = Object.groupBy(
		database.fish,
		(fish) => fish.length % 5 === 0,
	);
	return isSoldierFish[true];
};

export const regularFish = () => {
	const isRegularFish = Object.groupBy(
		database.fish,
		(fish) => fish.length % 5 !== 0 && fish.length % 3 !== 0,
	);
	return isRegularFish[true];
};

export const sortedFish = () => {
	const holyFishList = mostHolyFish();
	const soldierFishList = soldierFish();
	const regularFishList = regularFish();
	return [...holyFishList, ...soldierFishList, ...regularFishList];
};
