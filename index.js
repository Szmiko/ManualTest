const formatDate = (timeInSeconds) => {
	
    var sec = (timeInSeconds % 60).toFixed(0);
    var min = ((timeInSeconds % 3600) / 60).toFixed(0);
    var h = (((timeInSeconds / 60) / 60).toFixed(0));

    var hours = Math.round(h);

    if (timeInSeconds <= 60) {
        return `${sec}s`;
    } else if (timeInSeconds > 60 && timeInSeconds <= 3600 && sec != 0) {
		return `${min}m ${sec}s`;
	}
	else if (timeInSeconds > 60 && timeInSeconds <= 3600 && sec == 0) {
		return `${min}m`;
    } else if (timeInSeconds > 3600 && min != 0 && sec != 0) {
		return `${hours}h ${min}m ${sec}s`;
	} else if (timeInSeconds > 3600 && min == 0 && sec == 0) {
		return `${hours}h`;
	} else if (timeInSeconds > 3600 && min == 0 && sec != 0) {
		return `${hours}h ${sec}s`;
	} else if (timeInSeconds > 3600 && min != 0 && sec == 0) {
		return `${hours}h ${min}m`;
    };
};

module.exports = formatDate;