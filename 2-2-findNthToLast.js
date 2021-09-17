// Implement an algorithm to find the nth to last element of a singly linked list

function makeNode(value) {
    return {
        value: value,
        next: null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    setLength() {
        if (!this.head) {
            this.length = 0
        }

        let current = this.head
        let count = 0
        while(current) {
            count++
            current = current.next
        }
        this.length = count
    }

    append(value) {
        const node = makeNode(value)
        if (!this.head) {
            this.head = this.tail = node
            this.length++
        }

        this.tail.next = node
        this.tail = node

        return node
    }
}

function findNthToLast(head, n) {
    const list = new LinkedList
    list.head = head
    list.setLength()
    const theOne = list.length - n
    let current = head
    let count = 0
    while (current) {
        if (count === theOne) {
            return current
        }
        current = current.next
        count++
    }
}

const l1 = new LinkedList
l1.append(12)
l1.append(22)
l1.append(21)
l1.append(32)
l1.append(24)

const l2 = new LinkedList
l2.append(2)
l2.append(2)
l2.append(4)
l2.append(3)
l2.append(2)
l2.append(1)
l2.append(10)

const l3 = new LinkedList
l3.append(1)
l3.append(2)
l3.append(3)
l3.append(4)
l3.append(5)
l3.append(6)

console.log('expecting: 21')
console.log(findNthToLast(l1.head, 3))
console.log('expecting: 1')
console.log(findNthToLast(l2.head, 2))
console.log('expecting: 1')
console.log(findNthToLast(l3.head, 6))
