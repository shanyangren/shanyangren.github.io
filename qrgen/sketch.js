let qrDate;



function setup() {
  createCanvas(400, 400);

  //把网址转换成二维码
  qrDate = qr.encodeQR('https://google.com');

  console.log(qrDate);
}

function draw() {
  background(21, 200, 120);

  let gap = 10;
//颜色
  fill(50,20,40);

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

