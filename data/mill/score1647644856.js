const tools = require("./tools.js");
const tweens = require("./tweens.js");
module.exports = id => {
	const title = `film_${id}`;
	const scoreid = "1647644856";
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
		bwxrxx_061200030000: [ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.gray, 0,"gray"], [pigments.red, 3,"red"], [pigments.yellow, 0,"yellow"], [pigments.blue, 0,"blue"]],
		bwxryx_061200020100: [ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.gray, 0,"gray"], [pigments.red, 2,"red"], [pigments.yellow, 1,"yellow"], [pigments.blue, 0,"blue"]],
		xwgryx_001002020100: [ [pigments.black,0, "black"], [pigments.white,10,"white"], [pigments.gray, 2,"gray"], [pigments.red, 2,"red"], [pigments.yellow, 1,"yellow"], [pigments.blue, 0,"blue"]],
		bwxxyx_061200000200: [ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.gray, 0,"gray"], [pigments.red, 0,"red"], [pigments.yellow, 2,"yellow"], [pigments.blue, 0,"blue"]],
		bwxxxx_061200000000: [ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.gray, 0,"gray"], [pigments.red, 0,"red"], [pigments.yellow, 0,"yellow"], [pigments.blue, 0,"blue"]],
	};
	//bwgryb = black white gray red yellow blue x ::: not present
	return {
		title: title,
		id: id,		
		scoreid: scoreid,
		pigments: pigments,
		films: [
		{
			algorithm: "1637362139",
			start: "1647628171",
			end: "1647628291",
			pigmentset: pigmentsets["bwxxxx_061200000000"],
			text: ["",""],
			nticks: 48,
			tween: (ntick,nticks)=>{
				return tools.randominteger(0,tweens.length);
			},
			changelayer: (nlayer,nlayers,ntick,nticks) => {
				return (ntick<2 || ntick>nticks-2) ? true : tools.randominteger(0,10)<8;
			},
			layersmill: [
				{ nrects: 1, nlines: 0, ncircles: 0 },
				{ nrects: 0, nlines: 5, ncircles: 5 },
				{ nrects: 0, nlines: 5, ncircles: 5 },
				{ nrects: 0, nlines: 5, ncircles: 5 },
				{ nrects: 0, nlines: 5, ncircles: 5 },
				{ nrects: 0, nlines: 5, ncircles: 5 },
			],
		},
		{
			//algorithm: "1645565647",
			algorithm: "1637362139",
			start: "1647628291",
	        end: "1647628791",
			pigmentset: pigmentsets["bwxxxx_061200000000"],
			text: ["test","test"],
			nticks: 48,
			tween: (ntick,nticks)=>{
				return tools.randominteger(0,tweens.length);
			},
			changelayer: (nlayer,nlayers,ntick,nticks) => {
				return (ntick<2 || ntick>nticks-2) ? true : tools.randominteger(0,10)<8;
			},
			layersmill: [
				{ nrects: 1, nlines: 0, ncircles: 0 },
				{ nrects: 0, nlines: 6, ncircles: 0 },
				{ nrects: 0, nlines: 6, ncircles: 0 },
				{ nrects: 0, nlines: 6, ncircles: 0 },
				{ nrects: 0, nlines: 6, ncircles: 0 },
				{ nrects: 0, nlines: 6, ncircles: 0 },
			]
		},
		]
	}
};
