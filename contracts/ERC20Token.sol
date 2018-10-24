pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';

contract TOTOToken is ERC20 {
    string public symbol = "TTT";
    string public  name = "TTT TOKENS";
    uint8 public decimals = 18;
}