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

// This implementation has a BigO(1) for each stack, but has a fixed stack size
class AnotherThreeStacks {
    constructor(stackSize) {
        this.stackSize = stackSize
        this.all = new Array(stackSize * 3)
        this.stackPointer = [0, 0, 0]
    }
    push(stackNum, value) {
        if (this.stackPointer[stackNum] === this.stackSize) return 'Error: Cannot perform operation: Stack size exceeded'
        const index = stackNum * this.stackSize + this.stackPointer[stackNum]
        this.all[index] = value
        return ++this.stackPointer[stackNum]
    }

    pop(stackNum) {
        let value
        if (this.stackPointer[stackNum] > 0) {
            const index = stackNum * this.stackSize + this.stackPointer[stackNum] - 1
            value = this.all[index]
            this.all[index] = undefined
            this.stackPointer[stackNum]--
        }
        return value
    }
}