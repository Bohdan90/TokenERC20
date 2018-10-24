/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
const HDWalletProvider = require('truffle-hdwallet-provider');

const GAS_LIMIT = 4600000;
const INFURA_API_KEY = 'uqkr6trvUS5QqkPGHqaO';
const MNEMONIC = 'lamp neglect skull spring pool field trumpet amount special live sound theme';

const testRpcHost = process.env.TEST_RPC_HOST || 'localhost';
const testRpcPort = process.env.TEST_RPC_PORT || 8545;

const infuraProvider = network => providerWithMnemonic(
    MNEMONIC || '',
    `https://${network}.infura.io/${INFURA_API_KEY}`
);

const providerWithMnemonic = (mnemonic, rpcEndpoint) =>
    new HDWalletProvider(mnemonic, rpcEndpoint);

function getProvider(network) {
    return process.env.SOLIDITY_COVERAGE
        ? undefined
        : infuraProvider(network);
}

const ropstenProvider = getProvider('ropsten');

const rinkebyProvider = getProvider('rinkeby');

module.exports = {
    contracts_build_directory: __dirname + '/src/contracts',
    networks: {
        development: {
            host: testRpcHost,
            port: testRpcPort,
            network_id: '*', // Match any network id
        },
        truffle_dev: {
            host: 'localhost',
            port: 9545,
            network_id: '*', // Match any network id
            gas: GAS_LIMIT
        },
        ropsten: {
            provider: ropstenProvider,
            network_id: 3,
            gas: GAS_LIMIT
        },
        rinkeby: {
            provider: rinkebyProvider,
            network_id: 4,
            gas: GAS_LIMIT
        },
        docker: {
            host: 'test-rpc',
            port: 8545,
            network_id: '*',
            gas: GAS_LIMIT
        },
        coverage: {
            host: 'localhost',
            network_id: '*',
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01
        }
    }
};