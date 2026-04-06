/*
30,38,30,36,35,40,28
40,28
5 ,6
1,  4  1. 2 1  0. 0
*/

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        let res = [];
        let sta = [];
        for(let i = 0; i < temp.length; i++){
            let curTemp = temp[i]
            if(sta.length === 0){
                sta.push([curTemp, i]);
            }else{
                let j = sta.length - 1;
                while(j >= 0 && curTemp > sta[j][0]){
                    res[sta[j][1]] = i - sta[j][1];
                    sta.pop();
                    j--;
                }
                sta.push([curTemp, i]);
            }
        }
        for (let k = 0; k < sta.length; k++){
            res[sta[k][1]] = 0;
        }
        return res;
    }
}
