require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/FupvWTQbQ4UHG_BJZ8_jEls75thPT0cn",
      accounts: [
        "e5972a1063723b3f11f91c19f10adf65cced7ae867c54e94ab686334720422d7",
      ],
    },
  },
};
