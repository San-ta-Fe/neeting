class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i = 0; i < nums.length; i++){
            console.log(map);
            if(map.has(nums[i])){
                return new Array(i, map.get(nums[i]));
            }
            map.set((target - nums[i]), i);
        }
        return new Array();
    }
}
