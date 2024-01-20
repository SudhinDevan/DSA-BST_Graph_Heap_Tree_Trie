// function heapify(arr, i, n) {
//     let largest = i
//     let l = (2 * i) + 1
//     let r = l + 1
//     if (l < n && arr[l] > arr[largest]) {
//         largest = l
//     }
//     if (r < n && arr[r] > arr[largest]) {
//         largest = r
//     }
//     if (largest != i) {
//         let swap = arr[i]
//         arr[i] = arr[largest]
//         arr[largest] = swap
//         heapify(arr, largest, n)
//     }
// }
// function buildHeap(arr) {
//     n = arr.length
//     for (let i = Math.floor(n / 2); i >= 0; i--) {
//         heapify(arr, i, n)
//     }
//     return arr
// }
// function heapSort(arr) {
//     n = arr.length - 1
//     arr = buildHeap(arr)
//     for (let i = n; i >= 1; i--) {
//         let swap = arr[0]
//         arr[0] = arr[i]
//         arr[i] = swap
//         heapify(arr, 0, i)
//     }
//     return arr
// }
// const arr = [10, 12, 20, 15, 9, 28]
// console.log(heapSort(arr))



// const parent = (i) => Math.floor((i - 1) / 2);
// const lChild = (i) => 2 * i + 1;
// const rChild = (i) => 2 * i + 2;


// function buildHeap(array) {
//     const Heap = []
//     for (let i = 0; i < array.length; i++) {
//         Heap.push(array[i])
//     }

//     let currentIndex = Heap.length - 1

//     while (currentIndex) {
//         let parentIndex = parent(currentIndex)

//         if (Heap[parentIndex] > Heap[index]) {
//             Heap[index] = Heap[parentIndex]
//             Heap[parentIndex] = temp
//             currentIndex = parentIndex
//         } else {
//             break;
//         }
//     }
//     return Heap;
// }



// const heapify = (index, heap, size) => {
//     let largest = index;
//     let l = lChild(index)
//     let r = rChild(index)

//     if (l < size && heap[largest] > heap[l]) largest = l;
//     if (r < size && heap[largest] > heap[r]) largest = r;

//     if (largest != index) {
//         let temp = heap[largest]
//         heap[largest] = heap[index]
//         heap[index] = temp
//         heapify(largest, heap, size)
//     }

// }


// class minHeap {
//     constructor() {
//         this.heap = []
//         this.size = 0
//     }

//     insert(value) {
//         let i = this.size
//         this.heap[i] = value
//         this.size += 1

//         while (i > 0 && this.heap[parent(i)] > this.heap[i]) {
//             let temp = this.heap[i]
//             this.heap[i] = this.heap[parent(i)]
//             this.heap[parent(i)] = temp
//             i = parent(i);
//         }
//     }

//     remove() {
//         const root = this.heap[0];
//         this.heap[0] = this.heap[this.size - 1];

//         heapify(0, this.heap, this.size);

//         this.heap.pop();
//         this.size -= 1;

//         return root;
//     }

//     sort() {
//         const sortedArray = [];

//         while (this.heap.length > 0) {

//             let minElement = this.heap[0];
//             sortedArray.push(minElement);

//             this.heap[0] = this.heap[this.heap.length - 1]
//             heapify(0, this.heap, this.heap.length);
//             this.heap.pop()
//         }

//         return sortedArray;
//     }
//     display() {

//         console.log(this.heap.length)
//     }


//     heapSort(array) {
//         const heap = buildHeap(array);
//         const sortedArray = [];

//         while (heap.length > 0) {
//             let minElement = heap[0];
//             sortedArray.push(minElement);

//             heap[0] = heap[heap.length - 1]
//             heapify(0, heap, heap.length);

//             heap.pop()


//         }

//         return sortedArray;
//     }


// }

// const obj = new minHeap()

// obj.insert(10)
// obj.insert(8)
// obj.insert(6)
// obj.insert(9)
// obj.insert(11)
// obj.insert(12)

// //obj.remove()
// obj.display()

// console.log(obj.heapSort([21, 43, 12, 4, 5, 7, 19]))


// console.log(obj.sort())


