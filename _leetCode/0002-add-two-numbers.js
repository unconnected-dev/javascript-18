// Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/description/

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const caseList1_1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const caseList2_1 = new ListNode(5, new ListNode(6, new ListNode(4)));

const caseList1_2 = new ListNode(0);
const caseList2_2 = new ListNode(0);

const caseList1_3 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
const caseList2_3 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

// Solution converted from Python to JavaScript which gives the correct results
// but does not work for LeetCode as they require a regular function solution
if(true){
    class Solution {
        constructor() {
            this.head = null;
        }
    
        addTwoNumbers(l1, l2) {
            let sl1 = '';
            let sl2 = '';
    
            // Traverse first linked list
            let current = l1;
            while (current) {
                sl1 += String(current.val);
                current = current.next;
            }
    
            // Traverse second linked list
            current = l2;
            while (current) {
                sl2 += String(current.val);
                current = current.next;
            }
    
            // Reverse and convert to numbers
            const n1 = parseInt(sl1.split('').reverse().join(''), 10);
            const n2 = parseInt(sl2.split('').reverse().join(''), 10);
    
            // Add numbers and reverse the result
            const res = String(n1 + n2).split('').reverse().join('');
    
            // Create result linked list
            let prev = new ListNode();
            const head = prev;
            for (let c of res) {
                let newNode = new ListNode(parseInt(c, 10));
                prev.next = newNode;
                prev = newNode;
            }
    
            this.head = head.next;
            return head.next;
        }
    
        printList() {
            let currentNode = this.head;
            let result = '';
    
            while (currentNode) {
                result += `${currentNode.val} -> `;
                currentNode = currentNode.next;
            }
    
            result += 'null';
            console.log(result);
        }
    }
    
    const solution = new Solution();
    
    solution.addTwoNumbers(caseList1_1, caseList2_1);
    solution.printList();
    
    solution.addTwoNumbers(caseList1_2, caseList2_2);
    solution.printList();
    
    solution.addTwoNumbers(caseList1_3, caseList2_3);
    solution.printList();
}