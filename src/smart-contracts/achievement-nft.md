# Achievement NFT

## Smart Contract
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AchievementNFT is ERC721, AccessControl {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    
    struct Achievement {
        string achievementType;
        uint256 milestone;
        uint256 unlockedAt;
        address playerAddress;
        bytes signature;
    }
    
    mapping(uint256 => Achievement) public achievements;
    
    constructor() ERC721("ShootingGame Achievement", "SGACH") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }
    
    function mintAchievement(
        address player,
        string memory achievementType,
        uint256 milestone,
        bytes memory signature
    ) public onlyRole(MINTER_ROLE) returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        
        achievements[newTokenId] = Achievement({
            achievementType: achievementType,
            milestone: milestone,
            unlockedAt: block.timestamp,
            playerAddress: player,
            signature: signature
        });
        
        _mint(player, newTokenId);
        return newTokenId;
    }
}
```

## Achievement Types
- Kills milestones
- Hits accuracy
- Survival time
- Tournament victories
- Special events

## Metadata Structure
```json
{
    "name": "SharpShooter Level 1",
    "description": "Achieved 100 hits with 90% accuracy",
    "image": "ipfs://...",
    "attributes": [
        {
            "trait_type": "Achievement Type",
            "value": "Accuracy"
        },
        {
            "trait_type": "Milestone",
            "value": 100
        },
        {
            "display_type": "date",
            "trait_type": "Unlocked",
            "value": 1735689600
        }
    ]
}
```