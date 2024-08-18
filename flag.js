const width = 125
const height = 125

setDocDimensions(width, height);

const pole = new bt.Turtle();
pole.jump([(width - 2.5) / 2, 15])
  .left(90)
  .forward(80)
  .right(90)
  .forward(2)
  .right(90)
  .forward(80)

const base = new bt.Turtle();
base.jump([(width - 30) / 2, 0])
  .left(90)
  .forward(5)
  .right(90)
  .forward(5)
  .left(90)
  .forward(5)
  .right(90)
  .forward(5)
  .left(90)
  .forward(5)
  .right(90)
  .forward(10)

  .right(90)
  .forward(5)
  .left(90)
  .forward(5)
  .right(90)
  .forward(5)
  .left(90)
  .forward(5)
  .right(90)
  .forward(5)
  .left(90)

const dome = new bt.Turtle();
dome.jump([(width - 0.5) / 2, (15 + 80)])
  .arc(360, 2.5)

const flagS1 = new bt.Turtle();
const flagS2 = new bt.Turtle();
const flagS3 = new bt.Turtle();

flagS1.jump([width / 2, 15 + 60])
  .forward(40)
  .left(90)
  .forward(20 / 3)
  .left(90)
  .forward(40)

flagS2.jump([width / 2, 15 + 60 + 20 / 3])
  .forward(40)
  .left(90)
  .forward(20 / 3)
  .left(90)
  .forward(40)

flagS3.jump([width / 2, 15 + 60 + 40 / 3])
  .forward(40)
  .left(90)
  .forward(20 / 3)
  .left(90)
  .forward(40)

const ashokaChakra = new bt.Turtle();

ashokaChakra.jump([((width / 2) + 20), 15 + 60 + 20/3 + (20/3-5)/2])
.arc(360, 2.5)

drawLines(flagS1.lines(), { fill: "green" })
drawLines(flagS2.lines(), { fill: "white" })
drawLines(flagS3.lines(), { fill: "orange" })

drawLines(ashokaChakra.lines(), {fill: "blue"})

drawLines(dome.lines(), { fill: "gold" })
drawLines(base.lines(), { fill: "silver" })
drawLines(pole.lines(), { fill: "silver" })
