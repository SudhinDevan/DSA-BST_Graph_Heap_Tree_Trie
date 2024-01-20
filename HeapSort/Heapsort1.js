// 1.) Given an array of integers, sort them in ascending order using Heap Sort.


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
function heapSortAscending(arr) {
    const maxHeap = new MaxHeap();
    maxHeap.build(arr);
    const sortedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        sortedArr.unshift(maxHeap.remove());
    }
    return sortedArr;
}


const arr = [9, 4, 7, 1, 8, 2];
const sortedArr = heapSortAscending(arr);
console.log(sortedArr);