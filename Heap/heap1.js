// Given a min heap containing distinct integers, 
// write a function to remove the kth smallest element from the heap.

class MinHeap {
    constructor() {
        this.heap = [];
    }
    buildHeap(array) {
        this.heap = array;
        for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    remove() {
        if (this.heap.length <= 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }
    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }
    heapifyDown(index) {
        let childIndex = 2 * index + 1;
        while (childIndex < this.heap.length) {
            if (childIndex + 1 < this.heap.length && this.heap[childIndex + 1] < this.heap[childIndex]) {
                childIndex++;
            }
            if (this.heap[index] < this.heap[childIndex]) {
                break;
            }
            this.swap(index, childIndex);
            index = childIndex;
            childIndex = 2 * index + 1;
        }
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
}


const minHeap = new MinHeap();


minHeap.insert(5);
minHeap.insert(10);
minHeap.insert(3);


console.log(minHeap.heap);


const min = minHeap.remove();
console.log(min);
console.log(minHeap.heap);
