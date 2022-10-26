const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
app.use(express.json());

let crypto = {
    'bitcoin': {
        'name': 'Bitcoin',
        'ticker': 'BTC',
        'type': 'PoW',
        'max supply': '21,000,000',
        'whitepaper': 'https://bitcoin.org/bitcoin.pdf'
    },
    'ethereum': {
        'name': 'Ethereum',
        'ticker': 'ETH',
        'type': 'PoS',
        'max supply': 'unlimited',
        'whitepaper': 'https://github.com/ethereum/wiki/wiki/White-Paper'
    },
    'tether': {
        'name': 'Tether',
        'ticker': 'USDT',
        'type': 'Stablecoin',
        'max supply': 'unlimited',
        'whitepaper': 'https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf'
    },
    'cardano': {
        'name': 'Cardano',
        'ticker': 'ADA',
        'type': 'DPoS',
        'max supply': '45,000,000,000',
        'whitepaper': 'https://docs.cardano.org/en/latest/'
    },
    'solana': {
        'name': 'Solana',
        'ticker': 'SOL',
        'type': 'PoS',
        'max supply': 'unlimited',
        'whitepaper': 'https://solana.com/solana-whitepaper.pdf'
    },
    'unknown': {
        'name': 'unknown',
        'ticker': 'unknown',
        'type': 'unknown',
        'max supply': 'unknown',
        'whitepaper': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(crypto)
})

app.get('/api/:coin', (req, res) => {
    let coin = req.params.coin.toLowerCase()
    crypto[coin] ? res.json(crypto[coin]) : res.json(crypto['unknown'])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on port ${PORT}`)
})