const Events = require('node:events')
class Logger extends Events {
    log(a, b) {
        this.emit('calculate', a + b)
    }
}

const obj = new Logger()
obj.on('calculate', data => {
    console.log(data)
})

obj.log(3, 6)