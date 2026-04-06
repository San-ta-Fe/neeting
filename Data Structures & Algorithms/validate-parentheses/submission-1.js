/*
...([[{}] {}])...
(
why stack?
scan from left to wrigh, when encounter a char, 
it is hard to get a general rule to decide if the char is 'legal'
the rule woudl be, if it is an opening, it needs a closing at the the 'proper' location later
and vice versa
'proper' means every chars between pairs are pairs
instead of waiting for the proper 
 - why not recursion ? the base problem is a pair with nothing inside
    because, what's the reduction steps? where to break up the bigger string?
    the "tree" structure needs to be discovered by scanning the whole string
    and the structure is redundant to get answer
*/
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let st = [];
        let pair = new Map(
         [
            [')', '('],
            ['}', '{'],
            [']', '[']
        ]);
        let i = 0; 
        while(i < s.length){
            let ch = s.charAt(i);
            if(!pair.has(ch)){
                st.push(ch);
            }else{
                if( st.length > 0  && st[st.length - 1] === pair.get(ch)){
                   st.pop();
                }else {
                    return false;
                }
            }
            i++;
        }

        return st.length === 0;
    }
}
