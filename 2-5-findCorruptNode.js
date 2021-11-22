// Given a circular linked list, implement an algorithm which returns node at the begin- ning of the loop
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node’s next pointer points to an earlier node, so as to make a loop in the linked list
// EXAMPLE
// input: A -> B -> C -> D -> E -> C [the same C as earlier]
// output: C

// Notes:
// Are all values in the list unique or could some nodes hold the same value as other nodes?

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        // this.size = 0
    }
    // using a set
    // solution I came up with on my own:
    findCorruptNode() {
        let current = this.head
        let tracker = new Set()
        while (current) {
            if (tracker.has(current)) {
                return current
            } else {
                tracker.add(current)
                current = current.next
            }
        } 
        return null
    }
    // found a clever solution online; it uses Floyd's cycle finding algorithm
    findFirstNodeOfLoop() {
        // if empty list or list of 1 item with null as next - return null
        if (!this.head || !this.head.next) return null;
        // initialize slow and fast and set them to the second and third items in the list
        let slow = this.head.next, fast = this.head.next.next
        // determine if there is a loop at all - slow and fast will eventually be the same if there is a loop
        while(fast.next !== null && fast.next.next !== null) {
            if(slow === fast) break;
            slow = slow.next
            fast = fast.next.next
        }
        // if above while loop ends because fast.next or fast.next.next is null, there is no loop; slow will not equal fast - return null
        if (slow !== fast) return null
        // set slow back to the beginning of the list
        slow = this.head
        // at this point when slow and fast meet again, it will be the first node of the loop
        // this is because the distance from the beginning of the list to the point where slow and fast meet the first time is a multiple of the length of the loop
        // this is confusing; 
        // https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/ helps explain a bit better
        // going thru an example also helps
        while(slow !== fast) {
            slow = slow.next
            fast = fast.next
        }
        return slow
    }
    print() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        } 
    }
}

let l = new LinkedList
let node1 = new Node('A')
let node2 = new Node('B')
let badNode = new Node('C')
let node4 = new Node('D')
let node5 = new Node('E')
l.head = node1
node1.next = node2
node2.next = badNode
badNode.next = node4
node4.next = node5
node5.next = badNode