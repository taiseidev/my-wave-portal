// run.js
const main = async () => {
  // hre.ethers.getSigners() は Hardhat が提供する任意のアドレスを返す関数。
  const [owner, randomPerson1, randomPerson2] = await hre.ethers.getSigners();
  // WavePortalコントラクトをコンパイル。hre.ethersはhardhatのコード
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  // Hardhat がローカルの Ethereumネットワークを、コントラクトのためだけに作成。スクリプトの実行が完了したら破棄される。
  const waveContract = await waveContractFactory.deploy();
  const wavePortal = await waveContract.deployed();

  console.log("Contract deployed to:", wavePortal.address);
  console.log("Contract deployed by:", owner.address);
  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  // wave関数を実行してWavePortalコンストラクタの状態変数に書き込みをおこなっているためガス代が発生する。
  // ガス代はマイナーに支払われる。
  // awaitして書き込み待ち
  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson1).wave();
  await waveTxn.wait();
  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson2).wave();
  await waveTxn.wait();
  waveCount = await waveContract.getTotalWaves();
  // デプロイされたコントラクト.addressで該当コントラクトのaddressを取得。
  // 今回はhardhatを使用してローカル環境で実行しているが、イーサリアムメインネットワークにデプロイすれば、
  // このメールアドレスを知っている人は誰でもこのスマートコントラクトにアクセスすることができる。
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
