import { assert } from 'chai';
import 'mocha';
import MergeSortImpl from '../src/mergeSort';

const mergeSort = new MergeSortImpl();

describe('MergeSort', () => {
  it("should return an array of numbers", () => {
    const result = mergeSort.merge([2, 4, 6, 8], [1, 2, 3, 4, 5, 10])
    assert.isArray(result)
    assert.isTrue(result.every(x => typeof x == "number"))
  })

  it("should return an array with the correct number of elements", () => {
    const result = mergeSort.merge([1, 2, 3, 4, 5, 6, 7], [8, 9])
    assert.lengthOf(result, 9)
  })

  it("should merge two sorted arrays and have the result be sorted", () => {
    const result = mergeSort.merge([1, 3, 5], [2, 4, 6])
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6])
  });
});