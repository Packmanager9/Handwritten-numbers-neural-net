

// let clicks = -1

// let img0 = []
// for (let i = 0; i < 999; i++) {
//     img0.push(Object.assign(new Image(), { 'src': `0/0-${i}.jpg` }));
// }
// let img1 = []
// for (let i = 0; i < 999; i++) {
//     img1.push(Object.assign(new Image(), { 'src': `1/1-${i}.jpg` }));
// }
// let img2 = []
// for (let i = 0; i < 999; i++) {
//     img2.push(Object.assign(new Image(), { 'src': `2/2-${i}.jpg` }));
// }
// let img3 = []
// for (let i = 0; i < 999; i++) {
//     img3.push(Object.assign(new Image(), { 'src': `3/3-${i}.jpg` }));
// }
// let img4 = []
// for (let i = 0; i < 999; i++) {
//     img4.push(Object.assign(new Image(), { 'src': `4/4-${i}.jpg` }));
// }
// let img5 = []
// for (let i = 0; i < 999; i++) {
//     img5.push(Object.assign(new Image(), { 'src': `5/5-${i}.jpg` }));
// }
// let img6 = []
// for (let i = 0; i < 999; i++) {
//     img6.push(Object.assign(new Image(), { 'src': `6/6-${i}.jpg` }));
// }
// let img7 = []
// for (let i = 0; i < 999; i++) {
//     img7.push(Object.assign(new Image(), { 'src': `7/7-${i}.jpg` }));
// }
// let img8 = []
// for (let i = 0; i < 999; i++) {
//     img8.push(Object.assign(new Image(), { 'src': `8/8-${i}.jpg` }));
// }
// let img9 = []
// for (let i = 0; i < 999; i++) {
//     img9.push(Object.assign(new Image(), { 'src': `9/9-${i}.jpg` }));
// }

        // let canvas
        let canvas = document.getElementById('canvas') //getting canvas from document
        let canvas_context

        // const undobtn = document.getElementById("undo");
        // const redobtn = document.getElementById("redo");
        // const randomcolor = document.getElementById("randomcolor");
        // const rotator = document.getElementById("rot");
        const color = document.getElementById("color");
        // const size = document.getElementById("size");

let clicks = -1
let flex = canvas.getBoundingClientRect();
let tip = {}
let xs
let ys

let undos = []

let reandomcolormaker = -1


// undobtn.onclick = undofunc
// redobtn.onclick = redofunc
// randomcolor.onclick = randomcolorfunc

let bigcolor = "white"
// rotator.addEventListener('input', function () {
//     middle.cuts = rotator.value
//     middle.cutter = (Math.PI*2)/middle.cuts
//   }, false);

//   size.addEventListener('input', function () {
//     bigradius = size.value/1
//   }, false);

  color.addEventListener('input', function () {
    bigcolor = color.value
  }, false);


let oldcirc = {x: 350, y:350}
let circ = {x: 350, y:350}


class Center{
    constructor(){
        this.body = new Bosscircle(canvas.width*.5, canvas.height*.5, 0, "transparent")
        this.cuts = 1
        this.angle = 0
        this.nodes = []
        this.cutnodes = []
        this.angleRadians = 0
        this.cutter = 0
        this.cutter = (Math.PI*2)/this.cuts
    }
    getCut(point){
        this.angleRadians = Math.atan2(this.body.y - point.y, this.body.x - point.x);
        let cutter = (Math.PI*2)/this.cuts
        this.cutter = (Math.PI*2)/this.cuts
        // console.log(cutter, this.angleRadians)
        for(let t = 0; t<this.cuts; t++){
            if(this.angleRadians > 0){
                if(t*cutter < this.angleRadians && this.angleRadians < ((t+1)*cutter)){
                    return t
                }
            }else{
                if(t*-cutter > this.angleRadians && this.angleRadians > ((t-1)*-cutter)){
                    return t
                }
            }
        }

    }
}


class Bosscircle{
    constructor(x, y, radius, color, xmom = 0, ymom = 0){
        this.height = 0
        this.width = 0
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.xmom = xmom
        this.ymom = ymom
    }       
     draw(){   
        canvas_context.fillStyle = this.color
        canvas_context.lineWidth = 0
        canvas_context.strokeStyle = this.color
        canvas_context.beginPath();
        canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
        canvas_context.fill()
        canvas_context.stroke(); 

    }
    spindraw(point){

        this.angleRadians = Math.atan2(this.y - middle.body.y, this.x - middle.body.x);
        let xhold = this.x
        let yhold = this.y

        this.angleRadiansp = Math.atan2(point.y - middle.body.y, point.x - middle.body.x);
        let xholdp = point.x
        let yholdp = point.y
        xhold = Math.abs(this.x-middle.body.x)
        yhold = Math.abs(this.y- middle.body.y)
        xholdp = Math.abs(point.x-middle.body.x)
        yholdp = Math.abs(point.y- middle.body.y)
        let link = new Line(xhold, 0, 0, yhold, "red", 1)
        let linkp = new Line(xholdp, 0, 0, yholdp, "red", 1)
        // link.draw()
        link = link.hypotenuse()
        linkp = linkp.hypotenuse()
        // (new Line(xhold, 0, 0, yhold, "red", 1)).draw()
        for(let t = 0;t<middle.cuts;t++){
            canvas_context.fillStyle = this.color
            canvas_context.lineWidth = 0
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            canvas_context.arc(middle.body.x+(Math.cos((middle.cutter*t)+this.angleRadians)*link), middle.body.y+(Math.sin((middle.cutter*t)+this.angleRadians)*link), this.radius, 0, (Math.PI*2), true)
            canvas_context.fill()
            canvas_context.stroke(); 
            let line = new Line(middle.body.x+(Math.cos((middle.cutter*t)+this.angleRadiansp)*linkp), middle.body.y+(Math.sin((middle.cutter*t)+this.angleRadiansp)*linkp),middle.body.x+(Math.cos((middle.cutter*t)+this.angleRadians)*link), middle.body.y+(Math.sin((middle.cutter*t)+this.angleRadians)*link),  this.color, bigradius*2)
            line.draw()


        }

    }
    move(){
        this.x += this.xmom
        this.y += this.ymom
        if(this.x > canvas.width){
            this.x = canvas.width
            if(this.xmom > 0){
                this.xmom *=-1
            }
        }
        if(this.y > canvas.height){
            this.y = canvas.height
            if(this.ymom > 0){
                this.ymom *=-1
            }
        }
        if(this.x < 0){
            this.x = 0
            if(this.xmom < 0){
                this.xmom *=-1
            }
        }
        if(this.y < 0){
            this.y = 0
            if(this.ymom < 0){
                this.ymom *=-1
            }
        }
    }
}


let middle = new Center()


class Line{
    constructor(x,y, x2, y2, color, width){
        this.x1 = x
        this.y1 = y
        this.x2 = x2
        this.y2 = y2
        this.color = color
        this.width = width
    }
    hypotenuse(){
        const xdif = this.x1-this.x2
        const ydif = this.y1-this.y2
        const hypotenuse = (xdif*xdif)+(ydif*ydif)
        return Math.sqrt(hypotenuse)
    }
    draw(){
        canvas_context.strokeStyle = this.color
        canvas_context.lineWidth = this.width
        canvas_context.beginPath()
        canvas_context.moveTo(this.x1, this.y1)         
        canvas_context.lineTo(this.x2, this.y2)
        canvas_context.stroke()
        canvas_context.lineWidth = 1
    }
}
function undofunc(){

    canvas_context.clearRect(0,0,canvas.width, canvas.height)
    canvas_context.drawImage(undos[clicks],0,0)
    clicks--
    if(clicks < 0){
        clicks = 0
    }

}
function randomcolorfunc(){
    reandomcolormaker*=-1
    if(reandomcolormaker == 1){
        randomcolor.innerText = "Random Color is on"
    }else{
        randomcolor.innerText = "Random Color is off"
    }
}

