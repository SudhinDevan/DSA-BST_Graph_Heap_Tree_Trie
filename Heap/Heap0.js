class Heap {
    constructor() {
        this.data = []
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }
    getLeftChild(i) {
        return 2 * i + 1
    }
    getRightChild(i) {
        return 2 * i + 2
    }
    swap(i1, i2) {
        [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]]
    }
    heapifyup() {
        let currentIndex = this.data.length - 1
        while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
    }
    push(key) {
        this.data[this.data.length] = key
        this.heapifyup()
    }
    poll() {     /// remove root
        const maxValue = this.data[0]
        this.data[0] = this.data[this.data.length - 1]
        this.data.length--
        this.heapifyDown()
        return maxValue
    }
    heapifyDown() {
        let currentIndex = 0
        while (this.data[this.getLeftChild(currentIndex)] !== undefined) {
            let biggestChildIndex = this.getLeftChild(currentIndex)
            if (this.data[this.getRightChild(currentIndex)] !== undefined && this.data[this.getRightChild(currentIndex)] > this.data[this.getLeftChild(currentIndex)]) {
                biggestChildIndex = this.getRightChild(currentIndex)
            }
            if (this.data[currentIndex] < this.data[biggestChildIndex]) {
                this.swap(currentIndex, biggestChildIndex)
                currentIndex = biggestChildIndex
            } else {
                return
            }
        }
    }
    buildHeap(arr) {
        n = arr.length
        for (let i = Math.floor(n / 2); i >= 0; i--) {
            heapify(arr, i, n)
        }
        return arr
    }

    heapSort(arr) {
        n = arr.length - 1
        arr = buildHeap(arr)
        for (let i = n; i >= 1; i--) {
            let swap = arr[0]
            arr[0] = arr[i]
            arr[i] = swap
            heapify(arr, 0, i)
        }
        return arr
    }

}


const heap = new Heap()
console.log(heap);
heap.push(25)
heap.push(5)
heap.push(40)
heap.push(70)
heap.push(90)
heap.push(44)

console.log(heap.data.join(','));