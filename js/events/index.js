let bankAccount = {
	_balance: 0,
	get balance() {
		return this._balance;
	},
	set upBalance(value) {
		this._balance += value;
		document.querySelector(
			'.balance'
		).textContent = `На счету ${this._balance}€`;
	},
	set withdraw(value) {
		if (value > this._balance) {
			alert('Недостаточно средств');
		} else {
			this._balance -= value;
		}
		document.querySelector(
			'.balance'
		).textContent = `На счету ${this._balance}€`;
	},
};
document.querySelector('.bank-button1').addEventListener('click', () => {
	let value = prompt('Введите сумму:');
	bankAccount.upBalance = +value;
	if (value === null) {
		alert(`Ваш текущий баланс: ${bankAccount.balance}€`);
	}
});
document.querySelector('.bank-button2').addEventListener('click', () => {
	let value = prompt('Введите сумму:');
	bankAccount.withdraw = +value;
	if (value === null) {
		alert(`Ваш текущий баланс: ${bankAccount.balance}€`);
	}
});
