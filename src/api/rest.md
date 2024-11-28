# REST API (Work in Progress)

## Current Endpoints

### Player Statistics
```
GET /api/v1/players/{playerId}/stats
```

Response:
```json
{
    "hits": 0,
    "kills": 0,
    "deaths": 0,
    "accuracy": 0,
    "playtime": 0
}
```

### Achievements (Planned)
Endpoint will be:
```
GET /api/v1/players/{playerId}/achievements
POST /api/v1/achievements/verify
```

## Planned Endpoints

### Phase 1 (Q1 2025)
- [ ] Tournament Management
  - Create tournaments
  - Join tournaments
  - Tournament results
- [ ] Player Rankings
  - Global leaderboard
  - Weekly rankings
  - Tournament rankings

### Phase 2 (Q2 2025)
- [ ] Team Management
  - Team creation
  - Team invitations
  - Team statistics
- [ ] Match History
  - Match details
  - Player performance
  - Replay data
