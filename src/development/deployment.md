# Deployment Guide

## Current Deployment

### iOS App
- Development: TestFlight internal testing
- Distribution: Pending App Store review

### Smart Contracts
Currently deployed on Sepolia testnet:
- Token Contract: [Contract Address Pending]
- Achievement NFT: [Contract Address Pending]

### Game Server
- WebSocket Server: Port 8182
- REST API: [Work in Progress]

## Deployment Process

### iOS App
1. Archive in Xcode
2. Upload to TestFlight
3. Submit for review

### Smart Contracts
1. Deploy token contract
```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

2. Verify on Etherscan
```bash
npx hardhat verify --network sepolia [CONTRACT_ADDRESS]
```

### Server Deployment
1. Build server
```bash
npm run build
```

2. Start production server
```bash
npm start
```

## Future Deployments

### Phase 1 (Q1 2025)
- Mainnet contract deployment
- Production server infrastructure
- App Store release

### Phase 2 (Q2 2025)
- Multiple server regions
- Load balancing
- Advanced monitoring
