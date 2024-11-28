# Testing Guide

## iOS Tests

Current test coverage includes:

### Unit Tests
- `GameManagerTests`: Game logic and state management
- `WebSocketServiceTests`: Real-time communication
- `Web3ServiceTests`: Wallet integration
- `WalletViewModelTests`: Wallet UI logic

### UI Tests
- `WalletUITests`: Wallet connection flow
- `ShootingAppUITests`: Core gameplay elements

Run tests:
```bash
xcodebuild test -workspace ShootingApp.xcworkspace -scheme ShootingApp -destination 'platform=iOS Simulator,name=iPhone 15'
```

## Smart Contract Tests

Current test coverage:

- Token deployment
- Access control
- Basic token operations

Run tests:
```bash
npx hardhat test
```

## Server Tests

Work in Progress - To be implemented in Q1 2025:
- WebSocket connection handling
- Player state management
- Game event processing