// class Heap {
//     constructor(arr) {
//         this.values = arr
//     }
//     heapify(i) {
//         let largest = i
//         let left = (2 * i) + 1
//         let right = (2 * i) + 2
//         let n = this.values.length
//         if (left < n && this.values[left] > this.values[largest]) {
//             largest = left
//         }
//         if (right < n && this.values[right] > this.values[largest]) {
//             largest = right
//         }
//         if (largest != i) {
//             let swap = this.values[i]
//             this.values[i] = this.values[largest]
//             this.values[largest] = swap
//             this.heapify(largest)
//         }
//     }
//     buildHeap() {
//         for (let i = Math.floor((this.values.length - 1) / 2); i >= 0; i--) {
//             this.heapify(i)
//         }
//     }
//     insert(val) {
//         this.values.push(val)
//         this.heapify(this.values.length - 1)
//     }
//     removeMax() {
//         const max = this.values[0]
//         this.values[0] = this.values[this.length - 1]
//         let left = (2 * i) + 1
//         let right = (2 * i) + 2
//         this.values.pop()
//         let i = 0
//         while (true) {
//             let parent = this.values[i]
//             let maxChild = Math.max(this.values[left], this.values[right])
//             if (maxChild <= parent)
//                 break
//             let child = (maxChild === this.values[left]) ? left : right
//             this.values[i] = maxChild
//             this.values[child] = parent
//         }
//         return max
//     }
//     print() {
//         console.log(this.values)
//     }
// }
// const heap = new Heap(arr)
// const arr = [39, 40, 70, 65, 45, 40, 16, 10, 60, 9, 50]
// heap.heapify(0)
// // heap.buildHeap()
// heap.print()


const parent = (i) => Math.floor((i - 1) / 2)
const lChild = (i) => 2 * i + 1
const rchild = (i) => 2 * i + 2

function buildHeap(array) {
    let Heap = []
    for (let i = 0; i < array.length; i++) {
        Heap.push(array[i])

        currentIndex = Heap.length - 1
        while (currentIndex) {
            let parentIndex = parent(currentIndex)

            if (Heap[parentIndex] > Heap[currentIndex]) {
                let temp = Heap[currentIndex]
                Heap[currentIndex] = Heap[parentIndex]
                Heap[parentIndex] = temp
                currentIndex = parentIndex
            } else {
                break
            }
        }
    }
    return Heap
}

const heapify = (index, heap, size) => {
    let largest = index
    l = lChild(index)
    r = rchild(index)

    if (l < size && heap[largest] > heap[l]) largest = l
    if (r < size && heap[largest] > heap[r]) largest = r

    if (largest != index) {
        let temp = heap[largest]
        heap[largest] = heap[index]
        heap[index] = temp
        heapify(largest, heap, size)
    }
}

class minHeap {
    constructor() {
        this.heap = []
        this.size = 0
    }

    insert(value) {
        let i = this.size
        this.heap[i] = value
        this.size += 1

        if (i > 0 && this.heap[parent(i)] > this.heap[i]) {
            let temp = this.heap[parent(i)]
            this.heap[parent(i)] = this.heap[i]
            this.heap[i] = temp
            i = parent(i)
        }
    }

    display() {
        console.log(this.heap)
    }

    remove() {
        const root = this.heap[0]
        this.heap[0] = this.heap[this.size - 1]

        heapify(0, this.heap, this.size)

        this.heap.pop()
        this.size -= 1
        return root
    }

    heapSort(array) {
        let heap = buildHeap(array)
        let sortedArray = []

        while (heap.length > 0) {
            let minElement = heap[0]
            sortedArray.push(minElement)

            heap[0] = heap[heap.length - 1]
            heapify(0, heap, heap.length)

            heap.pop()
        }
        return sortedArray
    }
}

const obj = new minHeap()

obj.insert(3)
obj.insert(21)
obj.insert(5)
obj.insert(6)
obj.insert(4)

console.log(obj.heapSort([39, 40, 70, 65, 45, 40, 16, 10, 60, 9, 50]))

// obj.remove()
// obj.display()

console.log(buildHeap([39, 40, 70, 65, 45, 40, 16, 10, 60, 9, 50]))
