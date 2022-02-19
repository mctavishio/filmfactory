const PDFDocument = require("pdfkit");
// const PDFImage = require("pdf-image").PDFImage;
const fs = require("fs");
const tools = require("./tools.js");
//const algorithms = require("./algorithms.js");
//const bookseeds = require("./bookseeds.js");
const prefix = "film002_";
const datetime = new Date();
const timestamp = datetime.getTime();
const datetimestr = datetime.toDateString();
const datetimeISOstr = datetime.toISOString();
const pigments= {
	black: "#191918",
	white: "#fcfbe3",
	blue: "#006699",
	red: "#9a0000",
	yellow: "#ffcc00",
	gray: "#898988",
	darkgray: "#4b4b44"
};
const layersmill = [
	{ nrects: 1, nlines: 0, ncircles: 0 },
	{ nrects: 0, nlines: 5, ncircles: 5 },
	{ nrects: 0, nlines: 5, ncircles: 5 },
	{ nrects: 0, nlines: 5, ncircles: 5 },
	{ nrects: 0, nlines: 5, ncircles: 5 },
	{ nrects: 0, nlines: 5, ncircles: 5 },
];
algorithms = [{
	id: prefix + "1637362139", //date +%s
	layersmill: [
		{ nrects: 1, nlines: 0, ncircles: 0 },
		{ nrects: 0, nlines: 5, ncircles: 5 },
		{ nrects: 0, nlines: 5, ncircles: 5 },
		{ nrects: 0, nlines: 5, ncircles: 5 },
		{ nrects: 0, nlines: 5, ncircles: 5 },
		{ nrects: 0, nlines: 5, ncircles: 5 },
	],
	draw: p => {	
		let layersmill = [
			{ nrects: 1, nlines: 0, ncircles: 0 },
			{ nrects: 0, nlines: 5, ncircles: 5 },
			{ nrects: 0, nlines: 5, ncircles: 5 },
			{ nrects: 0, nlines: 5, ncircles: 5 },
			{ nrects: 0, nlines: 5, ncircles: 5 },
			{ nrects: 0, nlines: 5, ncircles: 5 },
		];
		let width = p.width;
		let height = p.height;
		let min = p.min, max = p.max;
		let colors = p.colors;
		let cx = width/2;
		let cy = height/2;
		let nc = 0;
		let layers = layersmill.reduce( (layermatrix, layer, layerj) => {
				let mill = [...Array(layer.nlines).keys()];
				let lineWidth = mill.map(n=>tools.randominteger(0.1*min,min)).sort( (a,b) => b-a );
				let dash = mill.map(n=>tools.randominteger(0.1*min,0.6*min)).sort( (a,b) => b-a );
				let space = mill.map(n=>tools.randominteger(0.1*min,0.6*min)).sort( (a,b) => b-a );
				let lines = mill.reduce( (matrix,j) => {
					if(layerj<layersmill.length-2) {
						let color1 = colors[++nc%colors.length];
						let color2 = colors[++nc%colors.length];
						matrix.push({x1:cx,x2:cx,y1:0,y2:height,lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2});;
						matrix.push({x1:0,x2:width,y1:cy,y2:cy,lineWidth:lineWidth[j],dash:space[j],space:dash[j],strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color1});
					}
					return matrix;
				}, []);
				mill = [...Array(layer.ncircles).keys()];
				lineWidth = mill.map(n=>tools.randominteger(0.05*min,0.4*min)).sort( (a,b) => a-b );
				dash = mill.map(n=>tools.randominteger(0.05*min,0.25*min)).sort( (a,b) => b-a);
				space = mill.map(n=>tools.randominteger(0.05*min,0.8*min));
				let r = mill.map(n=>tools.randominteger(0.2*min,0.45*min)).sort( (a,b) => b-a );
				r[mill.length-1] = 0.1*min;
				let circles = mill.reduce( (matrix,j) => {
					//let color1 = colors[tools.randominteger(0,colors.length)];
					let color1 = colors[++nc%colors.length];
					let color2 = colors[++nc%colors.length];
					let fillOpacity = (layerj<layersmill.length-2 && j === mill.length-2) || (layerj === layersmill.length-1 && j === mill.length-1) ? 0 : 1;
					matrix.push({cx:cx,cy:cy,r:r[j],lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:fillOpacity,strokeColor:color1,fillColor:color2});
					return matrix;
				}, []);
				mill = [...Array(layer.nrects).keys()];
				let rects = mill.reduce( (matrix,j) => {
					let color1 = colors[++nc%colors.length];
					let color2 = colors[++nc%colors.length];
					let lineWidth = tools.randominteger(0.1*min,0.4*min);
					let dash = tools.randominteger(0.05*min,0.4*min);
					let space = tools.randominteger(0.1*min,0.4*min);
					let x=0, y=0;
					matrix.push({x,y,width,height,lineWidth:lineWidth,dash:dash,space:space,strokeOpacity:0,fillOpacity:1,strokeColor:color1,fillColor:color1});
					return matrix;
				}, []);
				return layermatrix.concat( { lines, circles, rects: rects } );
			}, []);
		//let color1 = colors[tools.randominteger(0,colors.length)];
		let color1 = colors[++nc%colors.length];
		let color2 = colors[++nc%colors.length];
		let lineWidth = tools.randominteger(0.1*min,0.4*min);
		let dash = tools.randominteger(0.05*min,0.4*min);
		let space = tools.randominteger(0.1*min,0.4*min);
		let x=0, y=0;
		let rects = [
			{x,y,width,height,lineWidth:lineWidth,dash:dash,space:space,strokeOpacity:0,fillOpacity:1,strokeColor:color1,fillColor:color1},
		];
		layers.unshift( { lines: [], circles: [], rects: rects });
		return layers;
	}
}];
pigmentsets = [
	[ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 2,"red"]],
	[ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 4,"red"]],
	[ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 4,"red"]],
	[ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 0,"red"]],
	[ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 0,"red"]],
