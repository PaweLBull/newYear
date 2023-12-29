
const playerList = ['РОМА', 'ОКСАНА', 'ВЛАД', 'ТАНЯ', 'ІННА', 'ПАША', 'САША', 'НАСТЯ', 'ДОВГОЛЮК', 'МІША'];

document.querySelector('button').addEventListener('click', () => {
	let res = '';
	const sortedList = [...playerList].sort();
	const inp = document.querySelector('input').value;
	playerList.forEach((el, i) => el === inp.toUpperCase() ? res = sortedList[i] : null);
	document.querySelector('.out').textContent = res;
})



