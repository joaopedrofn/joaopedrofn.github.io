//Graphic dimensions
const WIDTH = 600;
const HEIGHT = 400;
//Number of ticks to be plotted
const TICKS = 11;

//Button Object
const button = document.querySelector('#button');
//Textarea Object
const textarea = document.querySelector('#values');
//SVG canvas
const canvas = document.querySelector('#canvas');

const plotAxis = '<path d="M 50 100 v400" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 45 140 h5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 45 100 h5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 45 180 h5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 45 220 h5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 45 260 h5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 45 300 h5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 45 340 h5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 45 380 h5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 45 420 h5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 45 460 h5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 45 500 h5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 50 500 h600" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 50 500 v5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 110 500 v5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 170 500 v5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 230 500 v5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 290 500 v5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 350 500 v5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 410 500 v5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 470 500 v5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 530 500 v5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 590 500 v5" stroke="black" stroke-width="1" fill="none" />'+
'<path d="M 650 500 v5" stroke="black" stroke-width="1" fill="none" />';


button.onclick = () => {
    const text = textarea.value;
    const pairs = text.replace(/ |\n/g, '').split(',');
    const x = pairs.map(pair => parseFloat(pair.split(':')[0]));
    const y = pairs.map(pair => parseFloat(pair.split(':')[1]));

    /*

    (WIDTH-50)/(max-min) = (X-50)/(x-min)
    X-50 = (WIDTH-50)(x-min)/(max-min)
    X = ((WIDTH-50)(x-min)/(max-min))+50

    */

   const xMax = x.reduce((a, b) => Math.max(a, b));
   const xMin = x.reduce((a, b) => Math.min(a, b));
    const xScaled = x.map(n => {
        
        return (((WIDTH+50)-50)*(n-xMin)/(xMax-xMin))+50;
    });

    let sortedX = x.map(a => a);
    sortedX.sort((a, b) => a-b);

    /*

    (100-HEIGHT)/(max-min) = (Y-HEIGHT)/(y-min)
    Y-HEIGHT = (100-HEIGHT)(y-min)/(max-min)
    Y = ((100-HEIGHT)(y-min)/(max-min))+HEIGHT

    */

   const yMax = y.reduce((a, b) => Math.max(a, b));
   const yMin = y.reduce((a, b) => Math.min(a, b));
    const yScaled = y.map(n => {
        
        return ((100-(HEIGHT+100))*(n-yMin)/(yMax-yMin))+(HEIGHT+100);
    });
    let pos = x.indexOf(sortedX[0]);
    let str = `<path stroke="red" stroke-width="1" fill="none" d="M ${xScaled[pos]} ${yScaled[pos]} `;
    for (let i = 1; i < xScaled.length; i++) {
        pos = x.indexOf(sortedX[i]);
        str += `L ${xScaled[pos]} ${yScaled[pos]} `;
    }
    str += '" />';
    

    //TICKS NUMBERS
    let ticksX = [];
    let ticksY = [];

    for(let i = 0; i < TICKS; i++){
        ticksX[i] = (xMax-xMin)*i/(TICKS-1)+xMin;
        ticksY[i] = (yMax-yMin)*i/(TICKS-1)+yMin;
    }

    let ticksStr = '';
    for(let i = 0; i < TICKS; i++){
        ticksStr += `<text x="10" y="${HEIGHT*i/(TICKS-1)+105}">${ticksY[10-i]}</text>`;
        ticksStr += `<text x="${WIDTH*i/(TICKS-1)+35}" y="${HEIGHT+120}">${ticksX[i]}</text>`;
    }

    canvas.innerHTML = plotAxis+str+ticksStr;

    
};