function redofunc(){

    canvas_context.clearRect(0,0,canvas.width, canvas.height)
    canvas_context.drawImage(undos[clicks],0,0)
    clicks++
    if(clicks > undos.length-1){
        clicks = undos.length-1
    }

}

window.addEventListener('keydown', e => {
    if(e.key == "x"){
        canvas_context.clearRect(0,0,canvas.width, canvas.height)
    }


});
window.addEventListener('DOMContentLoaded', (event) => {
    window.setTimeout(function () {

        let keysPressed = {}
        function setUp(canvas_pass, style = "#000000") {
            canvas = canvas_pass
            canvas_context = canvas.getContext('2d');
            sees_context = sees.getContext('2d');
            sees.style.background = style
            canvas.style.background = style
            window.setInterval(function () {
                main()
            }, 1)
            document.addEventListener('keydown', (event) => {
                keysPressed[event.key] = true;


            if(keysPressed['f']){
                filterselected++
                filtershow.innerText = "Filter: " +  filterselected
                if(filterselected == 10){
                    filterselected = -1
                    filtershow.innerText = "Filter: " +  "auto"
                }
                
            }

            });
            document.addEventListener('keyup', (event) => {
                delete keysPressed[event.key];
            });
        }
        function getRandomColor() { // random color
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[(Math.floor(Math.random() * 16) + 0)];
            }
            return color;
        }
        let setup_canvas = document.getElementById('canvas') //getting canvas from document
        let sees = document.getElementById('sees') //getting canvas from document
        let filtershow = document.getElementById('filter') //getting canvas from document
        let numberprint = document.getElementById('number') //getting canvas from document
        let example_canvas = document.getElementById('example') //getting canvas from document
        setUp(setup_canvas) // setting up canvas refrences, starting timer. 


        example_context = example_canvas.getContext('2d');

        example_canvas.style.background = "black"

        example_context.fillStyle = "white"
        // example_context.fillRect(6,6,16,16)
        // example_context.arc(14,14,8,0,Math.PI*2, true)
        // example_context.fill()

        let variableshape = -1

        let imgindex = 0
        let variablenumber = -1
        function draw0() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img0[imgindex+71], 0, 0)
            variablenumber = 0
        }
        function draw1() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img1[imgindex+71], 0, 0)
            variablenumber = 1
        }
        function draw2() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img2[imgindex+71], 0, 0)
            variablenumber = 2
        }
        function draw3() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img3[imgindex+71], 0, 0)
            variablenumber = 3
        }
        function draw4() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img4[imgindex+71], 0, 0)
            variablenumber = 4
        }
        function draw5() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img5[imgindex+71], 0, 0)
            variablenumber = 5
        }
        function draw6() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img6[imgindex+71], 0, 0)
            variablenumber = 6
        }
        function draw7() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img7[imgindex+71], 0, 0)
            variablenumber = 7
        }
        function draw8() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img8[imgindex+71], 0, 0)
            variablenumber = 8
        }
        function draw9() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img9[imgindex+71], 0, 0)
            variablenumber = 9
            imgindex++
            imgindex %= 999
        }
        function drawRectangle() {
            example_context.clearRect(0, 0, 28, 28)
            let scalar = Math.random() + .2
            example_context.fillRect(6, 6, 16 * scalar, 16 * scalar)
            variableshape = 0
        }
        function drawCircle() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.beginPath()
            let scalar = Math.random() + .2
            example_context.arc(14, 14, 8 * scalar, 0, Math.PI * 2, true)
            example_context.fill()
            example_context.closePath()
            variableshape = 1
        }
        function drawTriangle() {
            example_context.clearRect(0, 0, 28, 28)
            let scalar = Math.random() + .2
            let triangle = new Polygon(14, 14, scalar * 11, 3)
            triangle.angle = Math.random() * Math.PI * 2
            triangle.draw()
            variableshape = 2
        }

        class Circle {
            constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
                this.x = x
                this.y = y
                this.radius = radius
                this.color = color
                this.xmom = xmom
                this.ymom = ymom
                this.friction = friction
                this.reflect = reflect
                this.strokeWidth = strokeWidth
                this.strokeColor = strokeColor
            }
            draw() {
                canvas_context.lineWidth = this.strokeWidth
                canvas_context.strokeStyle = this.color
                canvas_context.beginPath();
                if (this.radius > 0) {
                    canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                    canvas_context.fillStyle = this.color
                    canvas_context.fill()
                    canvas_context.stroke();
                } else {
                    console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
                }
            }
            move() {
                if (this.reflect == 1) {
                    if (this.x + this.radius > canvas.width) {
                        if (this.xmom > 0) {
                            this.xmom *= -1
                        }
                    }
                    if (this.y + this.radius > canvas.height) {
                        if (this.ymom > 0) {
                            this.ymom *= -1
                        }
                    }
                    if (this.x - this.radius < 0) {
                        if (this.xmom < 0) {
                            this.xmom *= -1
                        }
                    }
                    if (this.y - this.radius < 0) {
                        if (this.ymom < 0) {
                            this.ymom *= -1
                        }
                    }
                }
                this.x += this.xmom
                this.y += this.ymom
            }
            unmove() {
                if (this.reflect == 1) {
                    if (this.x + this.radius > canvas.width) {
                        if (this.xmom > 0) {
                            this.xmom *= -1
                        }
                    }
                    if (this.y + this.radius > canvas.height) {
                        if (this.ymom > 0) {
                            this.ymom *= -1
                        }
                    }
                    if (this.x - this.radius < 0) {
                        if (this.xmom < 0) {
                            this.xmom *= -1
                        }
                    }
                    if (this.y - this.radius < 0) {
                        if (this.ymom < 0) {
                            this.ymom *= -1
                        }
                    }
                }
                this.x -= this.xmom
                this.y -= this.ymom
            }
            frictiveMove() {
                if (this.reflect == 1) {
                    if (this.x + this.radius > canvas.width) {
                        if (this.xmom > 0) {
                            this.xmom *= -1
                        }
                    }
                    if (this.y + this.radius > canvas.height) {
                        if (this.ymom > 0) {
                            this.ymom *= -1
                        }
                    }
                    if (this.x - this.radius < 0) {
                        if (this.xmom < 0) {
                            this.xmom *= -1
                        }
                    }
                    if (this.y - this.radius < 0) {
                        if (this.ymom < 0) {
                            this.ymom *= -1
                        }
                    }
                }
                this.x += this.xmom
                this.y += this.ymom
                this.xmom *= this.friction
                this.ymom *= this.friction
            }
            frictiveunMove() {
                if (this.reflect == 1) {
                    if (this.x + this.radius > canvas.width) {
                        if (this.xmom > 0) {
                            this.xmom *= -1
                        }
                    }
                    if (this.y + this.radius > canvas.height) {
                        if (this.ymom > 0) {
                            this.ymom *= -1
                        }
                    }
                    if (this.x - this.radius < 0) {
                        if (this.xmom < 0) {
                            this.xmom *= -1
                        }
                    }
                    if (this.y - this.radius < 0) {
                        if (this.ymom < 0) {
                            this.ymom *= -1
                        }
                    }
                }
                this.xmom /= this.friction
                this.ymom /= this.friction
                this.x -= this.xmom
                this.y -= this.ymom
            }
            isPointInside(point) {
                this.areaY = point.y - this.y
                this.areaX = point.x - this.x
                if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                    return true
                }
                return false
            }
            doesPerimeterTouch(point) {
                this.areaY = point.y - this.y
                this.areaX = point.x - this.x
                if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                    return true
                }
                return false
            }
        }
        class Polygon {
            constructor(x, y, size, color, sides = 3, xmom = 0, ymom = 0, angle = 0, reflect = 0) {
                if (sides < 2) {
                    sides = 2
                }
                this.reflect = reflect
                this.xmom = xmom
                this.ymom = ymom
                this.body = new Circle(x, y, size - (size * .293), "transparent")
                this.nodes = []
                this.angle = angle
                this.size = size
                this.color = color
                this.angleIncrement = (Math.PI * 2) / sides
                this.sides = sides
                for (let t = 0; t < sides; t++) {
                    let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                    this.nodes.push(node)
                    this.angle += this.angleIncrement
                }
            }
            isPointInside(point) { // rough approximation
                this.body.radius = this.size - (this.size * .293)
                if (this.sides <= 2) {
                    return false
                }
                this.areaY = point.y - this.body.y
                this.areaX = point.x - this.body.x
                if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.body.radius * this.body.radius)) {
                    return true
                }
                return false
            }
            move() {
                if (this.reflect == 1) {
                    if (this.body.x > canvas.width) {
                        if (this.xmom > 0) {
                            this.xmom *= -1
                        }
                    }
                    if (this.body.y > canvas.height) {
                        if (this.ymom > 0) {
                            this.ymom *= -1
                        }
                    }
                    if (this.body.x < 0) {
                        if (this.xmom < 0) {
                            this.xmom *= -1
                        }
                    }
                    if (this.body.y < 0) {
                        if (this.ymom < 0) {
                            this.ymom *= -1
                        }
                    }
                }
                this.body.x += this.xmom
                this.body.y += this.ymom
            }
            draw() {
                this.nodes = []
                this.angleIncrement = (Math.PI * 2) / this.sides
                this.body.radius = this.size - (this.size * .293)
                for (let t = 0; t < this.sides; t++) {
                    let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                    this.nodes.push(node)
                    this.angle += this.angleIncrement
                }
                example_context.strokeStyle = this.color
                example_context.fillStyle = this.color
                example_context.lineWidth = 0
                example_context.beginPath()
                example_context.moveTo(this.nodes[0].x, this.nodes[0].y)
                for (let t = 1; t < this.nodes.length; t++) {
                    example_context.lineTo(this.nodes[t].x, this.nodes[t].y)
                }
                example_context.lineTo(this.nodes[0].x, this.nodes[0].y)
                example_context.fill()
                example_context.stroke()
                example_context.closePath()
            }
        }
        class Perceptron {
            constructor(inputs) {
                this.inputs = [...inputs]
                this.weights = []
                this.bias = (Math.random() - .5) * 10
                for (let t = 0; t < this.inputs.length; t++) {
                    this.weights.push(this.weight())
                }
                this.value = this.compute()
            }
            compute() {
                let value = this.bias
                for (let t = 0; t < this.inputs.length; t++) {
                    value += this.inputs[t] * this.weights[t]
                }
                return value
            }
            weight() {
                return (Math.random() - .5) * 2
            }
            clone(inputs) {
                let clone = new Perceptron(inputs)
                clone.inputs = [...inputs]
                clone.weights = [...this.weights]
                clone.bias = this.bias
                clone.value = clone.compute()
                return clone
            }
            mutate() {
                for (let t = 0; t < this.weights.length; t++) {
                    if (Math.random() < mutationrate) {
                        this.weights[t] += (.2 * (Math.random() - .5))
                    }
                    if (Math.random() < mutationrate) {
                        this.weights[t] *= -1
                    }
                    if (Math.random() < mutationrate) {
                        // this.weights[t] *= 0
                    }
                    if (Math.random() < mutationrate) {
                        this.weights[t] = this.weight()
                    }
                    if (Math.random() < mutationrate) {
                        this.weights[t] *= 1 + ((Math.random() - .5) * .5)
                    }
                }

                if (Math.random() < mutationrate) {
                    this.bias = (Math.random() - .5) * 10
                }
                if (Math.random() < mutationrate) {
                    this.bias += (.1 * (Math.random() - .5))
                }
                if (Math.random() < mutationrate) {
                    this.bias *= 1 + ((Math.random() - .5) * .5)
                }
                if (Math.random() < mutationrate) {
                    this.bias = 0
                }
                if (Math.random() < mutationrate) {
                    this.bias *= -1
                }
            }
            smallmutate() {
                for (let t = 0; t < this.weights.length; t++) {
                    if (Math.random() < mutationratesmall) {
                        this.weights[t] += (.2 * (Math.random() - .5))
                    }
                    if (Math.random() < mutationratesmall) {
                        this.weights[t] *= -1
                    }
                    if (Math.random() < mutationratesmall) {
                        // this.weights[t] *= 0
                    }
                    if (Math.random() < mutationratesmall) {
                        this.weights[t] = this.weight()
                    }
                    if (Math.random() < mutationratesmall) {
                        this.weights[t] *= 1 + ((Math.random() - .5) * .5)
                    }
         
                }
                if (Math.random() < mutationratesmall) {
                    this.bias = (Math.random() - .5) * 10
                }
                if (Math.random() < mutationratesmall) {
                    this.bias += (.02 * (Math.random() - .5))
                }
                if (Math.random() < mutationratesmall) {
                    this.bias *= 1 + ((Math.random() - .5) * .5)
                }
                if (Math.random() < mutationratesmall) {
                    // this.bias = 0
                }
                if (Math.random() < mutationratesmall) {
                    this.bias *= -1
                }
            }
            micromutate() {
                for (let t = 0; t < this.weights.length; t++) {
                    if (Math.random() < mutationratemicro) {
                        this.weights[t] += (.2 * (Math.random() - .5))
                    }
                    if (Math.random() < mutationratemicro) {
                        this.weights[t] *= -1
                    }
                    if (Math.random() < mutationratemicro) {
                        this.weights[t] *= 0
                    }
                    if (Math.random() < mutationratemicro) {
                        this.weights[t] = this.weight()
                    }
                    if (Math.random() < mutationratemicro) {
                        this.weights[t] *= 1 + ((Math.random() - .5) * .5)
                    }
     
                }
                if (Math.random() < mutationratemicro) {
                    this.bias = (Math.random() - .5) * 10
                }
                if (Math.random() < mutationratemicro) {
                    this.bias += (.02 * (Math.random() - .5))
                }
                if (Math.random() < mutationratemicro) {
                    this.bias *= 1 + ((Math.random() - .5) * .5)
                }
                if (Math.random() < mutationratemicro) {
                    this.bias = 0
                }
                if (Math.random() < mutationratemicro) {
                    this.bias *= -1
                }
            }
            bigmutate() {
                for (let t = 0; t < this.weights.length; t++) {
                    if (Math.random() < mutationratebig) {
                        this.weights[t] += (.2 * (Math.random() - .5))
                    }
                    if (Math.random() < mutationratebig) {
                        this.weights[t] *= -1
                    }
                    if (Math.random() < mutationratebig) {
                        // this.weights[t] *= 0
                    }
                    if (Math.random() < mutationratebig) {
                        this.weights[t] = this.weight()
                    }
                    if (Math.random() < mutationratebig) {
                        this.weights[t] *= 1 + ((Math.random() - .5) * .5)
                    }
             
                }
                if (Math.random() < mutationratebig) {
                    this.bias = (Math.random() - .5) * 10
                }
                if (Math.random() < mutationratebig) {
                    this.bias += (.2 * (Math.random() - .5))
                }
                if (Math.random() < mutationratebig) {
                    this.bias *= 1 + ((Math.random() - .5) * .5)
                }
                if (Math.random() < mutationratebig) {
                    // this.bias = 0
                }
                if (Math.random() < mutationratebig) {
                    this.bias *= -1
                }
            }
        }
        class GenNN {
            constructor(inputs, layercount, layersetupArray, outputs = 2, override = 0) {
                if (override == 0) {
                    this.name = getRandomColor()
                    this.fitness = 0
                    this.correct = 0
                    this.wrong = 0
                    this.parent = this.name
                    this.generation = 0
                    this.inputs = [...inputs]
                    this.layercount = layercount
                    this.layersetupArray = [...layersetupArray]
                    this.tempinputs = [...inputs]
                    this.structure = []
                    for (let t = 0; t < this.layercount; t++) {
                        let nodes = []
                        for (let k = 0; k < this.layersetupArray[t]; k++) {
                            let node = new Perceptron([...this.tempinputs])
                            nodes.push(node)
                        }
                        this.structure.push(nodes)
                        this.tempinputs = []
                        this.tempclone = []
                        for (let g = 0; g < this.structure[this.structure.length - 1].length; g++) {
                            this.tempinputs.push(this.structure[this.structure.length - 1][g].value)
                            this.tempclone.push(this.structure[this.structure.length - 1][g].value)
                        }
                        for (let n = 0; n < this.tempinputs.length; n++) {
                            this.tempinputs[n] = this.normalize(this.tempinputs[n], Math.min(...this.tempclone), Math.max(...this.tempclone)) //optional
                        }
                    }
                    this.outputs = this.layersetupArray[this.layersetupArray.length - 1]
                    this.outputMagnitudes = []
                    this.outputMagnitudesClone = []
                    this.outputMagnitudesCloneSpare = []
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudes.push(this.tempclone[t])
                        this.outputMagnitudesClone.push(this.tempclone[t])
                        this.outputMagnitudesCloneSpare.push(this.tempclone[t])
                    }

                    this.outputSum = 0
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudesClone[t] = this.normalize(this.outputMagnitudesClone[t], Math.min(...this.outputMagnitudesCloneSpare), Math.max(...this.outputMagnitudesCloneSpare))
                    }
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudes[t] = this.normalize(this.outputMagnitudes[t], Math.min(...this.outputMagnitudesCloneSpare), Math.max(...this.outputMagnitudesCloneSpare))
                        this.outputMagnitudes[t] = this.truenormalize(this.outputMagnitudes[t], Math.min(...this.outputMagnitudesClone), Math.max(...this.outputMagnitudesClone))
                        this.outputSum += this.outputMagnitudes[t]
                    }
                    if (this.outputSum != 0) {
                        this.outputSum = 1 / this.outputSum
                    } else {
                        this.outputSum = 0
                    }
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudes[t] *= this.outputSum
                    }
                    this.outputcheck = 0
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputcheck += this.outputMagnitudes[t]
                    }
                    if (this.outputcheck == 0) {
                        this.outputMagnitudes[this.outputMagnitudesCloneSpare.indexOf(Math.max(...this.outputMagnitudesCloneSpare))] = 1
                    }

                    this.r = 128 //Math.random()*255
                    this.g = 128 //Math.random()*255
                    this.b = 128 //Math.random()*255
                    this.name = `rgb(${this.r},${this.g},${this.b})`
                } else {
                    console.log(override)
                    // this = override
                }
            }
            clone() {
                let clone = new GenNN(this.inputs, this.layercount, this.layersetupArray, 4)
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        for (let p = 0; p < this.structure[t][k].weights.length; p++) {
                            clone.structure[t][k].weights[p] = this.structure[t][k].weights[p]
                            clone.structure[t][k].bias = this.structure[t][k].bias
                        }
                    }
                }
                clone.generation = this.generation + 1
                clone.r = this.r
                clone.g = this.g
                clone.b = this.b
                clone.parent = this.name
                clone.name = `rgb(${clone.r},${clone.g},${clone.b})`
                return clone
            }
            mutate() {

                this.r = Math.round(Math.max(Math.min((this.r + ((Math.random() - .5) * 36)), 255), 0))
                this.g = Math.round(Math.max(Math.min((this.g + ((Math.random() - .5) * 36)), 255), 0))
                this.b = Math.round(Math.max(Math.min((this.b + ((Math.random() - .5) * 36)), 255), 0))
                this.name = `rgb(${this.r},${this.g},${this.b})`
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structure[t][k].mutate()
                    }
                }
                this.changeInputs(this.inputs)
            }
            smallmutate() {

                this.r = Math.round(Math.max(Math.min((this.r + ((Math.random() - .5) * 10)), 255), 0))
                this.g = Math.round(Math.max(Math.min((this.g + ((Math.random() - .5) * 10)), 255), 0))
                this.b = Math.round(Math.max(Math.min((this.b + ((Math.random() - .5) * 10)), 255), 0))
                this.name = `rgb(${this.r},${this.g},${this.b})`
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structure[t][k].smallmutate()
                    }
                }
                this.changeInputs(this.inputs)
            }
            micromutate() {

                this.r = Math.round(Math.max(Math.min((this.r + ((Math.random() - .5) * 4)), 255), 0))
                this.g = Math.round(Math.max(Math.min((this.g + ((Math.random() - .5) * 4)), 255), 0))
                this.b = Math.round(Math.max(Math.min((this.b + ((Math.random() - .5) * 4)), 255), 0))
                this.name = `rgb(${this.r},${this.g},${this.b})`
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structure[t][k].micromutate()
                    }
                }
                this.changeInputs(this.inputs)
            }
            bigmutate() {

                this.r = Math.round(Math.max(Math.min((this.r + ((Math.random() - .5) * 50)), 255), 0))
                this.g = Math.round(Math.max(Math.min((this.g + ((Math.random() - .5) * 50)), 255), 0))
                this.b = Math.round(Math.max(Math.min((this.b + ((Math.random() - .5) * 50)), 255), 0))
                this.name = `rgb(${this.r},${this.g},${this.b})`
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structure[t][k].bigmutate()
                    }
                }
                this.changeInputs(this.inputs)
            }
            changeInputs(inputs) {
                this.inputs = [...inputs]
                this.tempinputs = [...inputs]
                this.structureclone = []
                for (let t = 0; t < this.structure.length; t++) {
                    this.structureclone[t] = []
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structureclone[t].push(this.structure[t][k].clone(this.tempinputs))
                    }
                    this.tempinputs = []
                    this.tempclone = []
                    for (let g = 0; g < this.structureclone[this.structureclone.length - 1].length; g++) {
                        this.tempinputs.push(this.structureclone[this.structureclone.length - 1][g].value)
                        this.tempclone.push(this.structureclone[this.structureclone.length - 1][g].value)
                    }
                    for (let n = 0; n < this.tempinputs.length; n++) {
                        this.tempinputs[n] = this.normalize(this.tempinputs[n], Math.min(...this.tempclone), Math.max(...this.tempclone))//optional
                    }
                }
                this.outputs = this.layersetupArray[this.layersetupArray.length - 1]
                this.outputMagnitudes = []
                this.outputMagnitudesClone = []
                this.outputMagnitudesCloneSpare = []
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudes.push(this.tempclone[t])
                    this.outputMagnitudesClone.push(this.tempclone[t])
                    this.outputMagnitudesCloneSpare.push(this.tempclone[t])
                }
                this.outputSum = 0
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudesClone[t] = this.normalize(this.outputMagnitudesClone[t], Math.min(...this.outputMagnitudesCloneSpare), Math.max(...this.outputMagnitudesCloneSpare))
                }
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudes[t] = this.normalize(this.outputMagnitudes[t], Math.min(...this.outputMagnitudesCloneSpare), Math.max(...this.outputMagnitudesCloneSpare))
                    this.outputMagnitudes[t] = this.truenormalize(this.outputMagnitudes[t], Math.min(...this.outputMagnitudesClone), Math.max(...this.outputMagnitudesClone))
                    this.outputSum += this.outputMagnitudes[t]
                }
                if (this.outputSum != 0) {
                    this.outputSum = 1 / this.outputSum
                } else {
                    this.outputSum = 0
                }
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudes[t] *= this.outputSum
                }
                this.outputcheck = 0
                for (let t = 0; t < this.outputs; t++) {
                    this.outputcheck += this.outputMagnitudes[t]
                }
                if (this.outputcheck == 0) {
                    this.outputMagnitudes[this.outputMagnitudesCloneSpare.indexOf(Math.max(...this.outputMagnitudesCloneSpare))] = 1
                }

                this.structure = this.structureclone
            }
            normalize(val, min, max) {
                // if (min < 0) {
                //     max += 0 - min;
                //     val += 0 - min;
                //     min = 0;
                // }
                // val = val - min;
                // max = max - min;
                // return Math.max(0, Math.min(1, val / max));
                return Math.max(val, 0)
            }
            truenormalize(val, min, max) {
                if (min < 0) {
                    max += 0 - min;
                    val += 0 - min;
                    min = 0;
                }
                val = val - min;
                max = max - min;
                if (max == 0) {
                    max = .0000001
                }
                return val / max
                // return Math.max(Math.min(val,1),0)
            }
        }
        class GenNN65 {
            constructor(inputs, layercount, layersetupArray, outputs = 2, override = 0) {
                if (override == 0) {
                    this.name = getRandomColor()
                    this.fitness = 0
                    this.correct = 0
                    this.wrong = 0
                    this.parent = this.name
                    this.generation = 0
                    this.inputs = [...inputs]
                    this.layercount = layercount
                    this.layersetupArray = [...layersetupArray]
                    this.tempinputs = [...inputs]
                    this.structure = []
                    for (let t = 0; t < this.layercount; t++) {
                        let nodes = []
                        for (let k = 0; k < this.layersetupArray[t]; k++) {
                            let node = new Perceptron([...this.tempinputs])
                            nodes.push(node)
                        }
                        this.structure.push(nodes)
                        this.tempinputs = []
                        this.tempclone = []
                        for (let g = 0; g < this.structure[this.structure.length - 1].length; g++) {
                            this.tempinputs.push(this.structure[this.structure.length - 1][g].value)
                            this.tempclone.push(this.structure[this.structure.length - 1][g].value)
                        }
                        for (let n = 0; n < this.tempinputs.length; n++) {
                            this.tempinputs[n] = this.normalize(this.tempinputs[n], Math.min(...this.tempclone), Math.max(...this.tempclone)) //optional
                        }
                    }
                    this.outputs = this.layersetupArray[this.layersetupArray.length - 1]
                    this.outputMagnitudes = []
                    this.outputMagnitudesClone = []
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudes.push(this.tempclone[t])
                        this.outputMagnitudesClone.push(this.tempclone[t])
                    }
                    this.outputSum = 0
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudes[t] = this.truenormalize(this.outputMagnitudes[t], Math.min(...this.outputMagnitudesClone), Math.max(...this.outputMagnitudesClone))
                        this.outputSum += this.outputMagnitudes[t]
                    }
                    if(this.outputSum != 0){
                        this.outputSum = 1 / this.outputSum
                    }else{
                        this.outputSum = 0
                    }
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudes[t] *= this.outputSum
                    }
                    this.r = 128 //Math.random()*255
                    this.g = 128 //Math.random()*255
                    this.b = 128 //Math.random()*255
                    this.name = `rgb(${this.r},${this.g},${this.b})`
                } else {
                    console.log(override)
                    // this = override
                }
            }
            clone() {
                let clone = new GenNN65(this.inputs, this.layercount, this.layersetupArray, 4)
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        for (let p = 0; p < this.structure[t][k].weights.length; p++) {
                            clone.structure[t][k].weights[p] = this.structure[t][k].weights[p]
                        }
                    }
                }
                clone.generation = this.generation + 1
                clone.r = this.r
                clone.g = this.g
                clone.b = this.b
                clone.parent = this.name
                clone.name = `rgb(${clone.r},${clone.g},${clone.b})`
                return clone
            }
            mutate() {

                this.r = Math.round(Math.max(Math.min((this.r + ((Math.random() - .5) * 36)), 255), 0))
                this.g = Math.round(Math.max(Math.min((this.g + ((Math.random() - .5) * 36)), 255), 0))
                this.b = Math.round(Math.max(Math.min((this.b + ((Math.random() - .5) * 36)), 255), 0))
                this.name = `rgb(${this.r},${this.g},${this.b})`
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structure[t][k].mutate()
                    }
                }
                this.changeInputs(this.inputs)
            }
            smallmutate() {

                this.r = Math.round(Math.max(Math.min((this.r + ((Math.random() - .5) * 10)), 255), 0))
                this.g = Math.round(Math.max(Math.min((this.g + ((Math.random() - .5) * 10)), 255), 0))
                this.b = Math.round(Math.max(Math.min((this.b + ((Math.random() - .5) * 10)), 255), 0))
                this.name = `rgb(${this.r},${this.g},${this.b})`
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structure[t][k].smallmutate()
                    }
                }
                this.changeInputs(this.inputs)
            }
            bigmutate() {

                this.r = Math.round(Math.max(Math.min((this.r + ((Math.random() - .5) * 50)), 255), 0))
                this.g = Math.round(Math.max(Math.min((this.g + ((Math.random() - .5) * 50)), 255), 0))
                this.b = Math.round(Math.max(Math.min((this.b + ((Math.random() - .5) * 50)), 255), 0))
                this.name = `rgb(${this.r},${this.g},${this.b})`
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structure[t][k].bigmutate()
                    }
                }
                this.changeInputs(this.inputs)
            }
            changeInputs(inputs) {
                this.inputs = [...inputs]
                this.tempinputs = [...inputs]
                this.structureclone = []
                for (let t = 0; t < this.structure.length; t++) {
                    this.structureclone[t] = []
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structureclone[t].push(this.structure[t][k].clone(this.tempinputs))
                    }
                    this.tempinputs = []
                    this.tempclone = []
                    for (let g = 0; g < this.structureclone[this.structureclone.length - 1].length; g++) {
                        this.tempinputs.push(this.structureclone[this.structureclone.length - 1][g].value)
                        this.tempclone.push(this.structureclone[this.structureclone.length - 1][g].value)
                    }
                    for (let n = 0; n < this.tempinputs.length; n++) {
                        this.tempinputs[n] = this.normalize(this.tempinputs[n], Math.min(...this.tempclone), Math.max(...this.tempclone))//optional
                    }
                }
                this.outputs = this.layersetupArray[this.layersetupArray.length - 1]
                this.outputMagnitudes = []
                this.outputMagnitudesClone = []
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudes.push(this.tempclone[t])
                    this.outputMagnitudesClone.push(this.tempclone[t])
                }
                this.outputSum = 0
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudes[t] = this.truenormalize(this.outputMagnitudes[t], Math.min(...this.outputMagnitudesClone), Math.max(...this.outputMagnitudesClone))
                    this.outputSum += this.outputMagnitudes[t]
                }
                if(this.outputSum != 0){
                    this.outputSum = 1 / this.outputSum
                }else{
                    this.outputSum = 0
                }
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudes[t] *= this.outputSum
                }
                this.structure = this.structureclone
            }
            normalize(val, min, max) {
                // if (min < 0) {
                //     max += 0 - min;
                //     val += 0 - min;
                //     min = 0;
                // }
                // val = val - min;
                // max = max - min;
                // return Math.max(0, Math.min(1, val / max));
                return Math.max(Math.min(val,1),0)
            }
            truenormalize(val, min, max) {
                if (min < 0) {
                    max += 0 - min;
                    val += 0 - min;
                    min = 0;
                }
                val = val - min;
                max = max - min;
                return Math.max(0, Math.min(1, val / max));
                // return Math.max(Math.min(val,1),0)
            }
        }
        class GenNN73 {
            constructor(inputs, layercount, layersetupArray, outputs = 2, override = 0) {
                if (override == 0) {
                    this.name = getRandomColor()
                    this.fitness = 0
                    this.correct = 0
                    this.wrong = 0
                    this.parent = this.name
                    this.generation = 0
                    this.inputs = [...inputs]
                    this.layercount = layercount
                    this.layersetupArray = [...layersetupArray]
                    this.tempinputs = [...inputs]
                    this.structure = []
                    for (let t = 0; t < this.layercount; t++) {
                        let nodes = []
                        for (let k = 0; k < this.layersetupArray[t]; k++) {
                            let node = new Perceptron([...this.tempinputs])
                            nodes.push(node)
                        }
                        this.structure.push(nodes)
                        this.tempinputs = []
                        this.tempclone = []
                        for (let g = 0; g < this.structure[this.structure.length - 1].length; g++) {
                            this.tempinputs.push(this.structure[this.structure.length - 1][g].value)
                            this.tempclone.push(this.structure[this.structure.length - 1][g].value)
                        }
                        for (let n = 0; n < this.tempinputs.length; n++) {
                            this.tempinputs[n] = this.normalize(this.tempinputs[n], Math.min(...this.tempclone), Math.max(...this.tempclone)) //optional
                        }
                    }
                    this.outputs = this.layersetupArray[this.layersetupArray.length - 1]
                    this.outputMagnitudes = []
                    this.outputMagnitudesClone = []
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudes.push(this.tempclone[t])
                        this.outputMagnitudesClone.push(this.tempclone[t])
                    }
                    this.outputSum = 0
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudes[t] = this.truenormalize(this.outputMagnitudes[t], Math.min(...this.outputMagnitudesClone), Math.max(...this.outputMagnitudesClone))
                        this.outputSum += this.outputMagnitudes[t]
                    }
                    if(this.outputSum != 0){
                        this.outputSum = 1 / this.outputSum
                    }else{
                        this.outputSum = 0
                    }
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudes[t] *= this.outputSum
                    }
                    this.r = 128 //Math.random()*255
                    this.g = 128 //Math.random()*255
                    this.b = 128 //Math.random()*255
                    this.name = `rgb(${this.r},${this.g},${this.b})`
                } else {
                    console.log(override)
                    // this = override
                }
            }
            clone() {
                let clone = new GenNN73(this.inputs, this.layercount, this.layersetupArray, 4)
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        for (let p = 0; p < this.structure[t][k].weights.length; p++) {
                            clone.structure[t][k].weights[p] = this.structure[t][k].weights[p]
                        }
                    }
                }
                clone.generation = this.generation + 1
                clone.r = this.r
                clone.g = this.g
                clone.b = this.b
                clone.parent = this.name
                clone.name = `rgb(${clone.r},${clone.g},${clone.b})`
                return clone
            }
            mutate() {

                this.r = Math.round(Math.max(Math.min((this.r + ((Math.random() - .5) * 36)), 255), 0))
                this.g = Math.round(Math.max(Math.min((this.g + ((Math.random() - .5) * 36)), 255), 0))
                this.b = Math.round(Math.max(Math.min((this.b + ((Math.random() - .5) * 36)), 255), 0))
                this.name = `rgb(${this.r},${this.g},${this.b})`
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structure[t][k].mutate()
                    }
                }
                this.changeInputs(this.inputs)
            }
            smallmutate() {

                this.r = Math.round(Math.max(Math.min((this.r + ((Math.random() - .5) * 10)), 255), 0))
                this.g = Math.round(Math.max(Math.min((this.g + ((Math.random() - .5) * 10)), 255), 0))
                this.b = Math.round(Math.max(Math.min((this.b + ((Math.random() - .5) * 10)), 255), 0))
                this.name = `rgb(${this.r},${this.g},${this.b})`
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structure[t][k].smallmutate()
                    }
                }
                this.changeInputs(this.inputs)
            }
            bigmutate() {

                this.r = Math.round(Math.max(Math.min((this.r + ((Math.random() - .5) * 50)), 255), 0))
                this.g = Math.round(Math.max(Math.min((this.g + ((Math.random() - .5) * 50)), 255), 0))
                this.b = Math.round(Math.max(Math.min((this.b + ((Math.random() - .5) * 50)), 255), 0))
                this.name = `rgb(${this.r},${this.g},${this.b})`
                for (let t = 0; t < this.structure.length; t++) {
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structure[t][k].bigmutate()
                    }
                }
                this.changeInputs(this.inputs)
            }
            changeInputs(inputs) {
                this.inputs = [...inputs]
                this.tempinputs = [...inputs]
                this.structureclone = []
                for (let t = 0; t < this.structure.length; t++) {
                    this.structureclone[t] = []
                    for (let k = 0; k < this.structure[t].length; k++) {
                        this.structureclone[t].push(this.structure[t][k].clone(this.tempinputs))
                    }
                    this.tempinputs = []
                    this.tempclone = []
                    for (let g = 0; g < this.structureclone[this.structureclone.length - 1].length; g++) {
                        this.tempinputs.push(this.structureclone[this.structureclone.length - 1][g].value)
                        this.tempclone.push(this.structureclone[this.structureclone.length - 1][g].value)
                    }
                    for (let n = 0; n < this.tempinputs.length; n++) {
                        this.tempinputs[n] = this.normalize(this.tempinputs[n], Math.min(...this.tempclone), Math.max(...this.tempclone))//optional
                    }
                }
                this.outputs = this.layersetupArray[this.layersetupArray.length - 1]
                this.outputMagnitudes = []
                this.outputMagnitudesClone = []
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudes.push(this.tempclone[t])
                    this.outputMagnitudesClone.push(this.tempclone[t])
                }
                this.outputSum = 0
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudes[t] = this.truenormalize(this.outputMagnitudes[t], Math.min(...this.outputMagnitudesClone), Math.max(...this.outputMagnitudesClone))
                    this.outputSum += this.outputMagnitudes[t]
                }
                if(this.outputSum != 0){
                    this.outputSum = 1 / this.outputSum
                }else{
                    this.outputSum = 0
                }
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudes[t] *= this.outputSum
                }
                this.structure = this.structureclone
            }
            normalize(val, min, max) {
                // if (min < 0) {
                //     max += 0 - min;
                //     val += 0 - min;
                //     min = 0;
                // }
                // val = val - min;
                // max = max - min;
                // return Math.max(0, Math.min(1, val / max));
                // return Math.max(Math.min(val,1),0)
                return Math.max(val,0)
            }
            truenormalize(val, min, max) {
                if (min < 0) {
                    max += 0 - min;
                    val += 0 - min;
                    min = 0;
                }
                val = val - min;
                max = max - min;
                return Math.max(0, Math.min(1, val / max));
                // return Math.max(Math.min(val,1),0)
            }
        }
        let redval = Math.random() + 0
        let greenval = Math.random() + 0
        let blueval = Math.random() + 0
        let meshes = []
        let inputArray = []
        let filterselected = -1

        for (let t = 0; t < 784; t++) [
            inputArray.push(Math.random())
        ]
        // for (let t = 0; t < 10; t++) {
        // let SandMesh = new GenNN([...inputArray], 3, [16, 16, 10], 4)
        // meshes.push(SandMesh)
        // }
        // clone() {
        // let clone = new GenNN65(origin65.inputs, origin65.layercount, origin65.layersetupArray, 4)
        // for (let t = 0; t < origin65.structure.length; t++) {
        //     for (let k = 0; k < origin65.structure[t].length; k++) {
        //         for (let p = 0; p < origin65.structure[t][k].weights.length; p++) {
        //             clone.structure[t][k].weights[p] = origin65.structure[t][k].weights[p]
        //         }
        //     }
        // }
        // clone.generation = origin65.generation + 1
        // clone.r = Math.round(Math.max(Math.min((origin65.r + ((Math.random() - .5) * 36)), 255), 0))
        // clone.g = Math.round(Math.max(Math.min((origin65.g + ((Math.random() - .5) * 36)), 255), 0))
        // clone.b = Math.round(Math.max(Math.min((origin65.b + ((Math.random() - .5) * 36)), 255), 0))
        // clone.parent = origin65.name
        // clone.name = `rgb(${clone.r},${clone.g},${clone.b})`

        let clone1 = new GenNN(origin.inputs, origin.layercount, origin.layersetupArray, 4)
        for (let t = 0; t < origin.structure.length; t++) {
            for (let k = 0; k < origin.structure[t].length; k++) {
                for (let p = 0; p < origin.structure[t][k].weights.length; p++) {
                    clone1.structure[t][k].weights[p] = origin.structure[t][k].weights[p]//*Math.abs(origin.structure[t][k].weights[p])
                    clone1.structure[t][k].bias = origin.structure[t][k].bias
                }
            }
        }
        clone1.generation = origin.generation + 1
        clone1.r = Math.round(Math.max(Math.min((origin.r + ((Math.random() - .5) * 36)), 255), 0))
        clone1.g = Math.round(Math.max(Math.min((origin.g + ((Math.random() - .5) * 36)), 255), 0))
        clone1.b = Math.round(Math.max(Math.min((origin.b + ((Math.random() - .5) * 36)), 255), 0))
        clone1.parent = origin.name
        clone1.name = `rgb(${clone1.r},${clone1.g},${clone1.b})`


        // let clone2 = new GenNN(origin2.inputs, origin2.layercount, origin2.layersetupArray, 4)
        // for (let t = 0; t < origin2.structure.length; t++) {
        //     for (let k = 0; k < origin2.structure[t].length; k++) {
        //         for (let p = 0; p < origin2.structure[t][k].weights.length; p++) {
        //             clone2.structure[t][k].weights[p] = origin2.structure[t][k].weights[p]
        //             clone2.structure[t][k].bias = origin2.structure[t][k].bias
        //         }
        //     }
        // }
        // clone2.generation = origin2.generation + 1
        // clone2.r = Math.round(Math.max(Math.min((origin2.r + ((Math.random() - .5) * 36)), 255), 0))
        // clone2.g = Math.round(Math.max(Math.min((origin2.g + ((Math.random() - .5) * 36)), 255), 0))
        // clone2.b = Math.round(Math.max(Math.min((origin2.b + ((Math.random() - .5) * 36)), 255), 0))
        // clone2.parent = origin2.name
        // clone2.name = `rgb(${clone2.r},${clone2.g},${clone2.b})`



        // meshes.push(clone)
        meshes.push(clone1)
        // meshes.push(clone2)
        console.log(meshes)
        let counter = 1
        let counterstop = 10001
        let counterstopsmall = 5
        let mutationratebig = .019
        let mutationrate = .0009
        let mutationratesmall = .00009
        let difficulty = .5
        let numcounter = 0

        let notfalse = []
        let errors = []



        function main() {
            if (keysPressed['y']) {
                console.log(meshes)
            }
            if (keysPressed['x']) {
                example_context.clearRect(0,0,28,28)
                canvas_context.clearRect(0,0,784,784)
            }
            if (keysPressed[' ']) {
                example_context.clearRect(0,0,28,28)
                canvas_context.clearRect(0,0,784,784)
            }

            // for (let t = 0; meshes.length < 40; t++) {
            //     let SandMesh = meshes[0].clone()
            //     // if (meshes.length < 20) {
            //     //     SandMesh.bigmutate()
            //     // } else if (meshes.length < 30) {
            //         // SandMesh.mutate()
            //     // } else {
            //         SandMesh.smallmutate()
            //     // }
            //     meshes.push(SandMesh)
            // }

            // canvas_context.clearRect(0, 0, 700, 700)
            // if (counter % counterstopsmall == 0) {
            //     // console.log(meshes[0].name, 100 * (meshes[0].wrong / (meshes[0].correct + meshes[0].wrong)), `${meshes[0].wrong}/${meshes[0].correct + meshes[0].wrong}`)
            //     canvas.style.background = "black" //meshes[0].name

                // counterstop += (difficulty * Math.round(difficulty * 10))
                // counterstop = Math.round(counterstop)
                // console.log(difficulty, ".7ings")
                // for (let t = 0; t < meshes.length; t++) {
                // meshes[t].fitness *= .9
                // meshes[t].fitness = Math.round(meshes[t].fitness)
                // }

            // } else if (counter % counterstop == 0) {

            //     difficulty += .0005
            //     if (difficulty > .5) {
            //         difficulty = .5
            //     }
                // meshes.sort((a, b) => (a.fitness < b.fitness) ? 1 : -1)
                // let clonebest = meshes[0].clone()
                // clonebest.wrong = meshes[0].wrong
                // clonebest.correct = meshes[0].correct
                // clonebest.fitness = 0
                // meshes = meshes.filter(mesh => mesh.marked == 0)
                // meshes.sort((a, b) => (a.fitness < b.fitness) ? 1 : -1)

                // for (let t = 0; t < meshes.length; t++) {
                //     meshes[t].fitness = 0
                // }
                // if(Math.random() < 1/(difficulty*10)){
                //     meshes.splice(395,5)
                // }
            //     if (meshes.length == 0) {
            //         meshes.push(clonebest)

            //         console.log("dropped", (40 - meshes.length), "difficulty", difficulty, "best", meshes[0], "number", variablenumber, "output", meshes[0].outputMagnitudes, "rate", 100 * (meshes[0].wrong / (meshes[0].correct + meshes[0].wrong)), `${meshes[0].wrong}/${meshes[0].correct + meshes[0].wrong}`)

            //         // let SandMesh = new GenNN([...inputArray], 3, [28, 28, 10], 4)
            //         // meshes.push(SandMesh)

            //         // for (let t = 0; meshes.length < 400; t++) {
            //         //     let SandMesh = meshes[0].clone()
            //         //     if(meshes.length < 380){
            //         //         SandMesh.bigmutate()
            //         //     }else if(meshes.length < 390){
            //         //         SandMesh.mutate()
            //         //     }else{
            //         //         SandMesh.smallmutate()
            //         //     }
            //         //     meshes.push(SandMesh)
            //         // }
            //     } else {
            //         console.log("dropped", (40 - meshes.length), "difficulty", difficulty, "best", meshes[0], "number", variablenumber, "output", meshes[0].outputMagnitudes, "rate", 100 * (meshes[0].wrong / (meshes[0].correct + meshes[0].wrong)), `${meshes[0].wrong}/${meshes[0].correct + meshes[0].wrong}`)
            //         for (let t = 0; meshes.length < 40; t++) {
            //             let SandMesh = meshes[0].clone()
            //             // if (meshes.length < 20) {
            //             //     SandMesh.bigmutate()
            //             // } else if (meshes.length < 30) {
            //             //     SandMesh.mutate()
            //             // } else {
            //                 SandMesh.smallmutate()
            //             // }
            //             meshes.push(SandMesh)
            //         }
            //     }

            //     // for (let t = 0; meshes.length < 400; t++) {
            //     //     let SandMesh = meshes[0].clone()
            //     //     if(meshes.length < 380){
            //     //         SandMesh.bigmutate()
            //     //     }else if(meshes.length < 390){
            //     //         SandMesh.mutate()
            //     //     }else{
            //     //         SandMesh.smallmutate()
            //     //     }
            //     //     meshes.push(SandMesh)
            //     // }
            //     // if (meshes[0].fitness < 100) {
            //     // for (let t = 0; meshes.length < 100; t++) {
            //     //     let SandMesh = new GenNN([...inputArray], 3, [28, 28, 10], 4)
            //     //     meshes.push(SandMesh)
            //     // }
            //     // } else {
            //     //     if (meshes[0].fitness == 100) {
            //     //         console.log(meshes[0])
            //     //     }
            //     // }

            //     counter = 0
            // }
            // counter++
            // for (let t = 0; t < meshes.length; t++) {
            //     for (let k = 0; k < meshes[t].outputMagnitudes.length; k++)
            //         if (variablenumber == k) {
            //             if (meshes[t].outputMagnitudes[k] == Math.max(...meshes[t].outputMagnitudes)) {
            //                 meshes[t].marked = 0
            //                 // meshes[t].fitness += .6
            //                 // meshes[t].fitness += (meshes[t].outputMagnitudes[k]*7)
            //                 meshes[t].fitness += meshes[t].outputMagnitudes[k] 
            //                 meshes[t].fitness += 1 - (difficulty)
            //                 meshes[t].correct += 1
            //             } else {
            //                 // meshes[t].fitness -= (( (1-meshes[t].outputMagnitudes[k] ))/1.8)*difficulty
            //                 meshes[t].fitness += meshes[t].outputMagnitudes[k] 
            //                 meshes[t].fitness -= 1 + (difficulty)
            //                 meshes[t].wrong += 1
            //             }
            //         }
            //     if (meshes[t].fitness < 0) {
            //         meshes[t].marked = 1
            //     }
            // }

            // meshes.sort((a, b) => (a.fitness < b.fitness) ? 1 : -1)
            // let x = 0
            // let y = 0
            // for (let t = 0; t < meshes.length; t++) {
            //     canvas_context.fillStyle = meshes[t].name
            //     canvas_context.fillRect(x, y, 35, 35)
            //     x += 35
            //     if (x == 700) {
            //         x = 0
            //         y += 35
            //     }
            //     if (t > 400) {
            //         break
            //     }
            // }

            // redval = Math.random() + 0
            // greenval = Math.random() + 0
            // blueval = Math.random() + 0

            let runner = numcounter % 10//Math.floor(Math.random()*10)

            // if (runner == 0) {
            //     draw0()
            // } else if (runner == 1) {
            //     draw1()
            // } else if (runner == 2) {
            //     draw2()
            // } else if (runner == 3) {
            //     draw3()
            // } else if (runner == 4) {
            //     draw4()
            // } else if (runner == 5) {
            //     draw5()
            // } else if (runner == 6) {
            //     draw6()
            // } else if (runner == 7) {
            //     draw7()
            // } else if (runner == 8) {
            //     draw8()
            // } else if (runner == 9) {
            //     draw9()
            // }
            // console.log(imgindex)

            example_context.drawImage(canvas,0,0,canvas.width,canvas.height,3,0,22,28)
            const imageData = example_context.getImageData(0, 0, example_canvas.width, example_canvas.height);
            const data = imageData.data;

            inputArray = []
            for (var i = 0; i < data.length; i += 4) {
                inputArray.push((data[i] + data[i + 1] + data[i + 2]) / 765)    //red
            }

            for (let t = 0; t < meshes.length; t++) {
                meshes[t].changeInputs([...inputArray])
            }


            let outputs = [0,0,0,0,0,0,0,0,0,0]
            
            
            for(let t = 0;t<meshes.length;t++){
                // console.log(t, meshes[t].outputMagnitudes)
                for(let k = 0;k<meshes[t].outputMagnitudes.length;k++){
                    if(t == 0){
                        // outputs[k]+=meshes[t].outputMagnitudes[k]*.35
                        outputs[k]+=meshes[t].outputMagnitudes[k]*.75
                    }
                    if(t == 1){
                        // outputs[k]+=meshes[t].outputMagnitudes[k]*.4
                    }
                    if(t == 2){
                        // outputs[k]+=meshes[t].outputMagnitudes[k]*.27
                    }
                }
            }


            // console.log(meshes[0].outputMagnitudes.indexOf(Math.max(...meshes[0].outputMagnitudes)))
            numberprint.innerText = "You wrote: " + outputs.indexOf(Math.max(...outputs)) 
            if(outputs.indexOf(Math.max(...outputs))  == variablenumber){
                notfalse.push([variablenumber, Math.max(...outputs)])
            }else{
                errors.push([variablenumber, outputs.indexOf(Math.max(...outputs))  ])
            }
            // // console.log(inputArray)
            numcounter++
            if(numcounter == 10000){
                console.log(outputs)
                console.log("errors", errors)
                console.log("corrects", notfalse)
            }
            sees_context.clearRect(0,0,sees.width, sees.height)
            if(filterselected == -1){

                for (let t = 0; t < meshes[0].structure.length; t++) {
                    for (let k = 0; k < meshes[0].structure[0][ outputs.indexOf(Math.max(...outputs)) ].weights.length; k++) {
                        if (meshes[0].structure[0][ outputs.indexOf(Math.max(...outputs)) ].weights[k] < 0) {
                            sees_context.fillStyle = `rgba(255,0,0,${inputArray[k] * Math.abs(meshes[0].structure[0][ outputs.indexOf(Math.max(...outputs)) ].weights[k])+Math.abs((meshes[0].structure[0][ outputs.indexOf(Math.max(...outputs)) ].weights[k]*.25))})`
                        } else {
                            sees_context.fillStyle = `rgba(0,255,0,${inputArray[k] * meshes[0].structure[0][ outputs.indexOf(Math.max(...outputs)) ].weights[k]+(meshes[0].structure[0][ outputs.indexOf(Math.max(...outputs)) ].weights[k]*.25)})`
                        }
                        sees_context.fillRect((-3*14)+(k % 28) * 14, (Math.floor(k / 28)) * 14, 14, 14)
                    }
                }
            }else{

                for (let t = 0; t < meshes[0].structure.length; t++) {
                    for (let k = 0; k < meshes[0].structure[0][ filterselected ].weights.length; k++) {
                        if (meshes[0].structure[0][ filterselected ].weights[k] < 0) {
                            sees_context.fillStyle = `rgba(255,0,0,${inputArray[k] * Math.abs(meshes[0].structure[0][ filterselected ].weights[k])+Math.abs((meshes[0].structure[0][ filterselected ].weights[k]*.25))})`
                        } else {
                            sees_context.fillStyle = `rgba(0,255,0,${inputArray[k] * meshes[0].structure[0][ filterselected ].weights[k]+(meshes[0].structure[0][ filterselected ].weights[k]*.25)})`
                        }
                        sees_context.fillRect((-3*14)+(k % 28) * 14, (Math.floor(k / 28)) * 14, 14, 14)
                    }
                }
            }
        }
        

    }, 1);

})
