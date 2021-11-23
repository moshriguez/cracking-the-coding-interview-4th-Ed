// How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time

// method 1: keep a reference to the current minimum on each node
// drawback is we are storing a lot of duplicate data on each node
class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.currMin = null
    }
}

class StackWithMin {
    constructor() {
        this.head = null
    }
    push(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            newNode.currMin = newNode.val
        } else {
            if(newNode.val < this.head.currMin) {
                newNode.currMin = newNode.val
            } else {
                newNode.currMin = this.head.currMin
            }
            newNode.next = this.head
            this.head = newNode
        }
    }
    pop() {
        if(!this.head) return undefined
        const removedNode = this.head
        if(!this.head.next) {
            this.head = null
        } else {
            this.head = removedNode.next
            removedNode.next = null
        }
        return removedNode
    }
    min() {
        if(!this.head) {
            return Infinity
        }
        return this.head.currMin
    }
}