# WebSocket API

## Current Implementation

The game currently uses WebSocket for real-time communication on port 8182.

### Connection

```typescript
const serverURL = "ws://onedayvpn.com:8182"
```

### Message Types

Current implemented messages:

```typescript
enum MessageType {
    join = "join",
    shoot = "shoot",
    hit = "hit",
    kill = "kill",
    hitConfirmed = "hitConfirmed",
    leave = "leave"
}
```

### Message Format

```typescript
interface GameMessage {
    type: MessageType;
    playerId: string;
    data: MessageData;
    timestamp: Date;
    targetPlayerId?: string;
}

interface MessageData {
    player: Player;
    shotId?: string;
    hitPlayerId?: string;
    damage?: number;
}

interface Player {
    id: string;
    location: LocationData;
    heading: number;
    timestamp: Date;
}

interface LocationData {
    latitude: number;
    longitude: number;
    altitude: number;
    accuracy: number;
}
```

## Example Messages

### Join Game
```json
{
    "type": "join",
    "playerId": "0x123...",
    "data": {
        "player": {
            "id": "0x123...",
            "location": {
                "latitude": 40.7128,
                "longitude": -74.0060,
                "altitude": 10,
                "accuracy": 5
            },
            "heading": 180,
            "timestamp": "2024-11-28T12:00:00Z"
        }
    },
    "timestamp": "2024-11-28T12:00:00Z"
}
```

## Roadmap Features

### Phase 1 (Q1 2025)
- [ ] Player authentication via JWT
- [ ] Rate limiting for shoot events
- [ ] Leaderboard events
- [ ] Tournament lobby support

### Phase 2 (Q2 2025)
- [ ] Team-based messaging
- [ ] Voice chat integration
- [ ] Spectator mode events
- [ ] Achievement progress notifications

## Known Limitations

1. Current Implementation:
   - Basic reconnection logic
   - Simple player synchronization
   - No message compression

2. Areas for Improvement:
   - Message validation
   - Error handling standardization
   - Connection state management
