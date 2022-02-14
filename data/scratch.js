const tools = require("./tools.js");
const pigments= {
	black: "#191918",
	white: "#fcfbe3",
	blue: "#006699",
	red: "#9a0000",
	yellow: "#ffcc00",
	gray: "#898988",
	darkgray: "#4b4b44"
};
const prefix = "seed-";
module.exports = [
{
	id: prefix + "1637255740", //date +%s
	dimensions: {width: 16*300, height: 9*300, name: "AR16x9"},
	npages: 48,
	pigments: [ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 2,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637258317", //date +%s
	dimensions: {width: 16*300, height: 9*300, name: "AR16x9"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 4,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637258480", //date +%s
	dimensions: {width: 16*300, height: 9*300, name: "AR16x9"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 4,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637258562", //date +%s
	dimensions: {width: 16*300, height: 9*300, name: "AR16x9"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 4,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 0,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637258575", //date +%s
	dimensions: {width: 16*300, height: 9*300, name: "AR16x9"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 3,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 0,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637258598", //date +%s
	dimensions: {width: 16*300, height: 9*300, name: "AR16x9"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 2,"yellow"], [pigments.red, 0,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637258630", //date +%s
	dimensions: {width: 16*300, height: 9*300, name: "AR16x9"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.gray, 2,"gray"], [pigments.blue, 0,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 0,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637258785", //date +%s
	dimensions: {width: 16*300, height: 9*300, name: "AR16x9"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.gray, 2,"gray"], [pigments.blue, 0,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 1,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637258762", //date +%s
	dimensions: {width: 16*300, height: 9*300, name: "AR16x9"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.gray, 2,"gray"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 1,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637290773", //date +%s
	dimensions: {width: 16*300, height: 9*300, name: "AR16x9"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.gray, 2,"gray"], [pigments.blue, 1,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 0,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637258771", //date +%s
	dimensions: {width: 16*300, height: 9*300, name: "AR16x9"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.gray, 0,"gray"], [pigments.blue, 1,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 1,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
]const tools = require("./tools.js");
const prefix = "algorithm-";
//** begin algorithms
module.exports = [

	{ 
		id: prefix + "1636425448",
		draw: p => {	
			let width = p.width;
			let height = p.height;
			let min = p.min, max = p.max;
			let colors = p.colors;

			let cx = tools.randominteger(0.2*width,0.8*width);
			let cy = tools.randominteger(0.2*height,0.8*height);
			// let cx = width/2;
			// let cy = height/2;

			let layersmill = [0,1,2,3,4];
			let layers = layersmill.reduce( (layermatrix, layerj) => {
					let mill = [0,1,2,3,4,5];
					let lineWidth = mill.map(n=>tools.randominteger(0.1*min,min)).sort( (a,b) => b-a );
					let dash = mill.map(n=>tools.randominteger(0.05*min,0.3*min)).sort( (a,b) => b-a );
					let space = mill.map(n=>tools.randominteger(0.05*min,0.4*min)).sort( (a,b) => b-a );
					let lines = mill.reduce( (linematrix,j,mill) => {
						if(layerj<layersmill.length-2) {
							// console.log(layerj,JSON.stringify(linematrix));
							let color1 = colors[tools.randominteger(0,colors.length)];
							let notcolor1 = colors.filter(color => color!==color1);
							let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
							linematrix.push({x1:cx,x2:cx,y1:0,y2:height,lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2});;
							linematrix.push({x1:0,x2:width,y1:cy,y2:cy,lineWidth:lineWidth[j],dash:space[j],space:dash[j],strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color1});
						}
						return linematrix;
					}, []);
					mill = [0,1,2,3,4];
					lineWidth = mill.map(n=>tools.randominteger(0.05*min,0.2*min)).sort( (a,b) => a-b );
					dash = mill.map(n=>tools.randominteger(0.05*min,0.15*min)).sort( (a,b) => b-a);
					space = mill.map(n=>tools.randominteger(0.05*min,0.2*min));
					// space = dash;
					let r = mill.map(n=>tools.randominteger(0.14*min,0.45*min)).sort( (a,b) => b-a );
					// let r = mill.map(n=>(n+1)*2/((mill.length+1)*2)*min).sort( (a,b) => b-a );
					r[mill.length-1] = 0.1*min;
					// console.log("r=" + JSON.stringify(r));
					// cx = width/2;
					// cy = height/2;
					let circles = mill.reduce( (circlematrix,j) => {
						let color1 = colors[tools.randominteger(0,colors.length)];
						let notcolor1 = colors.filter(color => color!==color1);
						let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
						
						// let fillOpacity = (layerj===layersmill.length-2 && j === mill.length-2) || (layerj === layersmill.length-1 && j === mill.length-1) ? 1 : 0;
						let fillOpacity = (layerj<layersmill.length-2 && j === mill.length-2) || (layerj === layersmill.length-1 && j === mill.length-1) ? 1 : 1;
						// let fillOpacity = j === mill.length-1 || j === 0 ? 1 : 0;
						circlematrix.push({cx:cx,cy:cy,r:r[j],lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:0,fillOpacity:fillOpacity,strokeColor:color1,fillColor:color2});
						return circlematrix;
					}, []);
					return layermatrix.concat( { lines, circles, rects: [] } );
				}, []);
			
			let color1 = colors[tools.randominteger(0,colors.length)];
			let notcolor1 = colors.filter(color => color!==color1);
			let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
			let lineWidth = tools.randominteger(0.1*min,2*min);
			let dash = tools.randominteger(0.05*min,0.18*min);
			let space = tools.randominteger(0.05*min,0.2*min);
			let x=0, y=0;
			let rects = [
				{x,y,width,height,lineWidth:lineWidth,dash:dash,space:space,strokeOpacity:0,fillOpacity:1,strokeColor:color1,fillColor:color1},
				{x,y,width,height,lineWidth:lineWidth,dash:dash,space:space,strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color2},
				{x,y,width,height,lineWidth:lineWidth*0.4,dash:space,space:dash,strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2}
			];
			layers.unshift( { lines: [], circles: [], rects: rects });

			color1 = colors[tools.randominteger(0,colors.length)];
			notcolor1 = colors.filter(color => color!==color1);
			color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
			lineWidth = tools.randominteger(0.1*min,0.6*min);
			dash = tools.randominteger(0.05*min,0.18*min);
			space = tools.randominteger(0.5*min,0.4*min);

			x = [-0.1*width,0.1*width][tools.randominteger(0,2)];
			y = [-0.3*height,-0.2*height][tools.randominteger(0,2)];
			rects = [
				{x,y,width:0.9*width,height:1.4*height,lineWidth:lineWidth*0.8,dash:dash*0.8,space:space*0.8,strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color2},
				{x,y,width:0.95*width,height:1.4*height,lineWidth:lineWidth*0.6,dash:dash*0.8,space:space*0.8,strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2}
			];
			layers.push( { lines: [], circles: [], rects: rects });
			return layers;
		},
	},
	{ 
		id: prefix + "1636347815", //date +%s
		draw: p => {	
			let width = p.width;
			let height = p.height;
			let min = p.min, max = p.max;
			let colors = p.colors;

			let cx = tools.randominteger(0.2*width,0.8*width);
			let cy = tools.randominteger(0.2*height,0.8*height);
			// let cx = width/2;
			// let cy = height/2;

			let layersmill = [0,1,2,3,4];
			let layers = layersmill.reduce( (layermatrix, layerj) => {
					let mill = [0,1,2,3,4,5];
					let lineWidth = mill.map(n=>tools.randominteger(0.1*min,min)).sort( (a,b) => b-a );
					let dash = mill.map(n=>tools.randominteger(0.05*min,0.3*min)).sort( (a,b) => b-a );
					let space = mill.map(n=>tools.randominteger(0.05*min,0.4*min)).sort( (a,b) => b-a );
					let lines = mill.reduce( (linematrix,j,mill) => {
						if(layerj<layersmill.length-2) {
							// console.log(layerj,JSON.stringify(linematrix));
							let color1 = colors[tools.randominteger(0,colors.length)];
							let notcolor1 = colors.filter(color => color!==color1);
							let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
							linematrix.push({x1:cx,x2:cx,y1:0,y2:height,lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2});;
							linematrix.push({x1:0,x2:width,y1:cy,y2:cy,lineWidth:lineWidth[j],dash:space[j],space:dash[j],strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color1});
						}
						return linematrix;
					}, []);
					mill = [0,1,2,3,4];
					lineWidth = mill.map(n=>tools.randominteger(0.05*min,0.4*min)).sort( (a,b) => a-b );
					dash = mill.map(n=>tools.randominteger(0.05*min,0.15*min)).sort( (a,b) => b-a);
					space = mill.map(n=>tools.randominteger(0.05*min,0.2*min));
					// space = dash;
					let r = mill.map(n=>tools.randominteger(0.14*min,0.45*min)).sort( (a,b) => b-a );
					// let r = mill.map(n=>(n+1)*2/((mill.length+1)*2)*min).sort( (a,b) => b-a );
					r[mill.length-1] = 0.1*min;
					// console.log("r=" + JSON.stringify(r));
					cx = width/2;
					cy = height/2;
					let circles = mill.reduce( (circlematrix,j) => {
						let color1 = colors[tools.randominteger(0,colors.length)];
						let notcolor1 = colors.filter(color => color!==color1);
						let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
						
						// let fillOpacity = (layerj===layersmill.length-2 && j === mill.length-2) || (layerj === layersmill.length-1 && j === mill.length-1) ? 1 : 0;
						let fillOpacity = (layerj<layersmill.length-2 && j === mill.length-2) || (layerj === layersmill.length-1 && j === mill.length-1) ? 1 : 1;
						// let fillOpacity = j === mill.length-1 || j === 0 ? 1 : 0;
						circlematrix.push({cx:cx,cy:cy,r:r[j],lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:0,fillOpacity:fillOpacity,strokeColor:color1,fillColor:color2});
						return circlematrix;
					}, []);
					return layermatrix.concat( { lines, circles, rects: [] } );
				}, []);
			// colors = tools.reifyWeightedArray([ [tools.pigments.black,4],  [tools.pigments.white,8], [tools.pigments.blue,0], [tools.pigments.yellow,0], [tools.pigments.red,4]]);
			// layer 0 ::: background canvas
			let color1 = colors[tools.randominteger(0,colors.length)];
			let notcolor1 = colors.filter(color => color!==color1);
			let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
			let lineWidth = tools.randominteger(0.1*min,2*min);
			let dash = tools.randominteger(0.05*min,0.18*min);
			let space = tools.randominteger(0.05*min,0.2*min);
			let x=0, y=0;
			let rects = [
				{x,y,width,height,lineWidth:lineWidth,dash:dash,space:space,strokeOpacity:0,fillOpacity:1,strokeColor:color1,fillColor:color1},
				{x,y,width,height,lineWidth:lineWidth,dash:dash,space:space,strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color2},
				{x,y,width,height,lineWidth:lineWidth*0.4,dash:space,space:dash,strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2}
			];
			layers.unshift( { lines: [], circles: [], rects: rects });

			color1 = colors[tools.randominteger(0,colors.length)];
			notcolor1 = colors.filter(color => color!==color1);
			color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
			lineWidth = tools.randominteger(0.1*min,0.6*min);
			dash = tools.randominteger(0.05*min,0.18*min);
			space = tools.randominteger(0.5*min,0.4*min);

			x = [-0.1*width,0.1*width][tools.randominteger(0,2)];
			y = [-0.3*height,-0.2*height][tools.randominteger(0,2)];
			rects = [
				{x,y,width:0.9*width,height:1.4*height,lineWidth:lineWidth*0.8,dash:dash*0.8,space:space*0.8,strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color2},
				{x,y,width:0.95*width,height:1.4*height,lineWidth:lineWidth*0.6,dash:dash*0.8,space:space*0.8,strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2}
			];
			layers.push( { lines: [], circles: [], rects: rects });
			return layers;
		},
	},
	{ 
		id: prefix + "1637362139", //date +%s
		draw: p => {	
			let width = p.width;
			let height = p.height;
			let min = p.min, max = p.max;
			let colors = p.colors;
				
			let cx = width/2;
			let cy = height/2;

			let layersmill = [0,1,2,3,4];
			let layers = layersmill.reduce( (layermatrix, layerj) => {
					let mill = [0,1,2,3,4];
					let lineWidth = mill.map(n=>tools.randominteger(0.1*min,min)).sort( (a,b) => b-a );
					let dash = mill.map(n=>tools.randominteger(0.1*min,0.6*min)).sort( (a,b) => b-a );
					let space = mill.map(n=>tools.randominteger(0.1*min,0.6*min)).sort( (a,b) => b-a );
					let lines = mill.reduce( (linematrix,j,mill) => {
						if(layerj<layersmill.length-2) {
							// console.log(layerj,JSON.stringify(linematrix));
							let color1 = colors[tools.randominteger(0,colors.length)];
							let notcolor1 = colors.filter(color => color!==color1);
							let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
							// linematrix.push({x1:cx,x2:cx,y1:0,y2:height,lineWidth:width,dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2});;
							// linematrix.push({x1:0,x2:width,y1:cy,y2:cy,lineWidth:height,dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2});
							linematrix.push({x1:cx,x2:cx,y1:0,y2:height,lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2});;
							linematrix.push({x1:0,x2:width,y1:cy,y2:cy,lineWidth:lineWidth[j],dash:space[j],space:dash[j],strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color1});
						}
						return linematrix;
					}, []);
					mill = [0,1,2,3,4];
					lineWidth = mill.map(n=>tools.randominteger(0.05*min,0.4*min)).sort( (a,b) => a-b );
					dash = mill.map(n=>tools.randominteger(0.05*min,0.25*min)).sort( (a,b) => b-a);
					space = mill.map(n=>tools.randominteger(0.05*min,0.8*min));
					// space = dash;
					let r = mill.map(n=>tools.randominteger(0.2*min,0.45*min)).sort( (a,b) => b-a );
					// let r = mill.map(n=>(n+1)*2/((mill.length+1)*2)*min).sort( (a,b) => b-a );
					r[mill.length-1] = 0.1*min;
					// console.log("r=" + JSON.stringify(r));
					let circles = mill.reduce( (circlematrix,j) => {
						let color1 = colors[tools.randominteger(0,colors.length)];
						let notcolor1 = colors.filter(color => color!==color1);
						let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
						
						// let fillOpacity = (layerj===layersmill.length-2 && j === mill.length-2) || (layerj === layersmill.length-1 && j === mill.length-1) ? 1 : 0;
						let fillOpacity = (layerj<layersmill.length-2 && j === mill.length-2) || (layerj === layersmill.length-1 && j === mill.length-1) ? 0 : 1;
						// let fillOpacity = j === mill.length-1 || j === 0 ? 1 : 0;
						circlematrix.push({cx:cx,cy:cy,r:r[j],lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:fillOpacity,strokeColor:color1,fillColor:color2});
						return circlematrix;
					}, []);
					return layermatrix.concat( { lines, circles, rects: [] } );
				}, []);
			let color1 = colors[tools.randominteger(0,colors.length)];
			let notcolor1 = colors.filter(color => color!==color1);
			let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
			let lineWidth = tools.randominteger(0.1*min,0.4*min);
			let dash = tools.randominteger(0.05*min,0.4*min);
			let space = tools.randominteger(0.1*min,0.4*min);
			let x=0, y=0;
			let rects = [
				{x,y,width,height,lineWidth:lineWidth,dash:dash,space:space,strokeOpacity:0,fillOpacity:1,strokeColor:color1,fillColor:color1},
				// {x,y,width,height,lineWidth:lineWidth,dash:dash,space:space,strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color2},
				// {x,y,width,height,lineWidth:lineWidth*0.4,dash:space,space:dash,strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2}
			];
			layers.unshift( { lines: [], circles: [], rects: rects });
			// });
			return layers;
		}
	},
];
const PDFDocument = require("pdfkit");
// const PDFImage = require("pdf-image").PDFImage;
const fs = require("fs");
const tools = require("./tools.js");
const algorithms = require("./algorithms.js");
const bookseeds = require("./bookseeds.js");
const prefix = "mct";
const datetime = new Date();
const timestamp = datetime.getTime();
const datetimestr = datetime.toDateString();
const datetimeISOstr = datetime.toISOString();
const librarybooksold = require("./librarybooks_old");
let newbooks = [];

let librarydir = "books_" + timestamp;
if (!fs.existsSync(librarydir)){
    fs.mkdirSync(librarydir);
}
bookseeds.forEach( seed => {
	algorithms.forEach( algo => {
		let id = prefix + "_" + algo.id + "_" + seed.id  + "_t-" + timestamp;

		let dir = id;
		if (!fs.existsSync(dir)){
		    fs.mkdirSync(dir);
		}

		// newbooks.push({dir:dir, algorithm:algo.id, timestamp:timestamp, size:seed.dimensions.name, seed:seed.id});
		console.log("algoid = " + algo.id);
		let book = {
			id,
			timestamp, datetimestr, datetimeISOstr,
			algorithmid: algo.id,
			seedid: seed.id,
			directory: "/" + librarydir + "/" + dir,
			npages: seed.npages,
			colors: seed.colors(seed.pigments, seed.mixer),
			dimensions: seed.dimensions,
			pigments: seed.pigments.filter(pigment=>pigment[1]>0).map(pigment=>pigment[2]),
			author: "mctavish",
		};
		// console.log("book = " + JSON.stringify(book));
		newbooks.push({...book});

		let drawings = [...Array(seed.npages).keys()].reduce( (pagematrix, pagej) => {
			let p = {
				width: seed.dimensions.width,
				height: seed.dimensions.height,
				min: Math.min(seed.dimensions.width, seed.dimensions.height),
				max: Math.max(seed.dimensions.width, seed.dimensions.height),
				colors: book.colors
			};
			let layers = algo.draw(p);
			return  pagematrix.concat({layers});
		}, []);
		book.drawings = drawings;
		book.drawings.forEach( (page,p) => {
			let pageid = book.id + "_" + (p+1).toString().padStart(3, "0");
			let file = "page" + (p+1).toString().padStart(3, "0") + ".pdf";
			let info = {id:pageid,timestamp:book.timestamp,datetimestr:book.datetimestr,algorithmid:book.algorithmid,seedid:book.seedid,directory:book.directory,npages:book.npages,Author:book.author,Subject:"generative drawing series",Keywords: "net.art, webs, networks, generative, algorithmic" };
			// console.log("*** " + JSON.stringify([book].map( b => { return {id:pageid,timestamp,datetimestr,datetimeISOstr,algorithmid,seedid,directory,npages,Author:book.author,Subject:"generative drawing series",Keywords: "net.art, webs, networks, generative, algorithmic" } } )[0]) );
			let doc = new PDFDocument(
			{ 
				size: [seed.dimensions.width,seed.dimensions.height],
				info: info,
				// bufferPages: true
			});

			doc.font("Courier-Bold");
			doc.pipe(fs.createWriteStream(dir+"/"+file));
			doc.fontSize(18);
			page.layers.forEach( (layer,l) => {
				layer.rects.forEach( (rect,j) => {
					let { x, y, width, height, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = rect;
					if(fillOpacity!==0) {
						doc.rect(x, y, width, height).fillColor(fillColor).fill();
					}
					if(strokeOpacity!==0) {
						doc.rect(x, y, width, height).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
					}
				});
				layer.lines.forEach( (line,j) => {
					let { x1, x2, y1, y2, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = line;
					doc.moveTo(x1,y1).lineTo(x2,y2).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
				});
				layer.circles.forEach( (circ,j) => {
					let { cx, cy, r, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = circ;
					if(fillOpacity!==0) {
						doc.circle(cx, cy, r).fillColor(fillColor).fillOpacity(1).fill();	}
					if(strokeOpacity!==0) {
						doc.circle(cx, cy, r).fillOpacity(0).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
					}
				});
			});
			doc.end();
			p < seed.npages-1 ? doc.addPage() : "done";
		});
		fs.writeFileSync(dir+"/parameters.js", "let p = " + JSON.stringify(book,null,"\t"), (err) => {
		  if (err)
		    console.log(err);
		  else {
		    console.log("File written successfully\n");
		  }
		});
	});
});
let librarybookfile = "librarybooks_"+timestamp+".js";
fs.writeFileSync(librarybookfile, "module.exports = " + JSON.stringify(newbooks,null,"\t"), (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
});
let newlibrary = librarybooksold.reduce( (acc,book,j) => {
	acc.push({...book});
	return acc;
},[]);
newbooks.forEach(book => {
	newlibrary.push({...book});
	});
fs.writeFileSync("librarybooks.js", "module.exports = " + JSON.stringify(newlibrary,null,"\t"), (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
});

let nextSteps = "";
let nextstepsfile = "nextSteps_"+timestamp+".sh";
newbooks.map(b=>b.id).forEach( dir => {
	nextSteps = nextSteps + `
cd ${dir}
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "$\{file/.pdf.png/.png\}"; done;
for file in *.png; do magick convert $file -resize 640 $file.small.png; done;
for file in *png.small.png; do mv "$file" "$\{file/.png.small.png/-small.png\}"; done;
pdfunite *.pdf book.pdf
ffmpeg -framerate 1 -i page%03d.png -c:v libx264 -r 24 -pix_fmt yuv420p book.mp4
cd ..
cp McTavishResume202011_extensive.pdf ${dir}
zip ${dir}.zip ${dir}
mv ${dir}.zip ${dir}/book.zip
mv ${dir} ${librarydir}
`;
});
nextSteps = nextSteps + `
cp ${nextstepsfile} ${librarydir}/nextSteps.sh
mv ${librarybookfile} ${librarydir}/library.js
mv librarybooks_old.js librarybooks_older.js
gsutil -m cp -r ${librarydir} gs://bookfactory/
`;

fs.writeFileSync(nextstepsfile, nextSteps, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
});


