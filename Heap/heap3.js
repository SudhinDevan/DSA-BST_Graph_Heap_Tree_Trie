// How can you implement a Max Heap data structure using JavaScript, 
// and perform basic operations such as building the heap from an array, inserting elements,
// and removing the maximum element? Provide a solution in JavaScript code using the MaxHeap class.

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    build(arr) {
        this.heap = arr;
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapify(i);
        }
    }
    insert(val) {
        this.heap.push(val);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor((currentIndex - 1) / 2);
        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }
    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const maxVal = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return maxVal;
    }
    heapify(index) {
        let largest = index;
        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;
        if (leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[largest]) {
            largest = leftIndex;
        }
        if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[largest]) {
            largest = rightIndex;
        }
        if (largest !== index) {
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            this.heapify(largest);
        }
    }
}


const maxHeap = new MaxHeap();
maxHeap.build([9, 4, 7, 1, 8, 2]);
console.log(maxHeap.heap);
maxHeap.insert(10);
console.log(maxHeap.heap);
maxHeap.remove();
console.log(maxHeap.heap);