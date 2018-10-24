pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/math/SafeMath.sol';

contract PayableContract {
    using SafeMath for uint256;

    event buyToken(uint tokensCount, address walletAddr, bytes32 personalHash);
    event hashAdded(bytes32 personalHash);
    event hashRemoved(bytes32 personalHash);

    mapping(bytes32 => bool) isValidHash;

    uint tokenCosts;

    function addHash(bytes32 personalHash) public returns (bool success) {
        require(personalHash != 0);
        isValidHash[personalHash] = true;
        emit hashAdded(personalHash);
        return true;

    }

    function removeHash(bytes32 personalHash) public returns (bool success) {
        require(personalHash != 0);
        isValidHash[personalHash] = false;
        emit hashRemoved(personalHash);
        return true;
    }

    function isHashValid(bytes32 personalHash)public view returns (bool isValid) {
        require(personalHash != 0);
        return isValidHash[personalHash];
    }

    function buyTokens(bytes32 userHash)public payable returns (bool success) {
        require(msg.value >= tokenCosts);
        require(isHashValid(userHash));
        uint buyedTokens = msg.value.div(tokenCosts);
        uint rest = msg.value.mod(tokenCosts);
        emit buyToken(buyedTokens, msg.sender, userHash);

    }
}