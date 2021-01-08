setInterval(() => {
	const now = new Date();
	const harrietMissionsReset = (() => {
		const todayDayMs = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())).valueOf() - 7560000;
        const timeFromReset = (now.valueOf() - todayDayMs) / 60000;
        const timeToReset = Math.ceil(48 - (timeFromReset % 48));
        document.querySelector('#harriet').innerHTML = timeToReset;
	})();

	const moonshineBuyersReset = (() => {
		const todayDayMs = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())).valueOf();
        const timeFromReset = (now.valueOf() - todayDayMs) / 60000;
        const timeToReset = Math.ceil(96 - (timeFromReset % 96));
        document.querySelector('#moonshine').innerHTML = timeToReset;
	})();

	const gameTime = (() => {
		const gameTime = new Date(now * 30);
		gameTime.setUTCMinutes(gameTime.getUTCMinutes() - 3);
		const gameHour = gameTime.getUTCHours();
		const clockFormat = {timeZone: 'UTC',hour: 'numeric',minute: 'numeric',hourCycle:'h23'};
		document.querySelector('#game').innerHTML = gameTime.toLocaleString('en', clockFormat);
	})();

	const dailyReset = (() => {
		const dailyReset = new Date(now);
		const resetHour = dailyReset.getUTCHours();
		const clockFormat = {timeZone: 'UTC',hour: 'numeric',minute: 'numeric',hourCycle:'h23'};
		document.querySelector('#dailiesreset').innerHTML = dailyReset.toLocaleString('en', clockFormat);
	})();
}, 1000);