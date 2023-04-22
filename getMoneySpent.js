function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let totalPurchase=null;

    for (let i = 0; i < keyboards.length; i++) {
        const keyboard = keyboards[i];

        for (let j = 0; j < drives.length; j++) {
            const drive = drives[j];
            const total = keyboard + drive;

            if (total <= b) {
               totalPurchase= totalPurchase<=total?total:totalPurchase;
            }
        }
    } 
    return totalPurchase?totalPurchase : -1;
}