function buildHeap(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        heapify(arr, i, arr.length - 1);
    }
}

function heapify(arr, currentIdx, endIdx) {
    let leftIdx = (currentIdx * 2) + 1;
    let shiftIdx;

    while (leftIdx <= endIdx) {
        let rightIdx = (currentIdx * 2) + 2;

        if (rightIdx <= endIdx && arr[rightIdx] > arr[leftIdx]) {
            shiftIdx = rightIdx;
        } else {
            shiftIdx = leftIdx;
        }

        if (arr[shiftIdx] > arr[currentIdx]) {
            swap(arr, shiftIdx, currentIdx);
            currentIdx = shiftIdx;
            leftIdx = (currentIdx * 2) + 1;
        } else {
            return;
        }
    }
}

function heapSort(arr) {
    buildHeap(arr);
    swap(arr, 0, arr.length - 1);
    let n = arr.length - 1;

    for (let i = n - 1; i > 0; i--) {
        heapify(arr, 0, i)
        swap(arr, 0, i);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


let ar = [6, 2, 8, 1, -11, 3];

heapSort(ar);

console.log(ar);