var Password = function() {
	this.pass = "";

	this.generate = function(chars) {
		for (var i= 0; i<chars; i++) {
			this.pass += this.getRandomChar();
		}
		return this.pass;
	}

	this.getRandomChar = function() {
  
		var ascii = [[48, 57],[64,90],[97,122]];
		var i = Math.floor(Math.random()*ascii.length);
		return String.fromCharCode(Math.floor(Math.random()*(ascii[i][1]-ascii[i][0]))+ascii[i][0]);
	}
}
