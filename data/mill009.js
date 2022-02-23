const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require('path');
const millfile = path.basename(__filename);
const tools = require("./tools.js");
const prefix = "film";
// const millfile = "mill008.js";
const colorfile = "pigments_bw";
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
	{ nrects: 0, nlines: 6, ncircles: 0 },
	{ nrects: 0, nlines: 6, ncircles: 0 },
	{ nrects: 0, nlines: 6, ncircles: 0 },
	{ nrects: 0, nlines: 6, ncircles: 0 },
	{ nrects: 0, nlines: 6, ncircles: 0 },
];
algorithms = [{
	id: prefix + "1645563781", //date +%s
	draw: p => {	
		let width = p.width;
		let height = p.height;
		let min = p.min, max = p.max;
		let colors = p.colors;
		let cx = width/2;
		let cy = height/2;
		let nc = 0;
		let layers = layersmill.reduce( (layermatrix, layer, layerj) => {
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
					if(layerj<layersmill.length-2) {
						let color1 = colors[++nc%colors.length];
						let color2 = colors[++nc%colors.length];
						// let notcolor1 = colors.filter(c=>color1!==c);
						// let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
						matrix.push({x1:cx,x2:cx,y1:0,y2:height,lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2});;
						matrix.push({x1:0,x2:width,y1:cy,y2:cy,lineWidth:lineWidth[j],dash:space[j],space:dash[j],strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color1});
					}
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
					// let notcolor1 = colors.filter(c=>color1!==c);
					// let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
					let fillOpacity = (layerj<layersmill.length-2 && j === mill.length-2) || (layerj === layersmill.length-1 && j === mill.length-1) ? 0 : 1;
					matrix.push({cx:cx,cy:cy,r:r[j],lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:fillOpacity,strokeColor:color1,fillColor:color2});
					return matrix;
				}, []);
				return layermatrix.concat( { lines, circles, rects: rects } );
			}, []);
		return layers;
	}
},
{
	id: prefix + "1645417729", //date +%s
	draw: p => {	
		let width = p.width;
		let height = p.height;
		let min = p.min, max = p.max;
		let colors = p.colors;
		let cx = width/2;
		let cy = height/2;
		let nc = 0;
		let layers = layersmill.reduce( (layermatrix, layer, layerj) => {
				let mill = [...Array(layer.nrects).keys()];
				let rects = mill.reduce( (matrix,j) => {
					let color1 = colors[++nc%colors.length];
					let lineWidth = mill.map(n=>0);
					let dash = tools.randominteger(0.05*min,0.4*min);
					let space = tools.randominteger(0.1*min,0.4*min);
					let width=0,height=0;
					let x=width/2, y=height/2;
					matrix.push({x,y,width,height,lineWidth:lineWidth[j],dash:dash,space:space,strokeOpacity:0,fillOpacity:1,strokeColor:color1,fillColor:color1});
					return matrix;
				}, []);
				mill = [...Array(layer.nlines).keys()];
				let lineWidth = mill.map(n=>0);
				let dash = mill.map(n=>tools.randominteger(0.1*min,0.6*min)).sort( (a,b) => b-a );
				let space = mill.map(n=>tools.randominteger(0.1*min,0.6*min)).sort( (a,b) => b-a );
				let lines = mill.reduce( (matrix,j) => {
					if(layerj<layersmill.length-2) {
						let color1 = colors[++nc%colors.length];
						let color2 = colors[++nc%colors.length];
						// let notcolor1 = colors.filter(c=>color1!==c);
						// let color2 = notcolor1[tools.randominteger(0,notcolor1.length)];
						matrix.push({x1:cx,x2:cx,y1:0,y2:height,lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:0,strokeColor:color1,fillColor:color2});;
						matrix.push({x1:0,x2:width,y1:cy,y2:cy,lineWidth:lineWidth[j],dash:space[j],space:dash[j],strokeOpacity:1,fillOpacity:0,strokeColor:color2,fillColor:color1});
					}
					return matrix;
				}, []);
				mill = [...Array(layer.ncircles).keys()];
				lineWidth = mill.map(n=>0);
				dash = mill.map(n=>tools.randominteger(0.05*min,0.25*min)).sort( (a,b) => b-a);
				space = mill.map(n=>tools.randominteger(0.05*min,0.8*min));
				let r = mill.map(n=>1);
				let circles = mill.reduce( (matrix,j) => {
					let color1 = colors[++nc%colors.length];
					let color2 = colors[++nc%colors.length];
					let fillOpacity = (layerj<layersmill.length-2 && j === mill.length-2) || (layerj === layersmill.length-1 && j === mill.length-1) ? 0 : 1;
					matrix.push({cx:cx,cy:cy,r:r[j],lineWidth:lineWidth[j],dash:dash[j],space:space[j],strokeOpacity:1,fillOpacity:fillOpacity,strokeColor:color1,fillColor:color2});
					return matrix;
				}, []);
				return layermatrix.concat( { lines, circles, rects: rects } );
			}, []);
		return layers;
	}
},
];
pigmentsets = [
	[ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 2,"red"]],
