# System Design

## Client Architecture
```mermaid
graph TD
    A[HomeViewController] --> B[HomeViewModel]
    B --> C[GameManager]
    C --> D[WebSocketService]
    C --> E[PlayerManager]
    C --> F[Web3Service]
    D --> G[Server]
    F --> H[MetaMask]
```

## Server Architecture
```mermaid
graph TD
    A[WebSocket Server] --> B[Player Service]
    A --> C[Game Service]
    B --> D[MongoDB]
    C --> E[Achievement Service]
    E --> F[Smart Contracts]
```

## Data Flow
- Real-time player position updates
- Event-based shot detection
- Achievement progress tracking
- Token rewards distribution