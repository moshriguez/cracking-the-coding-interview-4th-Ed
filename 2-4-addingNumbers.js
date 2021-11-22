// You have two numbers represented by a linked list, where each node contains a sin- gle digit The digits are stored in reverse order, such that the 1’s digit is at the head of the list Write a function that adds the two numbers and returns the sum as a linked list
// EXAMPLE
// Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
// Output: 8 -> 0 -> 8

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    append(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }
    print() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}

function addingNumbers(l1, l2) {
    const newList = new LinkedList
    let l1Curr = l1.head
    let l2Curr = l2.head
    let sum;
    let carryTheOne = 0
    while(l1Curr || l2Curr) {
        let l1CurrVal = l1Curr?.val || 0
        let l2CurrVal = l2Curr?.val || 0
        sum = l1CurrVal + l2CurrVal + carryTheOne
        newList.append(sum % 10)
        if(sum > 9) {
            carryTheOne = 1
        } else {
            carryTheOne = 0
        }
        l1Curr = l1Curr?.next || null
        l2Curr = l2Curr?.next || null
    }
    return newList
}

const n1 = new LinkedList
n1.append(9)
n1.append(5)
n1.append(2)
const n2 = new LinkedList
n2.append(4)
n2.append(3)
n2.append(5)
const n3 = new LinkedList
n3.append(5)
n3.append(3)
const n4 = new LinkedList
n4.append(7)
n4.append(0)
n4.append(5)
n4.append(1)
let sumList1 = addingNumbers(n1, n2) // expecting 793
let sumList2 = addingNumbers(n3, n2) // expecting 569
let sumList3 = addingNumbers(n1, n4) // expecting 1766
let sumList4 = addingNumbers(n4, n2) // expecting 2041
