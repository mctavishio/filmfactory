const PDFDocument = require("pdfkit");
// const PDFImage = require("pdf-image").PDFImage;
const fs = require("fs");
const tools = require("./tools.js");
//const algorithms = require("./algorithms.js");
//const bookseeds = require("./bookseeds.js");
const prefix = "mct";
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
algorithm = {
	id: prefix + "1637362139", //date +%s
	draw: p => {	
		let width = p.width;
		let height = p.height;
		let min = p.min, max = p.max;
		let colors = p.colors;
		let cx = width/2;
		let cy = height/2;
		let nc = 0;
		let layersmill = [0,1,2,3,4];
		let layers = layersmill.reduce( (layermatrix, layerj) => {
				let mill = [0,1,2,3,4];
				let lineWidth = mill.map(n=>tools.randominteger(0.1*min,min)).sort( (a,b) => b-a );
				let dash = mill.map(n=>tools.randominteger(0.1*min,0.6*min)).sort( (a,b) => b-a );
				let space = mill.map(n=>tools.randominteger(0.1*min,0.6*min)).sort( (a,b) => b-a );
				let lines = mill.reduce( (linematrix,j,mill) => {
					if(layerj<layersmill.length-2) {
						let color1 = colors[++nc%colors.length];
						let color2 = colors[++nc%colors.length];
						linematrix.push({x1:cx,x2:cx,y1:0,y2:height,lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2});;
						linematrix.push({x1:0,x2:width,y1:cy,y2:cy,lineWidth:lineWidth[j],dash:space[j],space:dash[j],strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color1});
					}
					return linematrix;
				}, []);
				mill = [0,1,2,3,4];
				lineWidth = mill.map(n=>tools.randominteger(0.05*min,0.4*min)).sort( (a,b) => a-b );
				dash = mill.map(n=>tools.randominteger(0.05*min,0.25*min)).sort( (a,b) => b-a);
				space = mill.map(n=>tools.randominteger(0.05*min,0.8*min));
				let r = mill.map(n=>tools.randominteger(0.2*min,0.45*min)).sort( (a,b) => b-a );
				r[mill.length-1] = 0.1*min;
				let circles = mill.reduce( (circlematrix,j) => {
					//let color1 = colors[tools.randominteger(0,colors.length)];
					let color1 = colors[++nc%colors.length];
					let color2 = colors[++nc%colors.length];
					let fillOpacity = (layerj<layersmill.length-2 && j === mill.length-2) || (layerj === layersmill.length-1 && j === mill.length-1) ? 0 : 1;
					circlematrix.push({cx:cx,cy:cy,r:r[j],lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:fillOpacity,strokeColor:color1,fillColor:color2});
					return circlematrix;
				}, []);
				return layermatrix.concat( { lines, circles, rects: [] } );
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
};
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
const fpt=2*fps; // frames per tick (pages per algorithm call for tweening)
const tpc=20*fps; // ticks per colorset
const nticks=1*colorsets.length; //go through all colorsts twice ...
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
[...Array(nticks).keys()].reduce( (oldtick, ntick) => {
//	p.colors = tools.shufflearray(colorsets[Math.floor(ntick/tpc)%colorsets.length]);
	console.log(`colorsets = ${Math.floor(ntick/tpc)%colorsets.length}`);
	layers = algorithm.draw(p);
	let file = "" + (ntick+1).toString().padStart(6, "0") + ".pdf";
	let bookfile = "book" + file;
	let info = {id:file,timestamp:timestamp,datetimestr:datetimestr,directory:filmdir,npages:nticks,Author:"mctavish",Subject:"generative drawing series",Keywords: "net.art, webs, networks, generative, algorithmic" };
	[...Array(fpt).keys()].map( (nframe) => {
		file = "" + (nframe+fpt*ntick+1).toString().padStart(6, "0") + ".pdf";
		console.log(`nframe=${nframe}`);
		let filmfile = "film" + file; 
		let doc = new PDFDocument(
		{ 
			size: [p.width,p.height],
			info: info,
		});
		doc.font("Courier-Bold");
		console.log(`filmfile=${filmfile}`);
		doc.pipe(fs.createWriteStream(filmdir+"/"+filmfile));
		doc.fontSize(18);
		layers.forEach( (layer,l) => {
			let oldlayer = oldtick[l];
			layer.rects.forEach( (rect,j) => {
				let oldrect = oldlayer.rects[j];
				let { x, y, width, height, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = tools.tweenParameters(oldrect,rect,fpt,nframe);
				if(fillOpacity!==0) {
					doc.rect(x, y, width, height).fillColor(fillColor).fill();
				}
				if(strokeOpacity!==0) {
					doc.rect(x, y, width, height).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
				}
			});
			layer.lines.forEach( (line,j) => {
				let oldline = oldlayer.lines[j];
				let { x1, x2, y1, y2, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = tools.tweenParameters(oldline,line,fpt,nframe);
				doc.moveTo(x1,y1).lineTo(x2,y2).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
			});
			layer.circles.forEach( (circ,j) => {
				let oldcirc = oldlayer.circles[j];
				let { cx, cy, r, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = tools.tweenParameters(oldcirc,circ,fpt,nframe);
				if(fillOpacity!==0) {
					doc.circle(cx, cy, r).fillColor(fillColor).fillOpacity(1).fill();	}
				if(strokeOpacity!==0) {
					doc.circle(cx, cy, r).fillOpacity(0).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
				}
			});
		});
		doc.end();
		if(nframe===fpt-1) {
			//fs.copyFileSync(filmfile, bookfile);
		}
	});
	return layers;
},algorithm.draw(p));

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


