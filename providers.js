import "dotenv/config";
import { ethers } from "ethers";

const infuraId = process.env.API_KEY;

const infuraUrl = `https://mainnet.infura.io/v3/${infuraId}`;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

console.log("Block number: ", await provider.getBlockNumber());
console.log("Vitaliks wallet address: ", await provider.resolveName('vitalik.eth'));
console.log("Who owns this wallet: ", await provider.lookupAddress('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'));

const vitalikBalance = (await provider.getBalance('vitalik.eth')).toString(); // easy way to see how much weis wallet has
let sandfordBalance = await provider.getBalance('sanfordstout.eth');

sandfordBalance = sandfordBalance.add(ethers.utils.parseEther('5000')); // adding 5000 ETH to sanfords balance

console.log("Vitaliks balance is ", ethers.utils.formatEther(vitalikBalance), " ETH"); //proper way to see ETH via ethers.utils module

console.log("1.5 ETH is ", ethers.utils.formatEther(ethers.utils.parseEther("1.5")));

sandfordBalance > vitalikBalance ? console.log('sanford wins!') : console.log('vitalik wins!');