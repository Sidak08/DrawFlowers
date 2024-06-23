const width = 125
const height = 125

setDocDimensions(width, height)
const innerCircle = new bt.Turtle()
innerCircle.jump([42.5, 42.5])
innerCircle.forward(20)
innerCircle.left(90)
innerCircle.forward(20)
innerCircle.left(90)
innerCircle.forward(20)
innerCircle.left(90)
innerCircle.forward(20)


const curve = bt.catmullRom(innerCircle.lines()[0])
console.log(bt.resample([curve], 8))
const secondCurve = bt.catmullRom(bt.resample([curve], 10)[0])
drawLines([secondCurve])
