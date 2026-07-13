class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isChar(ch)  {
        return /^[a-zA-Z0-9]$/i.test(ch);
    }
    isPalindrome(s) {
        let lf = 0;
        let rt = s.length - 1;
        while(lf < rt){
            while(!this.isChar(s.charAt(lf)) && lf < rt){
                lf++;
            }
            while(!this.isChar(s.charAt(rt)) && lf < rt){
                rt--;
            }
            if(s.charAt(lf) !== s.charAt(rt) 
            && s.charAt(lf).toLowerCase() !== s.charAt(rt).toLowerCase()){
                return false;
            }
            lf++;
            rt--;
        }
        return true;
    }


}
