import crypto from 'crypto'

type blockData = {
    from: string
    to: string
    amount: number
    currency: ('USDT' | 'BTC' | 'ETH')
}

const SHA256 = (message : string) : string => {
    return crypto.createHash('sha256').update(message).digest('hex')
}

export class Block {
    timestamp: number
    data: blockData
    hash: string
    prevHash: string

    constructor(timestamp: number, data?: blockData) {
        this.timestamp = timestamp
        this.data = data
        this.hash = this.getHash()
        this.prevHash = ""
    } 

    getHash = () : string => {
        return SHA256(this.prevHash + this.timestamp.toString() + JSON.stringify(this.data))
    }

}

export class Blockchain{
    chain: Block[]

    constructor() {
        this.chain = [new Block(Date.now())]
    }

    getLastBlock = () : Block => {
        return this.chain[this.chain.length - 1]
    }

    addBlock = (block : Block) => {
        block.prevHash = this.getLastBlock().hash

        block.hash = block.getHash()

        this.chain.push(Object.freeze(block))
    }

    isValid = (blockchain : Block[]) : boolean => {
        for (let i = 1; i < blockchain.length; i++) {
            const currentBlock = blockchain[i]
            const prevBlock = blockchain[i-1]

            if (
                currentBlock.hash !== currentBlock.getHash()
                ||
                prevBlock.hash !== currentBlock.prevHash
            ) {
                return false
            }
        }
        return true
    }
}