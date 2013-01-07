$(document).on('ready', function() {
// THIS IS THE TOP OF YOUR PROGRAM


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
		for(var i=2; i<=Math.sqrt(args); i++){
			if(args%i==0){
				return false;
			}
		}
		return true;
	}
	
	function primeFact(){
		var num = 600851475143;
		for(var i=2; i<=num; i++){
			console.log("Processing");
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

$('#q5').click(function() {
	var div = false;
	var smallest;
	function leastDiv(){
		for(var i=1; i>0; i++){
			for(var j=20; j>0; j--){
				if(i % j != 0){
					break;
				}
				if(j==1){
					div=true;
					smallest = i;
					break;
				}
			}
			if(div==true){
				break;
			}
		}
		console.log("Smallest " + smallest);
	}
	leastDiv();
});

$('#q6').click(function() {
	var sumsq = 0;
	var sqsum = 0; //sumsq = sum of squares, sqsum = square of sums
	var difference;
	var square=0;
	function sqDiff(){
		for(var i=1; i<=100; i++){
			sumsq = sumsq+(i*i);
			sqsum = sqsum+i;
		}
		difference = ((sqsum*sqsum)-sumsq);
		console.log("Difference " + difference);
	}
	sqDiff();
});

$('#q7').click(function() {
	var primes = new Array();
	var i = 2;
	function isPrime(args){
		for(var i=2; i<=Math.sqrt(args); i++){
			if(args%i==0){
				return false;
			}
		}
		return true;
	}
	
	function ttOnePrime(){
		while(primes.length < 10001){
			if(isPrime(i)){
				primes.push(i);
			}
			i++;
		}
		console.log("10001st Prime " + primes[primes.length-1]);
	}
	ttOnePrime();
});

$('#q8').click(function() {
	var num = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
	var largest = 0;
	
	function largeProduct(){
		for(var i=0; i<num.length-4; i++){
			var product = 1;
			for(var j=i; j<i+5; j++){
				product = product*parseInt(num.charAt(j));
				if(j==i+4 && largest<product){
					largest = product;
				}
			}
		}
		console.log("Largest " + largest);
	}
	largeProduct();
});

// THIS IS THE BOTTOM OF YOUR PROGRAM
});