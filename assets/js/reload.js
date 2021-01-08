function refreshData() {
	var previous = null;
	var current = null;

	$.getJSON("https://rdocdn.xyz/api/dailies.php", function (json) {
		current = JSON.stringify(json);
		if (previous && current && previous !== current) {
			console.log('refresh');
			location.reload();
		}
		previous = current;
	});
}
setInterval(refreshData, 2000);