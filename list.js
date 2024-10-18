class LinkedList {
    constructor() {
        this.head = null;   // head of the list which is initially empty
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {   // if this list is empty make this node the head 
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) { // moves to the end of the list
            current = current.next;
        }
        current.next = newNode; // sets the new node next to the last node on the list
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;   // sets the newNode to point at the head
        this.head = newNode;    // the new node becomes the head 
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) { // moves to the end of the list
            count++;
            current = current.next;
        }
        return count;
    }

    getHead() {
        return this.head;
    }

    tail() {
        let current = this.head;
        while (current.next !== null) { // moves to the end of the list
            current = current.next;
        }
        return current;
    }

    at(index) {
        let elem = this.head;
        for (let i = 0;i < index && elem != null;i++) {
            elem = elem.next;
        }
        return elem ? elem.value : null;
    }

    pop() {
        if (this.head === null) { // If the list is empty, return null
            return null;
        }

        if (this.head.next === null) {
            const value = this.head.value;
            this.head = null; // The list only had one element, now it's empty
            return value;
        }

        let current = this.head;
        while (current.next.next !== null) { // moves to the end of the list
            current = current.next;
        }
        const value = current.next.value;   // stores the last nodes value
        current.next = null;    // severs the link between the second to last node and the last node
        return value;   // returns the removed value
    }

    contains(value) {
        let current = this.head;
        while (current !== null) { // Traverse the list
            if (current.value === value) { // Check if the current node's value matches
                return true; // Value found, return true
            }
            current = current.next; // Move to the next node
        }
    
        return false; // If we reach here, the value was not found in the list
    }

    find(value) {
        let current = this.head;
        let count = 0;
        while (current != null) {
            if (current.value === value) {
                return count;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // toString method to represent the linked list as a string
    toString() {
        let current = this.head;
        let listString = '';

        while (current !== null) {
            listString += `( ${current.value} ) -> `; // Add current node's value to the string
            current = current.next; // Move to the next node
        }

        listString += 'null'; // Add 'null' at the end
        return listString;
    }


}

class Node {
    constructor(value = null) {
        this.value = value;      // data stored in node
        this.next = null;   // the pointer to the next node
    }
}

const runTests = () => {
    // Create a new LinkedList
    const linkedList = new LinkedList();

    // Test 1: Append some values to the list
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);

    console.log(linkedList.toString());  // Expected output: "( 10 ) -> ( 20 ) -> ( 30 ) -> null"
    console.assert(linkedList.toString() === "( 10 ) -> ( 20 ) -> ( 30 ) -> null", "Test 1 Failed: Append and toString");

    // Test 2: Prepend a value to the list
    linkedList.prepend(5);
    console.log(linkedList.toString());  // Expected output: "( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null"
    console.assert(linkedList.toString() === "( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null", "Test 2 Failed: Prepend and toString");

    // Test 3: Check the size of the list
    console.log(linkedList.size());  // Expected output: 4
    console.assert(linkedList.size() === 4, "Test 3 Failed: Size");

    // Test 4: Check the head of the list
    console.log(linkedList.getHead().value);  // Expected output: 5
    console.assert(linkedList.getHead().value === 5, "Test 4 Failed: Get head");

    // Test 5: Check the tail of the list
    console.log(linkedList.tail().value);  // Expected output: 30
    console.assert(linkedList.tail().value === 30, "Test 5 Failed: Get tail");

    // Test 6: Check if a value exists in the list
    console.log(linkedList.contains(20));  // Expected output: true
    console.assert(linkedList.contains(20) === true, "Test 6 Failed: Contains true case");
    console.log(linkedList.contains(100));  // Expected output: false
    console.assert(linkedList.contains(100) === false, "Test 6 Failed: Contains false case");

    // Test 7: Find the index of a value
    console.log(linkedList.find(20));  // Expected output: 2
    console.assert(linkedList.find(20) === 2, "Test 7 Failed: Find index");
    console.log(linkedList.find(100));  // Expected output: null
    console.assert(linkedList.find(100) === null, "Test 7 Failed: Find non-existent value");

    // Test 8: Pop the last element
    const poppedValue = linkedList.pop(); // Store the popped value
    console.log(poppedValue);  // Expected output: 30
    console.assert(poppedValue === 30, "Test 8 Failed: Pop last element");

    // Test 9: Check the list after popping
    console.log(linkedList.toString());  // Expected output: "( 5 ) -> ( 10 ) -> ( 20 ) -> null"
    console.assert(linkedList.toString() === "( 5 ) -> ( 10 ) -> ( 20 ) -> null", "Test 9 Failed: Pop and toString");

    // Test 10: Access a value by index
    console.log(linkedList.at(1));  // Expected output: 10
    console.assert(linkedList.at(1) === 10, "Test 10 Failed: Access by index");
    console.log(linkedList.at(5));  // Expected output: null (out of bounds)
    console.assert(linkedList.at(5) === null, "Test 10 Failed: Access out of bounds");
    
    console.log("All tests passed!");
};

// Run the tests
runTests();
