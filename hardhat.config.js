module.exports = {
   solidity: "0.7.3",
   networks: {
      hardhat: {
         chainId: 0xa8e1,
         forking: {
            url: require("./rpc_url"),
         },
         mining: {
            auto: true,
         },
      },
   },
};
