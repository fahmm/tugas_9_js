function forin (){
	var pemain = {
		nama : "sakuragi",
		umur : 16,
		posisi : "center"
	}
	for (var x in pemain){
		console.log (pemain[x])
	}
}

forin()