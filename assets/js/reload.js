async function fetchData(url) {
	const queryString = { method: "GET", cache: "no-cache" };
	queryString.nocache = Date.now();
	try {
		const response = await fetch(url, queryString);
		return await response.json();
	} catch (err) {
		throw new Error(`Failed to load: ${url}\n${err}`);
	}
}

((checkTime) => {
	const isValid = date => date.indexOf(new Date(Date.now() - 216e5).toISOString().split('T')[0]) !== -1;
	let apiDate = null;
	fetchData('https://rdocdn.xyz/api/dailies.php')
		.then((data) => {
			if (!data.date) reject('data.date does not exists');
			apiDate = data.date;
		})
		.then(() => {
			setInterval(async () => {
				if (!isValid(apiDate)) {
					await wait(checkTime);
					location.reload(true);
				}
			}, checkTime);
		})
		.catch((e) => new Error(e));
})(10000);


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}