const twoSum = function(nums, target) {
  const dictionary = {};
  for (let i = 0; i < nums.length; i++) {
    dictionary[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    if (
      dictionary[target - nums[i]] != null &&
      dictionary[target - nums[i]] != i
    ) {
      return [i, dictionary[target - nums[i]]];
    }
  }
  return [];
};
