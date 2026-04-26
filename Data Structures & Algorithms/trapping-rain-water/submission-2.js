/*

formular
2 columns : Sigma_lf_rt((min(h[lf],h[rt]) - h[i]))

hl = h[lp] // lp: the left pointer, lf: the hight of left pointer
hr = h[rp]
intro 1 mid columns, from which side? the lower side !
if hl < hr, mid = h[lp + 1]
    if hl < mid : hl = mid, side[lp] = mid // found a new side
    else: side[lp] = 0 // the mid is not a new side
    lp++;
else, mid = h[rp - 1]
    if rt<mid: hr = mid, side[rs] = mid
    else: side[rp] = 0
    rp--;




comp to Container With Most Water
same: lower bar limits the volumn
diff: 
simpler: every water area counts, no movement
complexier: the floor is not flat, vertical calculation
harder: column has width, water only exists between non-immediate neibors
*/

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(h) {
        let sides = new Array(h.length);
        let lp = 0;
        let rp = h.length - 1;
        let hl = h[lp];
        let hr = h[rp];
        sides[lp] = h[0];
        sides[rp] = h[rp];

        while(lp < rp - 1){ // note the stopping point! leave one space between lp and rp
            if(hl < hr){
                lp++;
                if(hl < h[lp]){
                    sides[lp] = h[lp];
                    hl = h[lp];
                }else{
                    sides[lp] = 0
                }
            }else{
                rp--;
                if(hr < h[rp]){
                    sides[rp] = h[rp];
                    hr = h[rp];
                }else{
                    sides[rp] = 0;
                }
            }
        }

        let s = [];
        for(let i = 0; i < sides.length; i++){
            if(sides[i] !== 0){
                s.push(i);
            }
        }

        let sum = 0;
        for(let i = 0, j = 1; j < s.length; i++, j++){
            let ho = 0;
            if(h[s[i]] < h[s[j]]){
                ho = h[s[i]];
            }else{
                ho = h[s[j]];
            }
            for(let k = s[i] + 1; k < s[j]; k++){
                sum += (ho - h[k])
            }

        }

        return sum;

    }
}
