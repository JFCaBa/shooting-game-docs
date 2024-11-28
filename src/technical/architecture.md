# Technical Architecture

## System Overview

```mermaid
graph TD
    A[Game Client] --> B[Game Server]
    B --> C[Smart Contracts]
    C --> D[Token Contract]
    C --> E[Achievement NFTs]
    B --> F[Player Database]
    A --> G[MetaMask]
    G --> C
```

## Components

### Game Client
- Unity-based iOS app
- Web3 integration via MetaMask
- Real-time location tracking
- AR capabilities

### Game Server
- WebSocket for real-time communication
- Player position synchronization
- Score tracking and verification
- Achievement progress monitoring

### Blockchain Integration
- Ethereum Sepolia testnet
- Smart contracts for tokens and NFTs
- MetaMask for wallet connection
