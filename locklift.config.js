module.exports = {
  compiler: {
    path: '/usr/bin/solc-ton-broxus',
  },
  linker: {
    path: '/usr/bin/tvm_linker',
  },
  networks: {
    dev: {
      ton_client: {
        network: {
          server_address: 'https://net.ton.dev'
        }
      },
      giver: {
        address: '0:a7524445798ee740fdc4adb3b30e06c1e30d31d5181c23636cbb75213236c8ec',
        abi: { "ABI version": 2, "header": ["pubkey", "time", "expire"], "functions": [ { "name": "constructor", "inputs": [ ], "outputs": [ ] }, { "name": "sendGrams", "inputs": [ {"name":"dest","type":"address"}, {"name":"amount","type":"uint64"} ], "outputs": [ ] }, { "name": "owner", "inputs": [ ], "outputs": [ {"name":"owner","type":"uint256"} ] } ], "data": [ {"key":1,"name":"owner","type":"uint256"} ], "events": [ ] },
        key: process.env.GIVER_KEY,
      },
      keys: {
        phrase: '',
        amount: 20,
      }
    },
    local: {
      ton_client: {
        network: {
          server_address: 'http://localhost/',
        },
      },
      giver: {
        address: '0:841288ed3b55d9cdafa806807f02a0ae0c169aa5edfe88a789a6482429756a94',
        abi: { "ABI version": 1, "functions": [ { "name": "constructor", "inputs": [], "outputs": [] }, { "name": "sendGrams", "inputs": [ {"name":"dest","type":"address"}, {"name":"amount","type":"uint64"} ], "outputs": [] } ], "events": [], "data": [] },
        key: '',
      },
      keys: {
        phrase: '',
        amount: 20,
      }
    },
  },
};