
var num = prompt("Enter any number: ");
var num1 = parseInt(num);
console.log("Given number by user is : "+num1)
if (isNaN(num)) {
    alert(num + " Please enter a valid number: ")
}
else {
    var arr=[];
    var ctr=0;
    for (var j=2; j <= num1; j++) {
        ctr = 0;
        for (var i = 2; i<j; i++) {
            if (j % i == 0) {
                ctr = 1;
                break;
            }
        }
        if (ctr == 0) {
            console.log(j);
        }
    }
}