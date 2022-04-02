function timer(parentSelector, deadline) {

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date());
		let	days = Math.floor( (t / (1000 * 60 * 60 * 24)) ),
			hours = Math.floor( (t / (1000 * 60 * 60) % 24)),
			minutes = Math.floor((t / (1000 * 60) % 60)),
			seconds = Math.floor( (t / 1000) % 60 );

		if (t <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		}

		return {
			t,
			days,
			hours,
			minutes,
			seconds,
		};
	}

}

export default timer;