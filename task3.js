console.log(getPermutations([1, 2, 3]));

function getPermutations(arr) {
    arr = [...new Set(arr)];
    if (arr.length === 0) return [[]];
    const result = [];
    arr.forEach((current, index) => {
      const remaining = arr.slice(0, index).concat(arr.slice(index + 1));
      const permutations = getPermutations(remaining);
      permutations.forEach(permutation => {
        result.push([current, ...permutation]);
      });
    });
    return result;
  }
