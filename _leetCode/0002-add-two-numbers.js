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
// but does not work for LeetCode as they require a regular function solution,
// not a class solution.
// Goes through the two lists creating a string which are then reversed and 
// added togeather. After reverse the string again, then go through each
// character and create a new linked list
if(false){
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

// Goes through node lists adding numbers and carrying tens over to the next node.
if(true){
    var addTwoNumbers = function(l1, l2) {
        // Create a new dummy ListNode to serve as the starting point of the result list
        const list = new ListNode(0);
        let head = list; 
        let sum = 0;     // To hold the sum of the two digits and any carry
        let carry = 0;   // To hold any carry value greater than 10
    
        // Iterate as long as there are nodes in either l1 or l2 or there is a carry left to process
        while (l1 !== null || l2 !== null || sum > 0) {
    
            // If l1 is not null, add its value to sum and move to the next node
            if (l1 !== null) {
                sum += l1.val;
                l1 = l1.next;
            }
    
            // If l2 is not null, add its value to sum and move to the next node
            if (l2 !== null) {
                sum += l2.val;
                l2 = l2.next;
            }
    
            // If the sum is 10 or greater, we have a carry
            if (sum >= 10) {
                carry = 1;             // Set carry to 1 (indicating we need to carry over)
                sum -= 10;             // Adjust sum to be the last digit (0-9)
            }
    
            // Create a new ListNode with the current sum (0-9) and attach it to the result list
            head.next = new ListNode(sum);
            head = head.next;
    
            // Prepare for the next iteration
            sum = carry; // Set sum to carry (which is either 0 or 1)
            carry = 0;   // Reset carry for the next digits
        }
    
        // Return the next node of the dummy list, which is the head of the actual result list
        return list.next;
    };
}

console.log(`${addTwoNumbers(caseList1_1, caseList2_1).val}`);
console.log(`${addTwoNumbers(caseList1_2, caseList2_2).val}`);
console.log(`${addTwoNumbers(caseList1_3, caseList2_3).val}`);