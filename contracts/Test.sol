// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Test {
  function add(uint256 a, uint256 b) public pure returns(uint256 sum){
    sum = a+b;
  }

  function sub(uint256 a, uint256 b) public pure returns(uint256 diff){
    diff = a-b;
  }
}
