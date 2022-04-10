const tools = require("./tools.js");
module.exports = [
{
	id: "1645565647", //date +%s
	transitionid: () => { return ["1647875263", "1647875520"][tools.randominteger(0,2)]; }, 
	title: "squarepushpull",
	layersmill: [
			{ nrects: 1, nlines: 0, ncircles: 0 },
			{ nrects: 0, nlines: 6, ncircles: 0 },
			{ nrects: 0, nlines: 6, ncircles: 0 },
			{ nrects: 0, nlines: 6, ncircles: 0 },
			{ nrects: 0, nlines: 8, ncircles: 0 },
			{ nrects: 0, nlines: 8, ncircles: 0 },
	],
	draw: p => {	
		let width = p.width;
		let height = p.height;
		let min = p.min, max = p.max;
		let colors = p.colors;
		let cx = width/2;
		let cy = height/2;
		let nc = 0;
		let layers = p.layersmill.reduce( (layermatrix, layer, layerj) => {
				let mill = [...Array(layer.nrects).keys()];
				let rects = mill.reduce( (matrix,j) => {
					let color1 = colors[++nc%colors.length];
					let lineWidth = tools.randominteger(0.1*min,0.4*min);
					let dash = tools.randominteger(0.05*min,0.4*min);
					let space = tools.randominteger(0.1*min,0.4*min);
					let x=0, y=0;
					matrix.push({x,y,width,height,lineWidth:lineWidth,dash:dash,space:space,strokeOpacity:0,fillOpacity:1,strokeColor:color1,fillColor:color1});
					return matrix;
				}, []);
				mill = [...Array(layer.nlines).keys()];
				let mult = mill.map(n=>tools.randominteger(1,2)).sort( (a,b) => b-a );
				let lineWidth = mill.map(n=> tools.randominteger(0.01*min,0.6*min)).sort( (a,b) => b-a );
				//let lineWidth = mill.map(n=> tools.randominteger(0.01*mult[n]*min,0.4*mult[n]*min)).sort( (a,b) => b-a );
					lineWidth[0]=tools.randominteger(0.6*min,min);;
					lineWidth[1]=tools.randominteger(0.5*min,min);;
					lineWidth[2]=tools.randominteger(0.4*min,min);
				//let space = mill.map(n=>tools.randominteger(0.03*min,0.5*min)).sort( (a,b) => b-a );
				//let dash = mill.map(n=>tools.randominteger(0.01*min,0.4*min)).sort( (a,b) => b-a );
				let space = mill.map(n=>tools.randominteger(0.03*min,0.6*min));
				let dash = mill.map(n=>tools.randominteger(0.01*min,0.3*min));
				let x = cx; 
				let y = cy;
				let lines = mill.reduce( (matrix,j) => {
					if(layerj<p.layersmill.length-2) {
						let color1 = colors[++nc%colors.length];
						//let notcolors = colors.filter(c=>c!==color1);
						notcolors = colors;
						let color2 = notcolors[++nc%notcolors.length];
						matrix.push({x1:x,x2:x,y1:0,y2:height,lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2});;
						matrix.push({x1:0,x2:width,y1:y,y2:y,lineWidth:lineWidth[j],dash:space[j],space:dash[j],strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color1});
					}
					//console.log(JSON.stringify(matrix));
					return matrix;
				}, []);
				mill = [...Array(layer.ncircles).keys()];
				lineWidth = mill.map(n=>tools.randominteger(0.05*min,0.45*min)).sort( (a,b) => a-b );
				dash = mill.map(n=>tools.randominteger(0.05*min,0.25*min)).sort( (a,b) => b-a);
				space = mill.map(n=>tools.randominteger(0.05*min,0.8*min));
				let r = mill.map(n=>tools.randominteger(0.2*min,0.50*min)).sort( (a,b) => b-a );
				r[mill.length-1] = 0.1*min;
				let circles = mill.reduce( (matrix,j) => {
					let color1 = colors[++nc%colors.length];
					let color2 = colors[++nc%colors.length];
					let fillOpacity = (layerj<p.layersmill.length-2 && j === mill.length-2) || (layerj === p.layersmill.length-1 && j === mill.length-1) ? 0 : 1;
					matrix.push({cx:cx,cy:cy,r:r[j],lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:fillOpacity,strokeColor:color1,fillColor:color2});
					return matrix;
				}, []);
				return layermatrix.concat( { lines, circles, rects: rects } );
			}, []);
		return layers;
	}
},
{
	id: "1637362139", //date +%s
	title: "centercircle",
	transitionid: () => { return ["1647628171"][0]; }, 
	layersmill: [
			{ nrects: 1, nlines: 0, ncircles: 0 },
			{ nrects: 0, nlines: 5, ncircles: 5 },
			{ nrects: 0, nlines: 5, ncircles: 5 },
			{ nrects: 0, nlines: 5, ncircles: 5 },
			{ nrects: 0, nlines: 5, ncircles: 5 },
			{ nrects: 0, nlines: 5, ncircles: 5 },
	],
	draw: p => {	
		let width = p.width;
		let height = p.height;
		let min = p.min, max = p.max;
		let colors = p.colors;
		let cx = width/2;
		let cy = height/2;
		let nc = 0;
		let layersmill = p.layersmill;
		let layers = p.layersmill.reduce( (layermatrix, layer, layerj) => {
				let mill = [...Array(layer.nrects).keys()];
				let rects = mill.reduce( (matrix,j) => {
					let color1 = colors[++nc%colors.length];
					let lineWidth = tools.randominteger(0.1*min,0.4*min);
					let dash = tools.randominteger(0.05*min,0.4*min);
					let space = tools.randominteger(0.1*min,0.4*min);
					let x=0, y=0;
					matrix.push({x,y,width,height,lineWidth:lineWidth,dash:dash,space:space,strokeOpacity:0,fillOpacity:1,strokeColor:color1,fillColor:color1});
					return matrix;
				}, []);
				mill = [...Array(layer.nlines).keys()];
				let lineWidth = mill.map(n=>tools.randominteger(0.1*min,min)).sort( (a,b) => b-a );
				let dash = mill.map(n=>tools.randominteger(0.1*min,0.6*min)).sort( (a,b) => b-a );
				let space = mill.map(n=>tools.randominteger(0.1*min,0.6*min)).sort( (a,b) => b-a );
				let lines = mill.reduce( (matrix,j) => {
					if(layerj<p.layersmill.length-2) {
						let color1 = colors[++nc%colors.length];
						let color2 = colors[++nc%colors.length];
						matrix.push({x1:cx,x2:cx,y1:0,y2:height,lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2});;
						matrix.push({x1:0,x2:width,y1:cy,y2:cy,lineWidth:lineWidth[j],dash:space[j],space:dash[j],strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color1});
					}
					return matrix;
				}, []);
				mill = [...Array(layer.ncircles).keys()];
				lineWidth = mill.map(n=>tools.randominteger(0.05*min,0.50*min)).sort( (a,b) => a-b );
				dash = mill.map(n=>tools.randominteger(0.05*min,0.25*min)).sort( (a,b) => b-a);
				space = mill.map(n=>tools.randominteger(0.05*min,0.8*min));
				let r = mill.map(n=>tools.randominteger(0.18*min,0.45*min)).sort( (a,b) => b-a );
				r[mill.length-1] = 0.1*min;
				let circles = mill.reduce( (matrix,j) => {
					let color1 = colors[++nc%colors.length];
					let color2 = colors[++nc%colors.length];
					let fillOpacity = (layerj<p.layersmill.length-2 && j === mill.length-2) || (layerj === p.layersmill.length-1 && j === mill.length-1) ? 0 : 1;
					matrix.push({cx:cx,cy:cy,r:r[j],lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:fillOpacity,strokeColor:color1,fillColor:color2});
					return matrix;
				}, []);
				return layermatrix.concat( { lines, circles, rects: rects } );
			}, []);
		return layers;
	}
},
];
