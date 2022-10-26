# Hardhat template
This is a bare bones repository to let new developers create forked mainnets using as little code as possible.

The only change that needs to be made is the RPC URL in `rpc_url.js` needs to be updated to a valid RPC URL.

When that's done, just run
```
npm i
```
to install hardhat, and
```
node .
```
to make your forked mainnet. It will be running on `http://localhost:8080/` with chain id `0xa8e1`.

To understand how to use this repository to test the Axel API, you can look at the docs at https://docs.axel.dev/edit/how-to-verify-transactions-using-hardhat.
