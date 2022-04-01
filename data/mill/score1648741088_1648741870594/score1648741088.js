const tools = require("./tools.js");
const algorithms = require("./algorithms.js");
module.exports = timestamp => {
	const datetime = new Date(timestamp);
	const datetimestr = datetime.toDateString();
	const datetimeISOstr = datetime.toISOString();
	const scoreid = "score1648741088";
	const printrunid = `${scoreid}_${timestamp}`;
	const pigments= {
		black: "#191918",
		white: "#fcfbe3",
		blue: "#006699",
		red: "#9a0000",
		yellow: "#ffcc00",
		gray: "#898988",
		darkgray: "#4b4b44"
	};
	const pigmentsets = {
		bwxrxx_061200030000: [ [pigments.black,5, "black"], [pigments.white,12,"white"], [pigments.gray, 0,"gray"], [pigments.red, 3,"red"], [pigments.yellow, 0,"yellow"], [pigments.blue, 0,"blue"]],
		bwxryx_061200020100: [ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.gray, 0,"gray"], [pigments.red, 2,"red"], [pigments.yellow, 1,"yellow"], [pigments.blue, 0,"blue"]],
		xwgryx_001002020100: [ [pigments.black,0, "black"], [pigments.white,10,"white"], [pigments.gray, 2,"gray"], [pigments.red, 2,"red"], [pigments.yellow, 1,"yellow"], [pigments.blue, 0,"blue"]],
		bwxxyx_061200000200: [ [pigments.black,5, "black"], [pigments.white,12,"white"], [pigments.gray, 0,"gray"], [pigments.red, 0,"red"], [pigments.yellow, 2,"yellow"], [pigments.blue, 0,"blue"]],
		bwxxxx_061200000000: [ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.gray, 0,"gray"], [pigments.red, 0,"red"], [pigments.yellow, 0,"yellow"], [pigments.blue, 0,"blue"]],
		bwxxxb_061200000004: [ [pigments.black,5, "black"], [pigments.white,12,"white"], [pigments.gray, 0,"gray"], [pigments.red, 0,"red"], [pigments.yellow, 0,"yellow"], [pigments.blue, 4,"blue"]],
	};
	//bwgryb = black white gray red yellow blue x ::: not present
	let algorithm=algorithms[0];
	let films = ["bwxrxx_061200030000", "bwxxyx_061200000200", "bwxryx_061200020100", "bwxrxx_061200030000"].map( (psetkey,k) => {
		return {
			id: `film_${k.toString().padStart(3,"0")}`,
			algorithmid: algorithm.id,
			pigmentset: pigmentsets[psetkey],
			text: ["",""],
			nticks: 48,
		}
	});
	algorithm=algorithms[0];
	films.unshift({
		id: "film_start", 
		algorithmid: algorithm.id,
		pigmentset: pigmentsets["bwxxxx_061200000000"],
		text: ["film factory", "#"+timestamp],
		nticks: 24,
	});
	films.push({
		id: "film_end", 
		algorithmid: algorithm.id,
		pigmentset: pigmentsets["bwxxxx_061200000000"],
		text: ["mctavish", "film #"+timestamp],
		nticks: 24,
	});
	films.push({
		id: "film_extra", 
		algorithmid: algorithm.id,
		pigmentset: pigmentsets["bwxrxx_061200030000"],
		text: ["", ""],
		nticks: 8,
	});
	let score = { 
		id:scoreid, printrunid, films, 
		pigments, pigmentsets,
		tween: (ntick,nticks)=>{
			let weightedtweens = [0,0,0,0,1,2,2];
			//return weightedtweens[tools.randominteger(0,weightedtweens.length)];
			return 0;
		},
		istween: (nlayer,nlayers,ntick,nticks) => {
			let bar = tools.randominteger(6,9);
			return tools.randominteger(0,10) < bar;
		},
		changelayer: (nlayer,nlayers,ntick,nticks) => {
			let bar = tools.randominteger(5,10);
			return (ntick<2 || ntick>nticks-2) ? true : tools.randominteger(0,10) < bar;
		}
	}
	console.log(`score=${score}`);
	return score;
}
