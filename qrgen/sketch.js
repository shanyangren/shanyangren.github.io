let qrDate;
let urlInput;
let colorInput;
let backgroundInput;
let button;


function setup() {
  createCanvas(500, 500);
  //输入二维码栏
  urlInput = select('#url');

  colorInput = select('#color');

  backgroundInput = select('#background');

  button =select('#save');
  button.mousePressed(saveQR);//按按钮呼唤saveQR 

  // console.log(qrDate);
}

function draw() {
  background(backgroundInput.value());

  let gap = 13;
//颜色
  fill(colorInput.value());
    //把网址转换成二维码
  qrDate = qr.encodeQR(urlInput.value());

  let w = gap * qrDate.length;
  let h =w;
  
  translate(250-w/2+gap/2,250-h/2+gap/2);
  for (let y = 0; y < qrDate.length; y++) {
    let row = qrDate[y];//列队
    for (let x = 0; x < row.length; x++) {
      let cell = row[x];
      //格子是true的话
      if (cell) {
        circle(x * gap, y * gap, gap);
      }
    }
  }

 
}
//作为图片保存qr
function saveQR(){
  saveCanvas('qr.png');
}