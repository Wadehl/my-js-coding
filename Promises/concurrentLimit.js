// 实现一个并发调度器Scheduler，保证同时运行的任务最多有两个
class Scheduler {
    constructor(limit) {
        this.limit = limit;
        this.queue = [];
        this.running = 0;
    }

    add(promiseCreator) {
        this.queue.push(promiseCreator);
    }

    start() {
        for(let i = 0; i < this.limit; i++) {
            this.next();
        }
    }

    next() {
        if(this.queue.length && this.running < this.limit) {
            const task = this.queue.shift();
            task().then(() => {
                this.running--;
                this.next();
            })
            this.running++;
        }
    }
}

const timeout = time => new Promise((resolve) => {
    setTimeout(resolve, time);
})

const scheduler = new Scheduler(2);

const addTask = (time, order) => {
    // schedule.add添加的是一个Promise任务
    scheduler.add(() => timeout(time).then(() => {
        console.log(order);
    }))
}

addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);

scheduler.start();
