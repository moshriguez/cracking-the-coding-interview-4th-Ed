// Write code to remove duplicates from an unsorted linked list 
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
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
    }

    append(value) {
        const node = makeNode(value)
        if (!this.head) {
            this.head = this.tail = node
        }

        this.tail.next = node
        this.tail = node

        return node
    }
}

function removeDupes(list) {
    let current = list
    let previous = null
    let collector = ''
    while (current) {
        if (collector.includes(current.value.toString())) {
            previous.next = current.next
        } else {
            collector += current.value
            previous = current
        }
        current = current.next
    }
    return list
}

const l1 = new LinkedList
l1.append(2)
l1.append(2)
l1.append(2)
l1.append(2)
l1.append(2)

const l2 = new LinkedList
l2.append(2)
l2.append(2)
l2.append(4)
l2.append(3)
l2.append(2)
l2.append(1)
l2.append(1)

const l3 = new LinkedList
l3.append(1)
l3.append(2)
l3.append(3)
l3.append(4)
l3.append(5)
l3.append(6)

console.log('expecting: 2->')
console.log(removeDupes(l1.head))
console.log('expecting: 2->4->3->1->')
console.log(removeDupes(l2.head))
console.log('expecting: 1->2->3->4->5->6->')
console.log(removeDupes(l3.head))