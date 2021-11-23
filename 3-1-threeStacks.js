// Describe how you could use a single array to implement three stacks

// the issue with this implementation is that all but the last stack has a BigO(n) rather than BigO(1)
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

// This implementation has a BigO(1) for each stack, but will run into problems when the stack size is exceeded
class AnotherThreeStacks {
    constructor(stackSize) {
        this.stackSize = stackSize
        this.all = new Array(stackSize * 3)
        this.stackPointer = [0, 0, 0]
    }
    push(stackNum, value) {
        const index = stackNum * this.stackSize + this.stackPointer[stackNum]
        this.stackPointer[stackNum]++
        this.all[index] = value
    }

    pop(stackNum) {
        const index = stackNum * this.stackSize + this.stackPointer[stackNum]
        this.stackPointer[stackNum]--
        const value = this.all[index]
        this.all[index] = undefined
        return value
    }
}