# Development Setup

## Prerequisites

- Xcode 15.0+
- iOS 17.0+
- Swift 5.9
- Node.js v18+
- Hardhat
- MetaMask iOS app

## Repository Structure

```
shooting-app/
├── iOS/                  # iOS client application
├── contracts/            # Smart contracts
│   ├── src/
│   └── test/
└── server/              # Game server
    ├── src/
    └── test/
```

## Environment Setup

### iOS Development
1. Clone the repository
```bash
git clone https://github.com/JFCaBa/ShootingApp.git
cd ShootingApp/iOS
```

2. Install dependencies
```bash
pod install
```

3. Open workspace
```bash
open ShootingApp.xcworkspace
```

### Smart Contract Development
1. Install dependencies
```bash
cd contracts
npm install
```

2. Configure environment
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Server Development
1. Install dependencies
```bash
cd server
npm install
```

2. Start development server
```bash
npm run dev
```
