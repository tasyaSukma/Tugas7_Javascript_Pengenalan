var tinggi = [170, 160,190, 140, 158, 175, 188, 147, 155, 120]

console.log("Menggunakan pengulangan biasa")
for(i=0; i<tinggi.length ; i++){
	console.log(tinggi[i])
}

var x;
console.log("Menggunakan for of")
for(x of tinggi){
	console.log(x)
}