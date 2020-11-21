


let img0 = []
for (let i = 0; i < 999; i++) {
    img0.push(Object.assign(new Image(), { 'src': `0/0-${i}.jpg` }));
}
let img1 = []
for (let i = 0; i < 999; i++) {
    img1.push(Object.assign(new Image(), { 'src': `1/1-${i}.jpg` }));
}
let img2 = []
for (let i = 0; i < 999; i++) {
    img2.push(Object.assign(new Image(), { 'src': `2/2-${i}.jpg` }));
}
let img3 = []
for (let i = 0; i < 999; i++) {
    img3.push(Object.assign(new Image(), { 'src': `3/3-${i}.jpg` }));
}
let img4 = []
for (let i = 0; i < 999; i++) {
    img4.push(Object.assign(new Image(), { 'src': `4/4-${i}.jpg` }));
}
let img5 = []
for (let i = 0; i < 999; i++) {
    img5.push(Object.assign(new Image(), { 'src': `5/5-${i}.jpg` }));
}
let img6 = []
for (let i = 0; i < 999; i++) {
    img6.push(Object.assign(new Image(), { 'src': `6/6-${i}.jpg` }));
}
let img7 = []
for (let i = 0; i < 999; i++) {
    img7.push(Object.assign(new Image(), { 'src': `7/7-${i}.jpg` }));
}
let img8 = []
for (let i = 0; i < 999; i++) {
    img8.push(Object.assign(new Image(), { 'src': `8/8-${i}.jpg` }));
}
let img9 = []
for (let i = 0; i < 999; i++) {
    img9.push(Object.assign(new Image(), { 'src': `9/9-${i}.jpg` }));
}


