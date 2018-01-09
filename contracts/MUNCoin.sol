pragma solidity ^0.4.16;

contract MUNCoin {

	string public name = 'MUNCoin';
	string public symbol = 'MUN';
	uint public constant _totalSupply = 25000000;
	uint public constant decimalPlaces = 18;

	address public owner;

	mapping (address => uint) balance;

	// announce the transfer to the blockchain
	event Transfer(address indexed _from, address indexed _to, uint _value); 


	// contructor function, called when contract is created
	function MUNCoin() public {
		owner = msg.sender;
		balance[owner] = _totalSupply;
	}

	// return the total supply of MUNCoin available
	function totalSupply() public pure returns (uint) {
		return _totalSupply;
	}

	// return the balance of the specified owner
	function balanceOf(address _owner) public view returns (uint) {
		return balance[_owner];
	}

	// transfer specified amount of MUNCoin to the address provided
	function transfer(address _to, uint _amount) public returns (bool success) {
		if(balance[msg.sender] >= _amount && _amount > 0 && _amount+balance[_to] > balance[_to]) {
			balance[msg.sender] -= _amount;
			balance[_to] += _amount;
			Transfer(msg.sender, _to, _amount);
			return true;
		} else {
			return false;
		}
	}
}