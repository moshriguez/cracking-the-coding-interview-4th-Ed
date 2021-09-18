// Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node
// EXAMPLE
// Input: the node ‘c’ from the linked list a->b->c->d->e
// Result: nothing is returned, but the new linked list looks like a->b->d->e

// Please note it is not possible to delete the last node of the list with this algorithm

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

function deleteNode(node) {
    node.value = node.next.value
    node.next = node.next.next
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

console.log('expecting: 12->22->32->24-> ')
deleteNode(l1.head.next.next)
console.log(l1.head)
console.log('expecting: 2->4->3->2->1->10 ')
deleteNode(l2.head.next)
console.log(l2.head)
console.log('expecting: 1->2->4-> ')
deleteNode(l3.head.next.next)
console.log(l3.head)