// SPDX-License-Identifier: UNLICENSED

// Solidity コンパイラのバージョン
pragma solidity ^0.8.4;
// ログ出力のためのインポート
import "hardhat/console.sol";
// cntractはclassに相当するもの。初期化時にWavePortalコントラクトの状態を初期化
contract WavePortal {
    uint256 totalWaves;
    // constructorは、コントラクトがデプロイされるときに初めて実行される。
    // constructorが実行されたのちにコードがブロックチェーンにデプロイ
    constructor() {
        console.log("Here is my first smart contract!");
    }

    function wave() public {
        totalWaves++;
        console.log("%s has waved!", msg.sender);
    }
    // view関係修飾子を付けることによって状態変数の読み取りのみ可能に
    // 読み取りだけなのでガス代は発生しない
    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
