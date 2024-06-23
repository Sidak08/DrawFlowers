const width = 125
const height = 125

setDocDimensions(width, height)
function getCirclePoints(h, k, r, n) {
  const points = [];
  const angleStep = (2 * Math.PI) / n; // Angle between points

  for (let i = 0; i < n; i++) {
    const angle = i * angleStep;
    const x = h + r * Math.cos(angle);
    const y = k + r * Math.sin(angle);
    points.push({ x, y });
  }

  return points;
}

const genRanCir = (x, y, r, ran) => {
  const circle = new bt.Turtle()
  circle.jump([x, y])
  circle.forward(r)
  circle.left(90)
  circle.forward(r)
  circle.left(90)
  circle.forward(r)
  circle.left(90)
  circle.forward(r)
  const tmp = bt.catmullRom(circle.lines()[0])
  const finCircle = bt.catmullRom(bt.resample([tmp], ran)[0])
  return finCircle
}

const genPetal = (x, y, r, num) => {
  r = r / 1.5
  x = x + r * 0.75
  y = y + r * 0.75
  const circlePoints = getCirclePoints(x, y, r, num);
  const outerCircPoints = getCirclePoints(x, y, r + 20, num);
  for (let i = 0; i < circlePoints.length; i++) {
    let xCor = circlePoints[i].x
    let yCor = circlePoints[i].y
    let xOutCor = outerCircPoints[i].x
    let yOutCor = outerCircPoints[i].y
    
    const petal = new bt.Turtle()
    petal.jump([xCor, yCor])
    petal.goTo([x,y)
    drawLines(petal.lines())
  }
}


const x = 40
const y = 40
const r = 10

const a = genRanCir(x, y, r, Math.floor(Math.random() * 10))
genPetal(x, y, r, 5)

// bt.translate([a], [20, 20]) use full for later
drawLines([a])




