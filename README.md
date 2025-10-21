# Linked List 

A simple, educational **singly linked list** implementation in plain JS with a small browser harness that runs example tests in the console.

## ✨ Features
- `append(value)` / `prepend(value)` — add nodes at the tail/head  
- `size()` — number of nodes  
- `getHead()` / `tail()` — access first/last node  
- `at(index)` — value at a given index (or `null`)  
- `pop()` — remove and return the last value  
- `contains(value)` / `find(value)` — search utilities  
- `toString()` — pretty print, e.g. `( 5 ) -> ( 10 ) -> null`  
All methods are implemented in `list.js`. 

## 📦 Project Structure
```text
.
├─ index.html   # loads list.js and runs the demo in your browser console
└─ list.js      # LinkedList + Node classes and example tests

```

## 🧠 How it works

- Node holds { value, next }.
- LinkedList keeps a head pointer and traverses via next to implement all operations.
- The included demo builds a list, logs intermediate states, and asserts expected results. The test runner is invoked at the bottom of list.js runTests();. 
