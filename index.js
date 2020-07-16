module.exports = {
	findAsync : function (array=[]) {
		return new Promise((resolve) => {
			setTimeout(() => {
				let numSequences = this.findNumSequences(array);
				resolve(numSequences.map(this.numSequenceToString).filter(Boolean).join(','));
			}, 0);
		})
	},
	findNumSequences : function(array=[], result=[]) {
		if (!array.length) return result;

		let nextArray = [];

		for (let i=0;i<array.length;i++) {
			if (array[0] !== array[i]-i) nextArray = array.splice(i);	
		}

		result.push(array)

		return this.findNumSequences(nextArray, result);
	},
	numSequenceToString : function (array=[]) {
		if (array.length <= 2) return array.toString();
		else return `${array[0].toString()}-${array[array.length-1].toString()}`
	}
}
