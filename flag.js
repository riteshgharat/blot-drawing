const width = 125
const height = 125

setDocDimensions(width, height);

// declaration
const CENT = width / 2;
const CurvePos = (n) => 15 + 60 + 20 * n / 3;

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

drawLines(dome.lines(), { fill: "gold" })
drawLines(base.lines(), { fill: "silver" })
drawLines(pole.lines(), { fill: "silver" })

const ashokaChakra = new bt.Turtle();

ashokaChakra.jump([(CENT + 20), 15 + 60 + 20 / 3 + (20 / 3 - 5) / 2])
  .arc(360, 2.5)

for (let i = 0; i < 24; i++) {
  ashokaChakra.jump([(CENT + 20), 15 + 60 + 20 / 3 + (20 / 3) / 2])
    .forward(2.5)
    .jump([(CENT + 20), 15 + 60 + 20 / 3 + (20 / 3) / 2])
    .right(15)
}

const curve1 = bt.catmullRom([
  [CENT + 0.8, CurvePos(3)],
  [CENT + 40 / 3, CurvePos(3) + 2],
  [CENT + 80 / 3, CurvePos(3) - 2],
  [CENT + 40, CurvePos(3)]
])
const curve2 = bt.catmullRom([
  [CENT + 0.8, CurvePos(2)],
  [CENT + 40 / 3, CurvePos(2) + 2],
  [CENT + 80 / 3, CurvePos(2) - 2],
  [CENT + 40, CurvePos(2)]
])
const curve3 = bt.catmullRom([
  [CENT + 0.8, CurvePos(1)],
  [CENT + 40 / 3, CurvePos(1) + 2],
  [CENT + 80 / 3, CurvePos(1) - 2],
  [CENT + 40, CurvePos(1)]
])
const curve4 = bt.catmullRom([
  [CENT + 0.8, CurvePos(0)],
  [CENT + 40 / 3, CurvePos(0) + 2],
  [CENT + 80 / 3, CurvePos(0) - 2],
  [CENT + 40, CurvePos(0)]
])

const S1 = bt.join([
 [CENT + 0.8, CurvePos(2)],
 [CENT + 0.8, CurvePos(3)]
], curve1, curve2, [
  [CENT + 40, CurvePos(2)],
  [CENT + 40, CurvePos(3)]
]);

const S2 = bt.join([
 [CENT + 0.8, CurvePos(1)],
 [CENT + 0.8, CurvePos(2)]
], curve2, curve3, [
  [CENT + 40, CurvePos(1)],
  [CENT + 40, CurvePos(2)]
]);

const S3 = bt.join([
 [CENT + 0.8, CurvePos(0)],
 [CENT + 0.8, CurvePos(1)]
], curve3, curve4, [
  [CENT + 40, CurvePos(0)],
  [CENT + 40, CurvePos(1)]
]);

drawLines([S1], {fill: "orange"});
drawLines([S2], {fill: "white"});
drawLines([S3], {fill: "green"});

drawLines(ashokaChakra.lines(), { stroke: "blue" })
