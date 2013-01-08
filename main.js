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

$('#q9').click(function() {
	function isTriple(x,y,z){
		if((z*z)+(y*y)==(x*x)){
			return true;
		}
		return false;
	}
	function sumThousand(){
		for(var i=1; i<1000; i++){ 
			for(var j=1; j<i; j++){ 
				for(var k=1; k<j; k++){ 
					if((i+j+k)==1000){
						if(isTriple(i,j,k)){
							var product = i * j * k;
							console.log("a = " + k + " b = " + j + " c = " + i);
							console.log("Product " + product);
							break;
						}
					}
				}
			}
		}
	}
	sumThousand();
});

$('#q10').click(function() {
	var sum = 0;
	function isPrime(args){
		for(var i=2; i<=Math.sqrt(args); i++){
			if(args%i==0){
				return false;
			}
		}
		return true;
	}
	function primeSum(){
		for(var i=2; i<2000000; i++){
			if(isPrime(i)){
				sum = sum + i;
			}
		}
		console.log("Sum " + sum);
	}
	primeSum();
});

$('#q11').click(function() {
	var grid = 
	[[08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],[49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],[81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],[52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],[22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],[24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],[32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],[67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],[24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],[21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],[78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],[16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],[86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],[19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],[04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],[88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],[04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],[20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],[20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],[01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]];

	var largest = 0;
	function upDown(args){
		for(var i=0; i<args[0].length; i++){
			for(var j=0; j<args.length-3; j++){
				var product = 1;
				for(var k=i; k<i+4; k++){
					product = product*args[i][k];
					if(j==i+3 && largest<product){
						largest = product;
					}
				}
			}
		}
		return largest;
	}
	
	function rightLeft(args){
		for(var i=0; i<args.length; i++){
			for(var j=0; j<args[i].length-3; j++){
				var product = 1;
				for(var k=j; k<j+4; k++){
					product = product*args[k][i];
					if(j==i+3 && largest<product){
						largest = product;
					}
				}
			}
		}
	}
	
	function diagonal(args){ 
		var productrt = 1;
		var productlt = 1; 
		for(var i=0; i<args.length-3; i++){ //rows (y)
			for(var j=0; j<args[i].length; j++){ //columns (x)
				if(j-3 >= 0){
					productlt = args[i][j];
					var n = 3;
					while(n > 0){
						productlt = productlt * args[i+n][j-n];
						n--;
					}
				}
				if(j+3 < 20){
					productrt = args[i][j];
					var m = 3;
					while(m > 0){
						productrt = productrt * args[i+m][j+m];
						m--;
					}
				}
				if(largest < productlt || largest < productrt){
					if(productlt > productrt){
						largest = productlt;
					}
					else{
						largest = productrt;
					}
				}
			}
		}
	}
	
	function largestProd(){
		var x = upDown(grid);
		var y = rightLeft(grid);
		var z = diagonal(grid);
		console.log("Largest " + largest);
	}
	largestProd(grid);
});

// THIS IS THE BOTTOM OF YOUR PROGRAM
});