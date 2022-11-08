import { Block, Blockchain } from "./blockchain.js";

const test = new Blockchain()

test.addBlock(new Block(Date.now(), {from:"Vladimir", to:"John", amount: 100, currency: "USDT"}))
test.addBlock(new Block(Date.now(), {from:"Josh", to:"Ivan", amount: 10120, currency: "USDT"}))
test.addBlock(new Block(Date.now(), {from:"Max", to:"Lanse", amount: 0.12, currency: "ETH"}))
test.addBlock(new Block(Date.now(), {from:"Sasha", to:"Fedor", amount: 0.000112, currency: "BTC"}))
test.addBlock(new Block(Date.now(), {from:"Vladimir", to:"Alex", amount: 10021, currency: "USDT"}))
test.addBlock(new Block(Date.now(), {from:"John", to:"Alex", amount: 0.2, currency: "BTC"}))
test.addBlock(new Block(Date.now(), {from:"Max", to:"Vladimir", amount: 1020, currency: "USDT"}))

console.table(test.chain, ['data'])
console.table(test.chain, ['hash', 'prevHash'])