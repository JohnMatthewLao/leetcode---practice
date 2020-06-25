var swapPairs = function(head) {
    let newList = {}
    if(head === null || head.next === null) {
        return head
    }
    let recursion = (newList, list) => {
            if(list === null || list.next === null) {
                return ;
            }
            let value = list.val;
            newList.val = list.next.val;
            newList.next = list.next;
            newList.next.val = value;
            recursion(newList.next.next,list.next.next)   
    }
    recursion(newList, head)
    return newList
};