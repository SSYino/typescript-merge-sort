interface MergeSort {
    merge(collection1: number[], collection2: number[]): number[]
}

class MergeSortImpl implements MergeSort {
    merge(collection1: number[], collection2: number[]): number[] {
        const mergedArray: number[] = []
        const arr1Copy = [...collection1]
        const arr2Copy = [...collection2]

        while (arr1Copy.length && arr2Copy.length) {
            if (arr1Copy[0] <= arr2Copy[0]) mergedArray.push(arr1Copy.shift()!)
            else mergedArray.push(arr2Copy.shift()!)
        }

        return [...mergedArray, ...arr1Copy, ...arr2Copy]
    }
}

const mergeSort = new MergeSortImpl()
console.log(mergeSort.merge([24,56,78,512], [72,89]))

export default MergeSortImpl