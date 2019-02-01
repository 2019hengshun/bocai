const EOS = require('eosjs')
let eosConfig = {
  chainId: '3670d2e3d104ed6d78f49fc4c5be79ba768e8900517cb845e3f1ab4d9c5a7e46',
  keyProvider: ['5KVqt4QT67Kp9Q3tcjRtEUwna1moCTceKnY42wAswhRWzfXs2C4'],
  httpEndpoint: 'http://127.0.0.1:8888',
  // jungle testnet 
  expireInSeconds: 60,
  broadcast: true,
  debug: true,
  verbose: true,
  sign: true
}
let eos = EOS(eosConfig)
let pubkey = 'EOS6ZzHwHTHoehE2bFbydf2mSXxLksY8LYE2J5paf3iXyGsbuvtgX'
const accountName = 'eosioo225544'
eos.getInfo((error, result) => {
  console.log('EOS ====> ', error, result)
})
eos.transaction(tr => {
  tr.newaccount({
    creator: 'eosioo112233',
    name: accountName,
    owner: pubkey,
    active: pubkey
  })
  tr.buyrambytes({
    payer: 'eosioo112233',
    receiver: accountName,
    bytes: 4096
  })
  tr.delegatebw({
    from: 'eosioo112233',
    receiver: accountName,
    stake_net_quantity: '0.1000 EOS',
    stake_cpu_quantity: '0.1000 EOS',
    transfer: 0
  })
}, {
  broadcast: true
}).then((resp) => {
  console.log('EOS resp ', resp)
})
