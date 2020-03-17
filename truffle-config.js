require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note soccer purpose hockey enter off strike'; 
let testAccounts = [
"0x06b97ca68255bbda21ff67be2dcb07154c0ccec673f5a4d010dd4143ca624797",
"0x61993a8d7cd2182c59219a6c4800679bb35fb67c5faf816afe9a56800854456e",
"0xbc414f23abdef08b7f758b28f555ad52ba6d191d5ae82c9ff0788659474656b1",
"0x1cff53aabe8e3f8a40f7e6cdd505e762029c74db0f140c1bf68584a33ceb46d7",
"0xbfc9c0e6f262f29a3b09aaee81d0605c81181608a949b8b45963865f3c390106",
"0x191a78b75aeccbd1b3abe447160394d814d311c00e57d8495f9928ce138084c4",
"0xa7a18d2b80c06b107473ed0a0dfbbaab93111f46fbcca0a805e58e3d647303d1",
"0x48f0dfc6eedca350793eba8e89cc6ed6c2348c4824a5e0c830ec88d00e20f551",
"0xad5bd444d2b3bb137108b1d15f21ce3f13050c37e93450470b2b7ece3390fe14",
"0x590f6edd8ecffac0376af544650c7877fb6fca2f45db5553e0a6e053bacefbc6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
