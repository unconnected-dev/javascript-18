// Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/description/

const caseS_1 = "()";
const caseS_2 = "()[]{}";
const caseS_3 = "(]";
const caseS_4 = "{[]}";
const caseS_5 = "([)]";
const caseS_6 = "]";
const caseS_7 = "(])";

if(true){
    var isValid = function(s) {
        const myClosedDict = {};
        myClosedDict["}"] = "{";
        myClosedDict[")"] = "(";
        myClosedDict["]"] = "[";

        const myOpenSet = new Set();
        myOpenSet.add("{");
        myOpenSet.add("(");
        myOpenSet.add("[");

        let res = "";

        for (let c of s) {
            if (myOpenSet.has(c)) {
                res += c;
            } else if (res.length >= 1 && res[res.length - 1] === myClosedDict[c]) {
                res = res.slice(0, -1);
            } else if (myClosedDict.hasOwnProperty(c)) {
                return false;
            }
        }

        return res === "";
    };
}