window.addEventListener('DOMContentLoaded', (event) => {
    window.setTimeout(function () {

        let canvas
        let canvas_context
        let keysPressed = {}
        function setUp(canvas_pass, style = "#000000") {
            canvas = canvas_pass
            canvas_context = canvas.getContext('2d');
            canvas.style.background = style
            window.setInterval(function () {
                main()
            }, 1)
            document.addEventListener('keydown', (event) => {
                keysPressed[event.key] = true;
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
            example_context.drawImage(img0[imgindex], 0, 0)
            variablenumber = 0
        }
        function draw1() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img1[imgindex], 0, 0)
            variablenumber = 1
        }
        function draw2() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img2[imgindex], 0, 0)
            variablenumber = 2
        }
        function draw3() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img3[imgindex], 0, 0)
            variablenumber = 3
        }
        function draw4() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img4[imgindex], 0, 0)
            variablenumber = 4
        }
        function draw5() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img5[imgindex], 0, 0)
            variablenumber = 5
        }
        function draw6() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img6[imgindex], 0, 0)
            variablenumber = 6
        }
        function draw7() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img7[imgindex], 0, 0)
            variablenumber = 7
        }
        function draw8() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img8[imgindex], 0, 0)
            variablenumber = 8
        }
        function draw9() {
            example_context.clearRect(0, 0, 28, 28)
            example_context.drawImage(img9[imgindex], 0, 0)
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
                this.bias = (Math.random() - .5) * .01
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
                clone.value = clone.compute()
                clone.bias = this.bias
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
                        this.weights[t] *= 0
                    }
                    if (Math.random() < mutationrate) {
                        this.weights[t] = this.weight()
                    }
                    if (Math.random() < mutationrate) {
                        this.weights[t] *= 1 + ((Math.random() - .5) * .5)
                    }
                    if (Math.random() < mutationrate) {
                        this.bias = (Math.random() - .5) * .01
                    }
                    if (Math.random() < mutationrate) {
                        this.bias += (.2 * (Math.random() - .5))
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
                        this.weights[t] *= 0
                    }
                    if (Math.random() < mutationratesmall) {
                        this.weights[t] = this.weight()
                    }
                    if (Math.random() < mutationratesmall) {
                        this.weights[t] *= 1 + ((Math.random() - .5) * .5)
                    }
                    if (Math.random() < mutationratesmall) {
                        this.bias = (Math.random() - .5) * .01
                    }
                    if (Math.random() < mutationratesmall) {
                        this.bias += (.2 * (Math.random() - .5))
                    }
                    if (Math.random() < mutationratesmall) {
                        this.bias *= 1 + ((Math.random() - .5) * .5)
                    }
                    if (Math.random() < mutationratesmall) {
                        this.bias = 0
                    }
                    if (Math.random() < mutationratesmall) {
                        this.bias *= -1
                    }
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
                        this.weights[t] *= 0
                    }
                    if (Math.random() < mutationratebig) {
                        this.weights[t] = this.weight()
                    }
                    if (Math.random() < mutationratebig) {
                        this.weights[t] *= 1 + ((Math.random() - .5) * .5)
                    }
                    if (Math.random() < mutationratebig) {
                        this.bias = (Math.random() - .5) * .01
                    }
                    if (Math.random() < mutationratebig) {
                        this.bias += (.2 * (Math.random() - .5))
                    }
                    if (Math.random() < mutationratebig) {
                        this.bias *= 1 + ((Math.random() - .5) * .5)
                    }
                    if (Math.random() < mutationratebig) {
                        this.bias = 0
                    }
                    if (Math.random() < mutationratebig) {
                        this.bias *= -1
                    }
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
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudes.push(this.tempinputs[t])
                        this.outputMagnitudesClone.push(this.tempinputs[t])
                    }
                    this.outputSum = 0
                    for (let t = 0; t < this.outputs; t++) {
                        this.outputMagnitudes[t] = this.normalize(this.outputMagnitudes[t], Math.min(...this.outputMagnitudesClone), Math.max(...this.outputMagnitudesClone))
                        this.outputSum += this.outputMagnitudes[t]
                    }
                    this.outputSum = 1 / this.outputSum
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
                let clone = new GenNN(this.inputs, this.layercount, this.layersetupArray, 4)
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
                    this.outputMagnitudes.push(this.tempinputs[t])
                    this.outputMagnitudesClone.push(this.tempinputs[t])
                }
                this.outputSum = 0
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudes[t] = this.normalize(this.outputMagnitudes[t], Math.min(...this.outputMagnitudesClone), Math.max(...this.outputMagnitudesClone))
                    this.outputSum += this.outputMagnitudes[t]
                }
                this.outputSum = 1 / this.outputSum
                for (let t = 0; t < this.outputs; t++) {
                    this.outputMagnitudes[t] *= this.outputSum
                }
                this.structure = this.structureclone
            }
            normalize(val, min, max) {
                if (min < 0) {
                    max += 0 - min;
                    val += 0 - min;
                    min = 0;
                }
                val = val - min;
                max = max - min;
                return Math.max(0, Math.min(1, val / max));
            }
        }
        let redval = Math.random() + 0
        let greenval = Math.random() + 0
        let blueval = Math.random() + 0
        let meshes = []
        let inputArray = []

        for (let t = 0; t < 784; t++) [
            inputArray.push(Math.random())
        ]
        // for (let t = 0; t < 2000; t++) {
        // let SandMesh = new GenNN([...inputArray], 3, [28, 28, 10], 4, origin)

        // clone() {
        let clone = new GenNN(origin.inputs, origin.layercount, origin.layersetupArray, 4)
        for (let t = 0; t < origin.structure.length; t++) {
            for (let k = 0; k < origin.structure[t].length; k++) {
                for (let p = 0; p < origin.structure[t][k].weights.length; p++) {
                    clone.structure[t][k].weights[p] = origin.structure[t][k].weights[p]
                }
            }
        }
        clone.generation = origin.generation + 1
        clone.r = Math.round(Math.max(Math.min((origin.r + ((Math.random() - .5) * 36)), 255), 0))
        clone.g = Math.round(Math.max(Math.min((origin.g + ((Math.random() - .5) * 36)), 255), 0))
        clone.b = Math.round(Math.max(Math.min((origin.b + ((Math.random() - .5) * 36)), 255), 0))
        clone.parent = origin.name
        clone.name = `rgb(${clone.r},${clone.g},${clone.b})`



        // return clone
        // }
        meshes.push(clone)
        // }
        let counter = 1
        let counterstop = 1001
        let counterstopsmall = 5
        let mutationratebig = .019
        let mutationrate = .0009
        let mutationratesmall = .00009
        let difficulty = 0
        let numcounter = 0




        function main() {
            if (keysPressed['y']) {
                console.log(meshes)
            }

            for (let t = 0; meshes.length < 400; t++) {
                let SandMesh = meshes[0].clone()
                if (meshes.length < 380) {
                    SandMesh.bigmutate()
                } else if (meshes.length < 390) {
                    SandMesh.mutate()
                } else {
                    SandMesh.smallmutate()
                }
                meshes.push(SandMesh)
            }

            canvas_context.clearRect(0, 0, 700, 700)
            if (counter % counterstopsmall == 0) {
                // console.log(meshes[0].name, 100 * (meshes[0].wrong / (meshes[0].correct + meshes[0].wrong)), `${meshes[0].wrong}/${meshes[0].correct + meshes[0].wrong}`)
                canvas.style.background = "black" //meshes[0].name

                // counterstop += (difficulty * Math.round(difficulty * 10))
                // counterstop = Math.round(counterstop)
                // console.log(difficulty, ".7ings")
                // for (let t = 0; t < meshes.length; t++) {
                // meshes[t].fitness *= .9
                // meshes[t].fitness = Math.round(meshes[t].fitness)
                // }

            } else if (counter % counterstop == 0) {

                difficulty += .0005
                if (difficulty > .5) {
                    difficulty = .5
                }
                meshes.sort((a, b) => (a.fitness < b.fitness) ? 1 : -1)
                let clonebest = meshes[0].clone()
                clonebest.wrong = meshes[0].wrong
                clonebest.correct = meshes[0].correct
                clonebest.fitness = 0
                meshes = meshes.filter(mesh => mesh.marked == 0)
                meshes.sort((a, b) => (a.fitness < b.fitness) ? 1 : -1)

                for (let t = 0; t < meshes.length; t++) {
                    meshes[t].fitness = 0
                }
                // if(Math.random() < 1/(difficulty*10)){
                //     meshes.splice(395,5)
                // }
                if (meshes.length == 0) {
                    meshes.push(clonebest)

                    console.log("dropped", (400 - meshes.length), "difficulty", difficulty, "best", meshes[0], "number", variablenumber, "output", meshes[0].outputMagnitudes, "rate", 100 * (meshes[0].wrong / (meshes[0].correct + meshes[0].wrong)), `${meshes[0].wrong}/${meshes[0].correct + meshes[0].wrong}`)

                    // let SandMesh = new GenNN([...inputArray], 3, [28, 28, 10], 4)
                    // meshes.push(SandMesh)

                    // for (let t = 0; meshes.length < 400; t++) {
                    //     let SandMesh = meshes[0].clone()
                    //     if(meshes.length < 380){
                    //         SandMesh.bigmutate()
                    //     }else if(meshes.length < 390){
                    //         SandMesh.mutate()
                    //     }else{
                    //         SandMesh.smallmutate()
                    //     }
                    //     meshes.push(SandMesh)
                    // }
                } else {
                    console.log("dropped", (400 - meshes.length), "difficulty", difficulty, "best", meshes[0], "number", variablenumber, "output", meshes[0].outputMagnitudes, "rate", 100 * (meshes[0].wrong / (meshes[0].correct + meshes[0].wrong)), `${meshes[0].wrong}/${meshes[0].correct + meshes[0].wrong}`)
                    for (let t = 0; meshes.length < 400; t++) {
                        let SandMesh = meshes[0].clone()
                        if (meshes.length < 380) {
                            SandMesh.bigmutate()
                        } else if (meshes.length < 390) {
                            SandMesh.mutate()
                        } else {
                            SandMesh.smallmutate()
                        }
                        meshes.push(SandMesh)
                    }
                }

                // for (let t = 0; meshes.length < 400; t++) {
                //     let SandMesh = meshes[0].clone()
                //     if(meshes.length < 380){
                //         SandMesh.bigmutate()
                //     }else if(meshes.length < 390){
                //         SandMesh.mutate()
                //     }else{
                //         SandMesh.smallmutate()
                //     }
                //     meshes.push(SandMesh)
                // }
                // if (meshes[0].fitness < 100) {
                // for (let t = 0; meshes.length < 100; t++) {
                //     let SandMesh = new GenNN([...inputArray], 3, [28, 28, 10], 4)
                //     meshes.push(SandMesh)
                // }
                // } else {
                //     if (meshes[0].fitness == 100) {
                //         console.log(meshes[0])
                //     }
                // }

                counter = 0
            }
            counter++
            for (let t = 0; t < meshes.length; t++) {
                for (let k = 0; k < meshes[t].outputMagnitudes.length; k++)
                    if (variablenumber == k) {
                        if (meshes[t].outputMagnitudes[k] == Math.max(...meshes[t].outputMagnitudes)) {
                            meshes[t].marked = 0
                            // meshes[t].fitness += .6
                            // meshes[t].fitness += (meshes[t].outputMagnitudes[k]*7)
                            meshes[t].fitness += 1 - (difficulty)
                            meshes[t].correct += 1
                        } else {
                            // meshes[t].fitness -= (( (1-meshes[t].outputMagnitudes[k] ))/1.8)*difficulty
                            meshes[t].fitness -= 1 + (difficulty)
                            meshes[t].wrong += 1
                        }
                    }
                if (meshes[t].fitness < 0) {
                    meshes[t].marked = 1
                }
            }

            meshes.sort((a, b) => (a.fitness < b.fitness) ? 1 : -1)
            let x = 0
            let y = 0
            for (let t = 0; t < meshes.length; t++) {
                canvas_context.fillStyle = meshes[t].name
                canvas_context.fillRect(x, y, 35, 35)
                x += 35
                if (x == 700) {
                    x = 0
                    y += 35
                }
                if (t > 400) {
                    break
                }
            }

            // redval = Math.random() + 0
            // greenval = Math.random() + 0
            // blueval = Math.random() + 0

            let runner = numcounter % 10//Math.floor(Math.random()*10)

            if (runner == 0) {
                draw0()
            } else if (runner == 1) {
                draw1()
            } else if (runner == 2) {
                draw2()
            } else if (runner == 3) {
                draw3()
            } else if (runner == 4) {
                draw4()
            } else if (runner == 5) {
                draw5()
            } else if (runner == 6) {
                draw6()
            } else if (runner == 7) {
                draw7()
            } else if (runner == 8) {
                draw8()
            } else if (runner == 9) {
                draw9()
            }
            // console.log(imgindex)

            const imageData = example_context.getImageData(0, 0, example_canvas.width, example_canvas.height);
            const data = imageData.data;

            inputArray = []
            for (var i = 0; i < data.length; i += 4) {
                inputArray.push((data[i] + data[i + 1] + data[i + 2]) / 765)    //red
            }

            for (let t = 0; t < meshes.length; t++) {
                meshes[t].changeInputs([...inputArray])
            }
            // // console.log(inputArray)
            numcounter++
        }

    }, 5000);

})

