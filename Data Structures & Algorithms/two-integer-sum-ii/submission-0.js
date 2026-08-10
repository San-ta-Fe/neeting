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
            if(numbers[lf] + numbers[rt] < target){
                lf++;
            }else if(numbers[lf] + numbers[rt] > target){
                rt--;
            }else{
                break;
            }
        }

        return [lf + 1, rt + 1];
    }
}