//	[ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 4,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 0,"red"]],
//	[ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 3,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 0,"red"]],
	[ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 2,"red"]],
	[ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 4,"red"]],
];
colorsets = pigmentsets.map(set => {
	return tools.reifyWeightedArray(set);
});

const fps=24; // frames per second for ffmpeg
const tpc=1*fps; // ticks per colorset
const nticks=tpc*colorsets.length; 
const nseconds = nticks/fps;
let filmdir = "film" + timestamp;
if (!fs.existsSync(filmdir)){
    fs.mkdirSync(filmdir);
}

let colors = tools.shufflearray(colorsets[0]);
let p = {
	width: 1920,
	height: 1080,
	min: 1080,
	max: 1920,
	colors: colors
};
let numbers = [...Array(10).keys()].map(n=>n.toString());
[...Array(nticks).keys()].reduce( (oldtick, ntick) => {
	if(ntick%tpc===0) {
		p.colors = tools.shufflearray(colorsets[Math.floor(ntick/tpc)%colorsets.length]);
	}
	console.log(`colorsets = ${Math.floor(ntick/tpc)%colorsets.length}`);
	layers = algorithms[0].draw(p);
	let file = "" + (ntick+1).toString().padStart(6, "0") + ".pdf";
	let bookfile = "book" + file;
	let info = {id:file,timestamp:timestamp,datetimestr:datetimestr,directory:filmdir,npages:nticks,Author:"mctavish",Subject:"generative drawing series",Keywords: "net.art, webs, networks, generative, algorithmic" };
	[...Array(fps).keys()].map( (nframe) => {
		file = "" + (nframe+fps*ntick+1).toString().padStart(6, "0") + ".pdf";
		console.log(`nframe=${nframe}`);
		let filmfile = prefix + file; 
		let doc = new PDFDocument(
		{ 
			size: [p.width,p.height],
			info: info,
		});
		doc.font("Courier-Bold");
		console.log(`filmfile=${filmfile}`);
		doc.pipe(fs.createWriteStream(filmdir+"/"+filmfile));
		doc.fontSize(p.height);
		layers.forEach( (layer,l) => {
			let oldlayer = oldtick[l];
			layer.rects.forEach( (rect,j) => {
				let oldrect = oldlayer.rects[j];
				let { x, y, width, height, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = tools.tweenParameters(oldrect,rect,fps,nframe);
				if(fillOpacity!==0) {
					doc.rect(x, y, width, height).fillColor(fillColor).fill();
				}
				if(strokeOpacity!==0) {
					doc.rect(x, y, width, height).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
				}
			});
			layer.lines.forEach( (line,j) => {
				let oldline = oldlayer.lines[j];
				let { x1, x2, y1, y2, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = tools.tweenParameters(oldline,line,fps,nframe);
				doc.moveTo(x1,y1).lineTo(x2,y2).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
			});
			layer.circles.forEach( (circ,j) => {
				let oldcirc = oldlayer.circles[j];
				let { cx, cy, r, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = tools.tweenParameters(oldcirc,circ,fps,nframe);
				if(fillOpacity!==0) {
					doc.circle(cx, cy, r).fillColor(fillColor).fillOpacity(1).fill();	}
				if(strokeOpacity!==0) {
					doc.circle(cx, cy, r).fillOpacity(0).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
				}
			});
		});
		doc.end();
	});
	return layers;
},algorithms[0].draw(p));

let nextSteps = "";
let nextstepsfile = "nextSteps_"+timestamp+".sh";
let newbooks=[];
newbooks.map(b=>b.id).forEach( dir => {
	nextSteps = nextSteps + `
cd ${filmdir}
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "$\{file/.pdf.png/.png\}"; done;
for file in *.png; do magick convert $file -resize 640 $file.small.png; done;
for file in *png.small.png; do mv "$file" "$\{file/.png.small.png/-small.png\}"; done;
pdfunite *.pdf book.pdf
ffmpeg -framerate 12 -i page%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p book.mp4
cd ..
cp McTavishResume202011_extensive.pdf ${dir}
zip ${dir}.zip ${dir}
mv ${dir}.zip ${dir}/book.zip
mv ${dir} ${librarydir}
`;
});
//nextSteps = nextSteps + `
//cp ${nextstepsfile} ${librarydir}/nextSteps.sh
//mv ${librarybookfile} ${librarydir}/library.js
//mv librarybooks_old.js librarybooks_older.js
//gsutil -m cp -r ${librarydir} gs://bookfactory/
//`;

fs.writeFileSync(nextstepsfile, nextSteps, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
});


