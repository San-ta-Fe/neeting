class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let lf = 0;
        let rt = numbers.length - 1;
        while(lf < rt ){
            let sum = numbers[lf] + numbers[rt]
            if(sum < target){
                lf++;
            }else if(sum > target){
                rt--;
            }else{
                break;
            }
        }

        return [lf + 1, rt + 1];
    }
}
