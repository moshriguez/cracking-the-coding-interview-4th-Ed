// Describe how you could use a single array to implement three stacks

class ThreeStacks {
    constructor() {
        this.all = []
        this.firstLength = 0
        this.middleLength = 0
        this.lastLength = 0
    }
    // first stack
    firstStackAdd(val) {
        this.all.unshift(val)
        return ++this.firstLength
    }
    firstStackRemove() {
        let removedItem
        if (this.firstLength > 0) {
            removedItem = this.all.shift()
            this.firstLength--
        }
        return removedItem
    }
    // middle stack
    middleStackAdd(val) {
        this.all.splice(this.firstLength, 0, val)
        return ++this.middleLength
    }
    middleStackRemove() {
        let removedItem
        if (this.middleLength > 0) {
            removedItem = this.all.splice(this.firstLength, 1)[0]
            --this.middleLength
        }
        return removedItem
    }
    // last stack
    lastStackAdd(val) {
        this.all.push(val)
        return ++this.lastLength
    }
    lastStackRemove() {
        let removedItem
        if (this.lastLength > 0) {
            removedItem = this.all.pop()
            this.lastLength--
        }
        return removedItem
    }
}