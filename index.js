function largestDivisibleSubset(nums) {
  nums.sort((a, b) => a - b);
  const dp = new Array(nums.length).fill(1);
  let maxSubsetSize = 1;
  let maxSubsetIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        if (dp[i] > maxSubsetSize) {
          maxSubsetSize = dp[i];
          maxSubsetIdx = i;
        }
      }
    }
  }
  const result = [];
  let prev = nums[maxSubsetIdx];
  let count = maxSubsetSize;
  for (let i = maxSubsetIdx; i >= 0; i--) {
    if (prev % nums[i] === 0 && dp[i] === count) {
      result.unshift(nums[i]);
      prev = nums[i];
      count--;
    }
  }
  return result;
}
