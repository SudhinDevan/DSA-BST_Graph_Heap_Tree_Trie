// 2.) Given a list of numbers, use the simplified MaxHeap implementation to find the second largest number in the list.

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index] > this.heap[Math.floor((index - 1) / 2)]) {
            [this.heap[index], this.heap[Math.floor((index - 1) / 2)]] = [this.heap[Math.floor((index - 1) / 2)], this.heap[index]];
            index = Math.floor((index - 1) / 2);
        }
    }
    heapifyDown() {
        let index = 0;
        while (index * 2 + 1 < this.heap.length) {
            let largerChildIndex = index * 2 + 1;
            if (index * 2 + 2 < this.heap.length && this.heap[index * 2 + 2] > this.heap[index * 2 + 1]) {
                largerChildIndex = index * 2 + 2;
            }
            if (this.heap[index] >= this.heap[largerChildIndex]) {
                break;
            }
            [this.heap[index], this.heap[largerChildIndex]] = [this.heap[largerChildIndex], this.heap[index]];
            index = largerChildIndex;
        }
    }
}
const maxHeap = new MaxHeap();
maxHeap.insert(4);
maxHeap.insert(7);
maxHeap.insert(1);
maxHeap.insert(3);
maxHeap.insert(9);
console.log(maxHeap);
maxHeap.remove();
console.log(maxHeap.heap[0]);
