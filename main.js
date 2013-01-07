$(document).on('ready', function() {
// THIS IS THE TOP OF YOUR PROGRAM



/* this is your way to get the text inside the text box:
$('#input').val();
*/

/* 
this is how to check if the submit button is clicked:
$('#submit').on('click', function () {
     /* insert your function to run when the submit button is clicked /*
 });
 */

$('#q1').click(function() {
	
	function multSum(){
		var sum = 0;
		for(var i = 0; i<1000; i++){
			if(i % 15 == 0){
				sum += i;
			}
			else if(i % 3 == 0){
				sum += i;
			}
			else if(i % 5 == 0){
				sum += i;
			}
		}
		console.log(sum);
	}
	
	multSum();
});

$('#q2').click(function() {
	
	function fibSum(){
		var sum = 0;
		var fib1 = 1;
		var fib2 = 2;
		while(fib2<4000000){
			if(fib2 % 2 == 0){
				sum += fib2;
			}
			var temp = fib1 + fib2;
			fib1 = fib2;
			fib2 = temp;
		}
		console.log(sum);
	}
	
	fibSum();
});

$('#q3').click(function() {

	var primes = new Array();
	var largest = 0;

	function isPrime(args){
		for(var i=2; i<args^(1/2); i++){
			if(args%i==0){
				return false;
			}
		}
		return true;
	}
	
	function primeFact(){
		var num = 600851475143;
		for(var i=2; i<=num; i++){
			if(num % i == 0){
				if(isPrime(i)){
					if(largest<i){
						largest = i;
						console.log("Largest " + i);
					}
				}
			}
		}
	}
	primeFact();
});

$('#q4').click(function() {
	
	var largest = 0;
	function isSym(args){
		var pal = args.toString();
		var uplimit = pal.length-1;
		var str1=pal.charAt(pal.length-1);
		var str2;
		for(var i=(pal.length)-2; i>=0; i--){
			str2 = str1.concat(pal.charAt(i));
			str1 = str2;
		}
		if(str2 == pal){
			return true;
		}
		else{
			return false;
		}
	}
	
	function largestPal(){
		for(var i=100; i<1000; i++){
			for(var j=100; j<1000; j++){
				if(isSym(i*j)){
					if(largest < i*j){
						largest = i*j;
						console.log("Largest " + largest);
					}
				}
			}
		}
	}
	largestPal();
});




// THIS IS THE BOTTOM OF YOUR PROGRAM
});