require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth snow property harvest option equal genre'; 
let testAccounts = [
"0x32949a9909507e3698ff5b27887e7b8dfa3a34d5b7505013c31fe6f75258e5d0",
"0x9ccfab658da54d23369a69cff34ae6c2941ae4432da1625d9b07c3cee330b830",
"0x74dedcdc22ec0aae8b283ac0cb8e3fd8179a122a81708bed90cb46828fe7db8e",
"0xf23150c11cbc1f22669632054352d99cc2473d3b1f0db7bf4288d6bda1e29c04",
"0xb16f51a62d554fbce4ff654025ec90fbb6e6d39c4155df8f0bf3656b4de6c2c6",
"0x59384a09c8365c9550a32d35eadc22fdf414bdebbffa4ee38e9973b5f3833403",
"0xc9990885177217e7fdcabf7e8b37f008c7fe79e41fe6a3bcbbd97ff7c7edb64f",
"0x0bc7aa7b9ec12b722116a6e071e5bcd0414738e24a0247549f5c3027f35d7ba8",
"0x8d2ed635aae782b2ebc396667be82e059a638dd153b6c6d2f2adc4be81e6ea18",
"0x945027950b3603c1f54b84225e98a91b65990b890a402fe7eb60409580935fa9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
