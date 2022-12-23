import { ethers} from 'ethers';

const wallet = ethers.Wallet.createRandom();

console.log('wallet address: ', wallet.address);
console.log('private key: ', wallet.privateKey);
console.log('mnemonic phrase: ', wallet.mnemonic.phrase);