class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let map = new Map();

        for (let i = 0; i < s.length; i++){
            if(!map.has(s.charAt(i))){
                map.set(s.charAt(i), 1);
            }else{
                map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
            }
        }

         for (let i = 0; i < t.length; i++){
            if(!map.has(t.charAt(i))){
                return false;
            }else if (map.get(t.charAt(i)) === 0){
                return false;
            }
            else{
                map.set(t.charAt(i), map.get(t.charAt(i)) - 1);
            }
        }

        for (let value of map.values()){
            if (value !== 0){
                return false;
            }
        }

        return true;
    }
}
