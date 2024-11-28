# Game Events

## Current Events

The game emits several events via NotificationCenter:

```swift
extension Notification.Name {
    static let walletConnectionChanged = Notification.Name("WalletConnectionChanged")
    static let playerWasHit = Notification.Name("playerWasHit")
    static let playerHitTarget = Notification.Name("playerHitTarget")
    static let playerKilledTarget = Notification.Name("playerKilledTarget")
    static let playerDied = Notification.Name("playerDied")
    static let playerRespawned = Notification.Name("playerRespawned")
    static let connectionLost = Notification.Name("connectionLost")
}
```

## Event Usage

### Player Events
- `playerWasHit`: Triggered when player receives damage
- `playerHitTarget`: Fired when successfully hitting another player
- `playerKilledTarget`: Triggered on achieving a kill
- `playerDied`: Emitted when player health reaches zero
- `playerRespawned`: Fired after respawn cooldown

### Connection Events
- `walletConnectionChanged`: MetaMask connection status update
- `connectionLost`: WebSocket disconnection event

## Planned Events

### Phase 1 (Q1 2025)
- [ ] Achievement progress events
- [ ] Tournament status updates
- [ ] Reward distribution events

### Phase 2 (Q2 2025)
- [ ] Team events
- [ ] Voice chat status
- [ ] Match start/end events
