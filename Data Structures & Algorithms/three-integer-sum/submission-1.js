/*
-4, -1, -1, 0, 1, 2

*/

class Solution {

    twoSum(n, t) {
        let lf = 0;
        let rt = n.length - 1;
        let res = []
        while(lf < rt){
            if(lf > 0 && n[lf] == n[lf - 1]){
                lf++;
                continue;
            }
            if (n[lf] + n[rt] < t){
                lf++;
            }else if(n[lf] + n[rt] > t){
                rt--;
            }else if(n[lf] + n[rt] == t){
                res.push([n[lf], n[rt]]);
                lf++;
                rt--;
            }
        }
        return res;
    }
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        let res = [];
        for(let i = 0; i < nums.length - 2; i++){
            if( i > 0 && nums[i] == nums[i - 1]){
                continue;
            }
            let pairs = this.twoSum(nums.slice(i + 1), 0 - nums[i]);
            for (let j = 0; j < pairs.length; j++)
                res.push([nums[i], pairs[j][0], pairs[j][1]]);
            
        }
        return res;
    }
}
