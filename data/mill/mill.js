const PDFDocument = require("pdfkit");
// transitions: ["1647628171", "1647628291", "1647628791"]
// tweens: smooth, stay on first parameter set, more jerky
const fs = require("fs");
const path = require("path");
const millfile = path.basename(__filename);
const tools = require("./tools.js");
const tweens = require("./tweens.js");
const transitions = require("./transitions.js");
const algorithms = require("./algorithms.js");
// const [nodepath,codepath,algorithmid="1645417729",seedid="1647279261"] = process.argv;
const [nodepath,codepath,scoreid="score1647644856"] = process.argv;
const prefix = "film";
const datetime = new Date();
const timestamp = datetime.getTime();
const score = require(`./${scoreid}`)(timestamp);
const datetimestr = datetime.toDateString();
const datetimeISOstr = datetime.toISOString();

let filmseqdir = `filmseq${timestamp}`;
if (!fs.existsSync(filmseqdir)){
    fs.mkdirSync(filmseqdir);
}

let
nextsteps = "";
let nextstepsfile = `nextsteps${filmseqdir}.sh`;
// for each film in score ...
score.films.forEach( (film,f) => {
	console.log("f="+f);
	console.log("film.algorithm="+film.algorithm);
	console.log("film.start="+film.start);
	console.log("film.end="+film.end);
	let pigments = score.pigments;
	colorsets = tools.reifyWeightedArray(film.pigmentset);
	console.log(`colorsets=${colorsets}`);
	const fps=24; // frames per second for ffmpeg
	const nticks=film.nticks; 
	let filmdir = `film${f.toString.padStart(3, "0")}`;
	if (!fs.existsSync(filmdir)){
		fs.mkdirSync(filmdir);
	}

	let colors = tools.shufflearray(colorsets);
	let p = {
		width: 1920,
		height: 1080,
		min: 1080,
		max: 1920,
		fsize: 128,
		layersmill: film.layersmill,
		colors: colors
	};
	let count = 0;
	let numbers = [...Array(10).keys()].map(n=>n.toString());
	//console.log(JSON.stringify(film));
	//console.log("start="+JSON.stringify(transitions.filter(x=>x.id===film.start)[0]));
	//console.log("end="+JSON.stringify(transitions.filter(x=>x.id===film.end)[0]));
	//console.log("algorithms="+JSON.stringify(algorithms.filter(x=>x.id===film.algorithm)[0]));
	[...Array(nticks).keys()].reduce( (oldtick, ntick) => {
		//console.log("ntick="+ntick);
		//console.log("oldtick = "+JSON.stringify(oldtick));
		if(ntick===nticks-1) {
			layers = transitions.filter(x=>x.id===film.end)[0].draw(p);
		}
		else {
			let newlayers = algorithms.filter(x=>x.id===film.algorithm)[0].draw(p);
		//console.log("newlayers = "+JSON.stringify(newlayers));
			//let newlayers = algorithms[film.algorithm].draw(p);
			layers = newlayers.map( (newlayer,j) => {
				return film.changelayer(j,newlayers.length,ntick,nticks) ? newlayer : oldtick[j]; 
			});
		}
		[...Array(fps).keys()].map( (nframe) => {
			file = count.toString().padStart(6, "0") + ".pdf";
			let info = {id:file,timestamp:timestamp,datetimestr:datetimestr,directory:filmdir,npages:nticks,Author:"mctavish",Subject:"generative drawing series",Keywords: "net.art, webs, networks, generative, algorithmic" };
			++count;
			let filmfile = `frame${file}`;
			let doc = new PDFDocument(
			{ 
				size: [p.width,p.height],
				info: info,
			});
			doc.pipe(fs.createWriteStream(filmdir+"/"+filmfile));
			doc.rect(0, 0, p.width, p.height).fillColor(pigments.white).fill();
			/*
			if(ntick===2 || ntick===nticks-2) {
				layers = algorithms[film.algorithm].draw(p);
				oldtick = layers;
			}
			*/
			let ntween =film.tween(ntick,nticks); 
			layers.forEach( (layer,l) => {
				let oldlayer = oldtick[l];
				layer.rects.forEach( (rect,j) => {
					let oldrect = oldlayer.rects[j];
					let nextp = tweens[ntweens](oldrect,rect,fps,nframe);
					let { x, y, width, height, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = tweens[n](oldrect,rect,fps,nframe);
					if(fillOpacity!==0) {
						doc.rect(x, y, width, height).fillColor(fillColor).fill();
					}
					if(strokeOpacity!==0) {
						doc.rect(x, y, width, height).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
					}
				});
				layer.lines.forEach( (line,j) => {
					let oldline = oldlayer.lines[j];
					//console.log("**=oldline"+JSON.stringify(oldline));
					let nextp = tweens[ntween](oldline,line,fps,nframe);
					//let { x1, x2, y1, y2, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = tweens[film.tween(ntick,nticks)](oldline,line,fps,nframe);
					let { x1, x2, y1, y2, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = nextp; 
					doc.moveTo(x1,y1).lineTo(x2,y2).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
				});
				layer.circles.forEach( (circ,j) => {
					let oldcirc = oldlayer.circles[j];
					let nextp = tweens[ntween](oldcirc,circ,fps,nframe);
					let { cx, cy, r, lineWidth, dash, space, strokeOpacity, fillOpacity, strokeColor, fillColor } = tweens[n](oldcirc,circ,fps,nframe);
					if(fillOpacity!==0) {
						doc.circle(cx, cy, r).fillColor(fillColor).fillOpacity(1).fill();	
					}
					if(strokeOpacity!==0) {
						doc.circle(cx, cy, r).fillOpacity(0).strokeColor(strokeColor).dash(dash, {space:space}).lineWidth(lineWidth).stroke();
					}
				});
			});
			if(film.text!=="") {
				let opacity=1.0;
				if(count>nticks*fps-10) {
					opacity=0.0+(nticks*fps-count)*0.1;
				}
				else if(count<10) {
					opacity=0.0+count*0.1;
				}
				else {
					opacity=1.0;
				}
				doc.font("Courier-Bold");
				let fsize = p.fsize;
				doc.fontSize(fsize);
				let color = p.colors[tools.randominteger(0,p.colors.length)];
				doc.fillOpacity(opacity).strokeOpacity(opacity).fillColor(pigments.red,opacity).strokeColor(pigments.red,opacity).text(film.text,p.width*.0,p.height*.3,{align: 'center', width:p.width,height:p.height});
				if(film.text2!=="") {
					doc.fontSize(fsize*.6);
					// doc.moveDown();
					doc.fillOpacity(opacity).strokeOpacity(opacity).fillColor(pigments.red,opacity).strokeColor(pigments.red,opacity).text(film.text2,p.width*.0,p.height*.6,{align: 'center', width:p.width,height:p.height});
				}
			}
			doc.end();
		});
		return layers;
	},transitions.filter(x=>x.id===film.start)[0].draw(p) );

	nextsteps = nextsteps + `
	cd ${filmdir}
	for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
	for file in *pdf.png; do mv "$file" "$\{file/.pdf.png/.png\}"; done;
	pdfunite film*{24,48,72,96}.pdf book.pdf
	ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
	rm *.png
	cd ..
	echo "file './${filmdir}/film.mp4'" >> filmfiles.txt 
	`;
});
nextsteps = nextsteps + `
cp ${nextstepsfile} ${filmseqdir}/nextsteps.sh
cp ${millfile} ${filmseqdir}/${millfile}
`;
console.log(`gsutil -m cp -r ${filmseqdir} gs://filmfactory/`);
console.log(`cd ${filmseqdir}`);
console.log(`bash ${nextstepsfile}`);
fs.writeFileSync(nextstepsfile, nextsteps, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
});
