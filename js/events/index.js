let bankAccount = {
	_balance: 0,
	get balance() {
		return this._balance;
	},
	set balance(value) {
		if (value < 0 && -value > this._balance) {
			alert('Недостаточно средств');
		} else {
			this._balance += value;
		}
		document.querySelector(
			'.balance'
		).textContent = `На счету ${this._balance}€`;
	},
};
document.querySelector('.bank-button').addEventListener('click', () => {
	let value = prompt('Введите сумму:');
	bankAccount.balance = +value;
	if (value === null) {
		alert(`Ваш текущий баланс: ${bankAccount.balance}€`);
	}
});
