// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    // it stored permanently in contract storage
    uint256 totalWaves;

    constructor() {
        console.log("Hey I'm a contract");
    }

    function wave() public {
        totalWaves += 1;
        console.log('%s has was waved;', msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log('We have %d total waves!', totalWaves);
        return totalWaves;
    }
}