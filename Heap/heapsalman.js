class MinHeap {

    constructor(array) {
        this.heap = [];
        this.buildHeap(array);
    }
    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    leftChild(i) {
        return (i * 2) + 1;
    }

    rightChild(i) {
        return (i * 2) + 2;
    }

    buildHeap(array) {
        this.heap = array;

        for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
            this.shiftDown(i);
        }
    }

    shiftDown(currentIdx) {
        let endIdx = this.heap.length - 1;
        let leftIdx = this.leftChild(currentIdx);
        let idxToShift;

        while (leftIdx <= endIdx) {
            let rightIdx = this.rightChild(currentIdx);

            if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
                idxToShift = rightIdx;
            } else {
                idxToShift = leftIdx;
            }

            if (this.heap[idxToShift] < this.heap[currentIdx]) {
                this.swap(this.heap, idxToShift, currentIdx);
                currentIdx = idxToShift;
                leftIdx = this.leftChild(currentIdx);
            } else {
                return;
            }
        }
    }

    shiftUp(currentIdx) {   //heapifyUp
        let parentIdx = this.parent(currentIdx);

        while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
            this.swap(this.heap, currentIdx, parentIdx);
            currentIdx = parentIdx;
            parentIdx = this.parent(currentIdx);
        }
    }

    peek() {
        return this.heap[0];
    }

    remove() {
        this.swap(this.heap, 0, this.heap.length - 1);
        this.heap.pop();
        this.shiftDown(0);
    }

    insert(val) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
    }




    display() {
        for (const item of this.heap) {
            console.log(item);
        }
    }

    swap(heap, i, j) {
        let temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }
}

let arr = [6, 2, 8];

let min = new MinHeap(arr);
min.display();

console.log();

min.insert(1);
min.insert(5);
min.insert(15);

min.display();

console.log();

min.remove();
min.display();
console.log("sorted", arr);