//	[ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 2,"red"]],
//	[ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 0,"red"]],
//	[ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 0,"red"]],
];
colorsets = pigmentsets.map(set => {
	return tools.reifyWeightedArray(set);
});

const fps=24; // frames per second for ffmpeg
const tpc=4*fps; // ticks per colorset
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
let count = 0;
let numbers = [...Array(10).keys()].map(n=>n.toString());
[...Array(nticks).keys()].reduce( (oldtick, ntick) => {
	if(ntick===nticks-1) {
		layers = algorithms[1].draw(p);
	}
	else {
		let newlayers = algorithms[0].draw(p);
		layers = newlayers.map( (newlayer,j) => {
			return tools.randominteger(0,10)<8 ? newlayer : oldtick[j]; 
		});
	}
	[...Array(fps).keys()].map( (nframe) => {
		file = count.toString().padStart(6, "0") + ".pdf";
		let info = {id:file,timestamp:timestamp,datetimestr:datetimestr,directory:filmdir,npages:nticks,Author:"mctavish",Subject:"generative drawing series",Keywords: "net.art, webs, networks, generative, algorithmic" };
		++count;
		console.log(`count=${count}`);
		let filmfile = prefix + file; 
		let doc = new PDFDocument(
		{ 
			size: [p.width,p.height],
			info: info,
		});
		console.log(`filmfile=${filmfile}`);
		doc.pipe(fs.createWriteStream(filmdir+"/"+filmfile));
		doc.rect(0, 0, p.width, p.height).fillColor(pigments.white).fill();
		if(ntick===2 || ntick===nticks-2) {
			layers = algorithms[0].draw(p);
			oldtick = layers;
		}
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
//			if(ntick===nticks-1) {
//				doc.font("Courier-Bold");
//				doc.fontSize(84);
//				let text = `mctavish : ${datetimeISOstr}`;
//				// doc.fillColor(p.colors[tools.randominteger(0,p.colors.length)]).text(text,p.width*.1, p.height*.1);
//				console.log(text); 
//				let color = p.colors[tools.randominteger(0,p.colors.length)];
//				doc.fillOpacity(1.0).strokeOpacity(0.0).fillColor(color).strokeColor(color).text(text,p.width*.1, p.height*.1);
//			}
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
},algorithms[1].draw(p));

let nextSteps = "";
let nextstepsfile = "nextSteps_"+timestamp+".sh";
nextSteps = nextSteps + `
cd ${filmdir}
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "$\{file/.pdf.png/.png\}"; done;
pdfunite film*{24,48,72,96}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch ${colorfile}
rm *.png
cd ..
echo "'file ./${filmdir}/film.mp4'" >> filmfiles.txt 
`;
nextSteps = nextSteps + `
cp ${nextstepsfile} ${filmdir}/nextSteps.sh
cp ${millfile} ${filmdir}/${millfile}
`;
console.log(`gsutil -m cp -r ${filmdir} gs://filmfactory/`);
console.log(`cd ${filmdir}`);
console.log(`bash ${nextstepsfile}`);

fs.writeFileSync(nextstepsfile, nextSteps, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
});
console.log(__filename);


