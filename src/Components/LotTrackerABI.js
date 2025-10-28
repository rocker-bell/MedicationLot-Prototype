// const LotTrackerABI = [
//   {
//     "type": "constructor",
//     "stateMutability": "nonpayable",
//     "inputs": [
//       { "type": "string", "name": "name" },
//       { "type": "string", "name": "symbol" }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "Approval",
//     "inputs": [
//       { "type": "address", "name": "owner", "indexed": true },
//       { "type": "address", "name": "approved", "indexed": true },
//       { "type": "uint256", "name": "tokenId", "indexed": true }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "ApprovalForAll",
//     "inputs": [
//       { "type": "address", "name": "owner", "indexed": true },
//       { "type": "address", "name": "operator", "indexed": true },
//       { "type": "bool", "name": "approved", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "BatchMetadataUpdate",
//     "inputs": [
//       { "type": "uint256", "name": "_fromTokenId", "indexed": false },
//       { "type": "uint256", "name": "_toTokenId", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "CreditChecked",
//     "inputs": [
//       { "type": "address", "name": "user", "indexed": true },
//       { "type": "uint256", "name": "balance", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "FeePaid",
//     "inputs": [
//       { "type": "address", "name": "payer", "indexed": true },
//       { "type": "uint256", "name": "amount", "indexed": false },
//       { "type": "string", "name": "action", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "LotCreated",
//     "inputs": [
//       { "type": "uint256", "name": "lotId", "indexed": true },
//       { "type": "string", "name": "name", "indexed": false },
//       { "type": "address", "name": "owner", "indexed": true },
//       { "type": "string", "name": "location", "indexed": false },
//       { "type": "uint256", "name": "timestamp", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "LotStatusChanged",
//     "inputs": [
//       { "type": "uint256", "name": "lotId", "indexed": true },
//       { "type": "uint8", "name": "newStatus", "indexed": false },
//       { "type": "uint256", "name": "timestamp", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "LotTransferred",
//     "inputs": [
//       { "type": "uint256", "name": "lotId", "indexed": true },
//       { "type": "address", "name": "from", "indexed": true },
//       { "type": "address", "name": "to", "indexed": true },
//       { "type": "string", "name": "newLocation", "indexed": false },
//       { "type": "uint256", "name": "timestamp", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "LotUpdated",
//     "inputs": [
//       { "type": "uint256", "name": "lotId", "indexed": true },
//       { "type": "address", "name": "owner", "indexed": true },
//       { "type": "string", "name": "location", "indexed": false },
//       { "type": "uint256", "name": "timestamp", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "MetadataUpdate",
//     "inputs": [{ "type": "uint256", "name": "_tokenId", "indexed": false }]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "OwnershipTransferred",
//     "inputs": [
//       { "type": "address", "name": "previousOwner", "indexed": true },
//       { "type": "address", "name": "newOwner", "indexed": true }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "Transfer",
//     "inputs": [
//       { "type": "address", "name": "from", "indexed": true },
//       { "type": "address", "name": "to", "indexed": true },
//       { "type": "uint256", "name": "tokenId", "indexed": true }
//     ]
//   },

//   // ---------- Functions ----------
//   { "type": "function", "name": "FEE_RECIPIENT", "stateMutability": "view", "inputs": [], "outputs": [{ "type": "address", "name": "" }] },
//   { "type": "function", "name": "activateLot", "stateMutability": "payable", "inputs": [{ "type": "uint256", "name": "tokenId" }], "outputs": [] },
//   { "type": "function", "name": "approve", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "to" }, { "type": "uint256", "name": "tokenId" }], "outputs": [] },
//   { "type": "function", "name": "balanceOf", "stateMutability": "view", "inputs": [{ "type": "address", "name": "owner" }], "outputs": [{ "type": "uint256", "name": "" }] },
//   { "type": "function", "name": "creditToken", "stateMutability": "view", "inputs": [], "outputs": [{ "type": "address", "name": "" }] },
//   { "type": "function", "name": "discardLot", "stateMutability": "payable", "inputs": [{ "type": "uint256", "name": "tokenId" }], "outputs": [] },
//   { "type": "function", "name": "getApproved", "stateMutability": "view", "inputs": [{ "type": "uint256", "name": "tokenId" }], "outputs": [{ "type": "address", "name": "" }] },
//   { "type": "function", "name": "getLotStatus", "stateMutability": "view", "inputs": [{ "type": "uint256", "name": "tokenId" }], "outputs": [{ "type": "string", "name": "" }] },
//   {
//     "type": "function",
//     "name": "insert",
//     "stateMutability": "payable",
//     "inputs": [
//       { "type": "string", "name": "name" },
//       { "type": "string", "name": "manufacturer" },
//       { "type": "uint256", "name": "manufactureDate" },
//       { "type": "string", "name": "initialLocation" },
//       { "type": "string", "name": "metadataURI" }
//     ],
//     "outputs": [{ "type": "uint256", "name": "" }]
//   },
//   { "type": "function", "name": "interactionFeePercent", "stateMutability": "view", "inputs": [], "outputs": [{ "type": "uint256", "name": "" }] },
//   { "type": "function", "name": "isApprovedForAll", "stateMutability": "view", "inputs": [{ "type": "address", "name": "owner" }, { "type": "address", "name": "operator" }], "outputs": [{ "type": "bool", "name": "" }] },
//   {
//     "type": "function",
//     "name": "medicationLots",
//     "stateMutability": "view",
//     "inputs": [{ "type": "uint256", "name": "" }],
//     "outputs": [
//       { "type": "uint256", "name": "lotId" },
//       { "type": "string", "name": "name" },
//       { "type": "string", "name": "currentHandler" },
//       { "type": "string", "name": "manufacturer" },
//       { "type": "uint256", "name": "manufactureDate" },
//       { "type": "address", "name": "currentOwner" },
//       { "type": "string", "name": "currentLocation" },
//       { "type": "uint8", "name": "status" }
//     ]
//   },
//   { "type": "function", "name": "minCreditBalance", "stateMutability": "view", "inputs": [], "outputs": [{ "type": "uint256", "name": "" }] },
//   { "type": "function", "name": "name", "stateMutability": "view", "inputs": [], "outputs": [{ "type": "string", "name": "" }] },
//   { "type": "function", "name": "owner", "stateMutability": "view", "inputs": [], "outputs": [{ "type": "address", "name": "" }] },
//   { "type": "function", "name": "ownerOf", "stateMutability": "view", "inputs": [{ "type": "uint256", "name": "tokenId" }], "outputs": [{ "type": "address", "name": "" }] },
//   { "type": "function", "name": "ownershipHistory", "stateMutability": "view", "inputs": [{ "type": "uint256", "name": "" }, { "type": "uint256", "name": "" }], "outputs": [{ "type": "address", "name": "" }] },
//   {
//     "type": "function",
//     "name": "pull",
//     "stateMutability": "view",
//     "inputs": [{ "type": "uint256", "name": "tokenId" }],
//     "outputs": [
//       {
//         "type": "tuple",
//         "name": "lot",
//         "components": [
//           { "type": "uint256", "name": "lotId" },
//           { "type": "string", "name": "name" },
//           { "type": "string", "name": "currentHandler" },
//           { "type": "string", "name": "manufacturer" },
//           { "type": "uint256", "name": "manufactureDate" },
//           { "type": "address", "name": "currentOwner" },
//           { "type": "string", "name": "currentLocation" },
//           { "type": "uint8", "name": "status" }
//         ]
//       },
//       { "type": "address[]", "name": "history" }
//     ]
//   },
//   {
//     "type": "function",
//     "name": "push",
//     "stateMutability": "payable",
//     "inputs": [
//       { "type": "uint256", "name": "tokenId" },
//       { "type": "address", "name": "newOwner" },
//       { "type": "string", "name": "newLocation" }
//     ],
//     "outputs": []
//   },
//   { "type": "function", "name": "renounceOwnership", "stateMutability": "nonpayable", "inputs": [], "outputs": [] },
//   { "type": "function", "name": "safeTransferFrom", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "tokenId" }], "outputs": [] },
//   { "type": "function", "name": "safeTransferFrom", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "tokenId" }, { "type": "bytes", "name": "data" }], "outputs": [] },
//   { "type": "function", "name": "setApprovalForAll", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "operator" }, { "type": "bool", "name": "approved" }], "outputs": [] },
//   { "type": "function", "name": "setCreditTokenAddress", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "newAddress" }], "outputs": [] },
//   { "type": "function", "name": "setInactive", "stateMutability": "payable", "inputs": [{ "type": "uint256", "name": "tokenId" }], "outputs": [] },
//   { "type": "function", "name": "setInteractionFeePercent", "stateMutability": "nonpayable", "inputs": [{ "type": "uint256", "name": "newPercent" }], "outputs": [] },
//   { "type": "function", "name": "setMinCreditBalance", "stateMutability": "nonpayable", "inputs": [{ "type": "uint256", "name": "newMin" }], "outputs": [] },
//   { "type": "function", "name": "supportsInterface", "stateMutability": "view", "inputs": [{ "type": "bytes4", "name": "interfaceId" }], "outputs": [{ "type": "bool", "name": "" }] },
//   { "type": "function", "name": "symbol", "stateMutability": "view", "inputs": [], "outputs": [{ "type": "string", "name": "" }] },
//   { "type": "function", "name": "tokenIdCounter", "stateMutability": "view", "inputs": [], "outputs": [{ "type": "uint256", "name": "" }] },
//   { "type": "function", "name": "tokenURI", "stateMutability": "view", "inputs": [{ "type": "uint256", "name": "tokenId" }], "outputs": [{ "type": "string", "name": "" }] },
//   { "type": "function", "name": "transferFrom", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "from" }, { "type": "address", "name": "to" }, { "type": "uint256", "name": "tokenId" }], "outputs": [] },
//   { "type": "function", "name": "transferOwnership", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "newOwner" }], "outputs": [] },
//   {
//     "type": "function",
//     "name": "updateLotInfo",
//     "stateMutability": "payable",
//     "inputs": [
//       { "type": "uint256", "name": "tokenId" },
//       { "type": "string", "name": "newName" },
//       { "type": "string", "name": "newManufacturer" },
//       { "type": "string", "name": "newHandler" },
//       { "type": "string", "name": "newLocation" },
//       { "type": "string", "name": "newMetadataURI" }
//     ],
//     "outputs": []
//   },
//   { "type": "receive", "stateMutability": "payable" }
// ];

// export default LotTrackerABI;



// const LotTrackerABI = [
//   {
//     "type": "constructor",
//     "stateMutability": "nonpayable",
//     "inputs": [
//       { "type": "string", "name": "name" },
//       { "type": "string", "name": "symbol" },
//       { "type": "address", "name": "_creditTokenAddress" },
//       { "type": "address", "name": "_feeRecipient" }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "Approval",
//     "inputs": [
//       { "type": "address", "name": "owner", "indexed": true },
//       { "type": "address", "name": "approved", "indexed": true },
//       { "type": "uint256", "name": "tokenId", "indexed": true }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "ApprovalForAll",
//     "inputs": [
//       { "type": "address", "name": "owner", "indexed": true },
//       { "type": "address", "name": "operator", "indexed": true },
//       { "type": "bool", "name": "approved", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "BatchMetadataUpdate",
//     "inputs": [
//       { "type": "uint256", "name": "_fromTokenId", "indexed": false },
//       { "type": "uint256", "name": "_toTokenId", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "CreditChecked",
//     "inputs": [
//       { "type": "address", "name": "user", "indexed": true },
//       { "type": "uint256", "name": "balance", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "FeePaid",
//     "inputs": [
//       { "type": "address", "name": "payer", "indexed": true },
//       { "type": "uint256", "name": "amount", "indexed": false },
//       { "type": "string", "name": "action", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "LotCreated",
//     "inputs": [
//       { "type": "uint256", "name": "lotId", "indexed": true },
//       { "type": "string", "name": "name", "indexed": false },
//       { "type": "address", "name": "owner", "indexed": true },
//       { "type": "string", "name": "location", "indexed": false },
//       { "type": "uint256", "name": "timestamp", "indexed": false }
//     ]
//   },
//   {
//     "type": "function",
//     "name": "insert",
//     "stateMutability": "nonpayable",
//     "inputs": [
//       { "type": "string", "name": "name" },
//       { "type": "string", "name": "manufacturer" },
//       { "type": "uint256", "name": "manufactureDate" },
//       { "type": "string", "name": "initialLocation" },
//       { "type": "string", "name": "metadataURI" }
//     ],
//     "outputs": [{ "type": "uint256", "name": "" }]
//   },
//   {
//     "type": "function",
//     "name": "pull",
//     "stateMutability": "view",
//     "inputs": [{ "type": "uint256", "name": "tokenId" }],
//     "outputs": [
//       {
//         "type": "tuple",
//         "name": "lot",
//         "components": [
//           { "type": "uint256", "name": "lotId" },
//           { "type": "string", "name": "name" },
//           { "type": "string", "name": "currentHandler" },
//           { "type": "string", "name": "manufacturer" },
//           { "type": "uint256", "name": "manufactureDate" },
//           { "type": "address", "name": "currentOwner" },
//           { "type": "string", "name": "currentLocation" },
//           { "type": "uint8", "name": "status" }
//         ]
//       },
//       { "type": "address[]", "name": "history" }
//     ]
//   },
//   {
//     "type": "function",
//     "name": "FEE_RECIPIENT",
//     "stateMutability": "view",
//     "inputs": [],
//     "outputs": [{ "type": "address", "name": "" }]
//   },
//   {
//     "type": "function",
//     "name": "creditToken",
//     "stateMutability": "view",
//     "inputs": [],
//     "outputs": [{ "type": "address", "name": "" }]
//   }
// ];

// export default LotTrackerABI;



// const LotTrackerABI = 
// [
//   {
//     "type": "constructor",
//     "stateMutability": "nonpayable",
//     "inputs": [
//       { "type": "string", "name": "name" },
//       { "type": "string", "name": "symbol" },
//       { "type": "address", "name": "_creditTokenAddress" },
//       { "type": "address", "name": "_feeRecipient" }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "Approval",
//     "inputs": [
//       { "type": "address", "name": "owner", "indexed": true },
//       { "type": "address", "name": "approved", "indexed": true },
//       { "type": "uint256", "name": "tokenId", "indexed": true }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "ApprovalForAll",
//     "inputs": [
//       { "type": "address", "name": "owner", "indexed": true },
//       { "type": "address", "name": "operator", "indexed": true },
//       { "type": "bool", "name": "approved", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "BatchMetadataUpdate",
//     "inputs": [
//       { "type": "uint256", "name": "_fromTokenId", "indexed": false },
//       { "type": "uint256", "name": "_toTokenId", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "CreditChecked",
//     "inputs": [
//       { "type": "address", "name": "user", "indexed": true },
//       { "type": "uint256", "name": "balance", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "FeePaid",
//     "inputs": [
//       { "type": "address", "name": "payer", "indexed": true },
//       { "type": "uint256", "name": "amount", "indexed": false },
//       { "type": "string", "name": "action", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "LotCreated",
//     "inputs": [
//       { "type": "uint256", "name": "lotId", "indexed": true },
//       { "type": "string", "name": "name", "indexed": false },
//       { "type": "address", "name": "owner", "indexed": true },
//       { "type": "string", "name": "location", "indexed": false },
//       { "type": "uint256", "name": "timestamp", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "LotStatusChanged",
//     "inputs": [
//       { "type": "uint256", "name": "lotId", "indexed": true },
//       { "type": "uint8", "name": "newStatus", "indexed": false },
//       { "type": "uint256", "name": "timestamp", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "LotTransferred",
//     "inputs": [
//       { "type": "uint256", "name": "lotId", "indexed": true },
//       { "type": "address", "name": "from", "indexed": true },
//       { "type": "address", "name": "to", "indexed": true },
//       { "type": "string", "name": "newLocation", "indexed": false },
//       { "type": "uint256", "name": "timestamp", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "LotUpdated",
//     "inputs": [
//       { "type": "uint256", "name": "lotId", "indexed": true },
//       { "type": "address", "name": "owner", "indexed": true },
//       { "type": "string", "name": "location", "indexed": false },
//       { "type": "uint256", "name": "timestamp", "indexed": false }
//     ]
//   },
//   {
//     "type": "event",
//     "anonymous": false,
//     "name": "OwnershipTransferred",
//     "inputs": [
//       { "type": "address", "name": "previousOwner", "indexed": true },
//       { "type": "address", "name": "newOwner", "indexed": true }
//     ]
//   },
//   {
//     "type": "function",
//     "stateMutability": "view",
//     "name": "FEE_RECIPIENT",
//     "inputs": [],
//     "outputs": [{ "type": "address" }]
//   },
//   {
//     "type": "function",
//     "stateMutability": "nonpayable",
//     "name": "activateLot",
//     "inputs": [{ "type": "uint256", "name": "tokenId" }],
//     "outputs": []
//   },
//   {
//     "type": "function",
//     "stateMutability": "view",
//     "name": "getLotStatus",
//     "inputs": [{ "type": "uint256", "name": "tokenId" }],
//     "outputs": [{ "type": "string" }]
//   },
//   {
//     "type": "function",
//     "stateMutability": "payable",
//     "name": "insert",
//     "inputs": [
//       { "type": "string", "name": "name" },
//       { "type": "string", "name": "manufacturer" },
//       { "type": "uint256", "name": "manufactureDate" },
//       { "type": "string", "name": "initialLocation" },
//       { "type": "string", "name": "metadataURI" }
//     ],
//     "outputs": [{ "type": "uint256" }]
//   },
//   {
//     "type": "function",
//     "stateMutability": "view",
//     "name": "pull",
//     "inputs": [{ "type": "uint256", "name": "tokenId" }],
//     "outputs": [
//       {
//         "type": "tuple",
//         "name": "lot",
//         "components": [
//           { "type": "uint256", "name": "lotId" },
//           { "type": "string", "name": "name" },
//           { "type": "string", "name": "currentHandler" },
//           { "type": "string", "name": "manufacturer" },
//           { "type": "uint256", "name": "manufactureDate" },
//           { "type": "address", "name": "currentOwner" },
//           { "type": "string", "name": "currentLocation" },
//           { "type": "uint8", "name": "status" }
//         ]
//       },
//       { "type": "address[]", "name": "history" }
//     ]
//   },
//   {
//     "type": "function",
//     "stateMutability": "nonpayable",
//     "name": "push",
//     "inputs": [
//       { "type": "uint256", "name": "tokenId" },
//       { "type": "address", "name": "newOwner" },
//       { "type": "string", "name": "newLocation" }
//     ],
//     "outputs": []
//   }
// ]

// export default LotTrackerABI;



// src/Components/LotTrackerABI.js

const LotTrackerABI = [
  {
    "type": "constructor",
    "inputs": [
      { "name": "name", "type": "string", "internalType": "string" },
      { "name": "symbol", "type": "string", "internalType": "string" },
      { "name": "_creditTokenAddress", "type": "address", "internalType": "address" },
      { "name": "_feeRecipient", "type": "address", "internalType": "address" }
    ],
    "stateMutability": "nonpayable"
  },
  { "type": "event", "name": "AccountBanned", "inputs": [ { "name": "userAddress", "type": "address", "indexed": true }, { "name": "bannedBy", "type": "address", "indexed": true } ], "anonymous": false },
  { "type": "event", "name": "AccountUnbanned", "inputs": [ { "name": "userAddress", "type": "address", "indexed": true }, { "name": "unbannedBy", "type": "address", "indexed": true } ], "anonymous": false },
  { "type": "event", "name": "Approval", "inputs": [ { "name": "owner", "type": "address", "indexed": true }, { "name": "approved", "type": "address", "indexed": true }, { "name": "tokenId", "type": "uint256", "indexed": true } ], "anonymous": false },
  { "type": "event", "name": "ApprovalForAll", "inputs": [ { "name": "owner", "type": "address", "indexed": true }, { "name": "operator", "type": "address", "indexed": true }, { "name": "approved", "type": "bool", "indexed": false } ], "anonymous": false },
  { "type": "event", "name": "BatchMetadataUpdate", "inputs": [ { "name": "_fromTokenId", "type": "uint256", "indexed": false }, { "name": "_toTokenId", "type": "uint256", "indexed": false } ], "anonymous": false },
  { "type": "event", "name": "CreditChecked", "inputs": [ { "name": "user", "type": "address", "indexed": true }, { "name": "balance", "type": "uint256", "indexed": false } ], "anonymous": false },
  { "type": "event", "name": "FeePaid", "inputs": [ { "name": "payer", "type": "address", "indexed": true }, { "name": "amount", "type": "uint256", "indexed": false }, { "name": "action", "type": "string", "indexed": false } ], "anonymous": false },
  { "type": "event", "name": "LotCreated", "inputs": [ { "name": "lotId", "type": "uint256", "indexed": true }, { "name": "name", "type": "string", "indexed": false }, { "name": "owner", "type": "address", "indexed": true }, { "name": "location", "type": "string", "indexed": false }, { "name": "timestamp", "type": "uint256", "indexed": false } ], "anonymous": false },
  { "type": "event", "name": "LotStatusChanged", "inputs": [ { "name": "lotId", "type": "uint256", "indexed": true }, { "name": "newStatus", "type": "uint8", "indexed": false }, { "name": "timestamp", "type": "uint256", "indexed": false } ], "anonymous": false },
  { "type": "event", "name": "LotTransferred", "inputs": [ { "name": "lotId", "type": "uint256", "indexed": true }, { "name": "from", "type": "address", "indexed": true }, { "name": "to", "type": "address", "indexed": true }, { "name": "newLocation", "type": "string", "indexed": false }, { "name": "timestamp", "type": "uint256", "indexed": false } ], "anonymous": false },
  { "type": "event", "name": "LotUpdated", "inputs": [ { "name": "lotId", "type": "uint256", "indexed": true }, { "name": "owner", "type": "address", "indexed": true }, { "name": "location", "type": "string", "indexed": false }, { "name": "timestamp", "type": "uint256", "indexed": false } ], "anonymous": false },
  { "type": "event", "name": "MetadataUpdate", "inputs": [ { "name": "_tokenId", "type": "uint256", "indexed": false } ], "anonymous": false },
  { "type": "event", "name": "OwnershipTransferred", "inputs": [ { "name": "previousOwner", "type": "address", "indexed": true }, { "name": "newOwner", "type": "address", "indexed": true } ], "anonymous": false },
  { "type": "event", "name": "Transfer", "inputs": [ { "name": "from", "type": "address", "indexed": true }, { "name": "to", "type": "address", "indexed": true }, { "name": "tokenId", "type": "uint256", "indexed": true } ], "anonymous": false },
  { "type": "event", "name": "UserQualified", "inputs": [ { "name": "user", "type": "address", "indexed": true } ], "anonymous": false },
  {
    "type": "function",
    "name": "FEE_RECIPIENT",
    "inputs": [],
    "outputs": [ { "name": "", "type": "address", "internalType": "address" } ],
    "stateMutability": "view"
  },
  { "type": "function", "name": "activateLot", "inputs": [ { "name": "tokenId", "type": "uint256", "internalType": "uint256" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "approve", "inputs": [ { "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "balanceOf", "inputs": [ { "name": "owner", "type": "address", "internalType": "address" } ], "outputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" },
  { "type": "function", "name": "banUser", "inputs": [ { "name": "userAddress", "type": "address", "internalType": "address" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "changePassword", "inputs": [ { "name": "oldPasswordHash", "type": "string", "internalType": "string" }, { "name": "newPasswordHash", "type": "string", "internalType": "string" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "checkTargetAddressTokenBalance", "inputs": [], "outputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" },
  { "type": "function", "name": "checkUserCredit", "inputs": [ { "name": "userAddress", "type": "address", "internalType": "address" } ], "outputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" },
  {
    "type": "function",
    "name": "creditToken",
    "inputs": [],
    "outputs": [ { "name": "", "type": "address", "internalType": "contract IERC20" } ],
    "stateMutability": "view"
  },
  { "type": "function", "name": "discardLot", "inputs": [ { "name": "tokenId", "type": "uint256", "internalType": "uint256" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "fixedFee", "inputs": [], "outputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" },
  { "type": "function", "name": "getAllUserInfo", "inputs": [], "outputs": [ { "name": "", "type": "address[]", "internalType": "address[]" }, { "name": "", "type": "string[]", "internalType": "string[]" }, { "name": "", "type": "string[]", "internalType": "string[]" }, { "name": "", "type": "string[]", "internalType": "string[]" } ], "stateMutability": "view" },
  { "type": "function", "name": "getAllUsers", "inputs": [], "outputs": [ { "name": "", "type": "address[]", "internalType": "address[]" } ], "stateMutability": "view" },
  { "type": "function", "name": "getApproved", "inputs": [ { "name": "tokenId", "type": "uint256", "internalType": "uint256" } ], "outputs": [ { "name": "", "type": "address", "internalType": "address" } ], "stateMutability": "view" },
  { "type": "function", "name": "getBannedStatus", "inputs": [ { "name": "userAddress", "type": "address", "internalType": "address" } ], "outputs": [ { "name": "", "type": "bool", "internalType": "bool" } ], "stateMutability": "view" },
  { "type": "function", "name": "getCreationTime", "inputs": [], "outputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" },
  { "type": "function", "name": "getEmail", "inputs": [], "outputs": [ { "name": "", "type": "string", "internalType": "string" } ], "stateMutability": "view" },
  { "type": "function", "name": "getLoginHistory", "inputs": [ { "name": "userAddress", "type": "address", "internalType": "address" } ], "outputs": [ { "name": "", "type": "uint256[]", "internalType": "uint256[]" } ], "stateMutability": "view" },
  { "type": "function", "name": "getLotStatus", "inputs": [ { "name": "tokenId", "type": "uint256", "internalType": "uint256" } ], "outputs": [ { "name": "", "type": "string", "internalType": "string" } ], "stateMutability": "view" },
  { "type": "function", "name": "getMyLoginHistory", "inputs": [], "outputs": [ { "name": "", "type": "uint256[]", "internalType": "uint256[]" } ], "stateMutability": "view" },
  { "type": "function", "name": "getOwner", "inputs": [], "outputs": [ { "name": "", "type": "address", "internalType": "address" } ], "stateMutability": "view" },
  { "type": "function", "name": "getUserInfo", "inputs": [], "outputs": [ { "name": "", "type": "address", "internalType": "address" }, { "name": "", "type": "string", "internalType": "string" } ], "stateMutability": "view" },
  { "type": "function", "name": "getUserInfoByAddress", "inputs": [ { "name": "userAddress", "type": "address", "internalType": "address" } ], "outputs": [ { "name": "", "type": "string", "internalType": "string" }, { "name": "", "type": "string", "internalType": "string" }, { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" },
  { "type": "function", "name": "insert", "inputs": [ { "name": "name", "type": "string", "internalType": "string" }, { "name": "manufacturer", "type": "string", "internalType": "string" }, { "name": "manufactureDate", "type": "uint256", "internalType": "uint256" }, { "name": "initialLocation", "type": "string", "internalType": "string" }, { "name": "metadataURI", "type": "string", "internalType": "string" } ], "outputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "nonpayable" },
  { "type": "function", "name": "isApprovedForAll", "inputs": [ { "name": "owner", "type": "address", "internalType": "address" }, { "name": "operator", "type": "address", "internalType": "address" } ], "outputs": [ { "name": "", "type": "bool", "internalType": "bool" } ], "stateMutability": "view" },
  { "type": "function", "name": "isQualifiedUser", "inputs": [ { "name": "", "type": "address", "internalType": "address" } ], "outputs": [ { "name": "", "type": "bool", "internalType": "bool" } ], "stateMutability": "view" },
  { "type": "function", "name": "login", "inputs": [ { "name": "email", "type": "string", "internalType": "string" }, { "name": "passwordHash", "type": "string", "internalType": "string" } ], "outputs": [ { "name": "", "type": "bool", "internalType": "bool" } ], "stateMutability": "nonpayable" },
  { "type": "function", "name": "medicationLots", "inputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "outputs": [ { "name": "lotId", "type": "uint256", "internalType": "uint256" }, { "name": "name", "type": "string", "internalType": "string" }, { "name": "currentHandler", "type": "string", "internalType": "string" }, { "name": "manufacturer", "type": "string", "internalType": "string" }, { "name": "manufactureDate", "type": "uint256", "internalType": "uint256" }, { "name": "currentOwner", "type": "address", "internalType": "address" }, { "name": "currentLocation", "type": "string", "internalType": "string" }, { "name": "status", "type": "uint8", "internalType": "enum LotTrackr.LotStatus" } ], "stateMutability": "view" },
  { "type": "function", "name": "minCreditBalance", "inputs": [], "outputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" },
  { "type": "function", "name": "name", "inputs": [], "outputs": [ { "name": "", "type": "string", "internalType": "string" } ], "stateMutability": "view" },
  { "type": "function", "name": "owner", "inputs": [], "outputs": [ { "name": "", "type": "address", "internalType": "address" } ], "stateMutability": "view" },
  { "type": "function", "name": "ownerOf", "inputs": [ { "name": "tokenId", "type": "uint256", "internalType": "uint256" } ], "outputs": [ { "name": "", "type": "address", "internalType":"address" } ], "stateMutability": "view" },
  { "type": "function", "name": "ownershipHistory", "inputs": [ { "name": "", "type": "address", "internalType": "address" }, { "name": "", "type": "uint256", "internalType": "uint256" } ], "outputs": [ { "name": "", "type": "address", "internalType": "address" } ], "stateMutability": "view" },
  { "type": "function", "name": "pull", "inputs": [ { "name": "tokenId", "type": "uint256", "internalType": "uint256" } ], "outputs": [ { "name": "lot", "type": "tuple", "components": [ { "name": "lotId", "type": "uint256" }, { "name": "name", "type": "string" }, { "name": "currentHandler", "type": "string" }, { "name": "manufacturer", "type": "string" }, { "name": "manufactureDate", "type": "uint256" }, { "name": "currentOwner", "type": "address" }, { "name": "currentLocation", "type": "string" }, { "name": "status", "type": "uint8" } ] }, { "name": "history", "type": "address[]" } ], "stateMutability": "view" },
  { "type": "function", "name": "push", "inputs": [ { "name": "tokenId", "type": "uint256", "internalType": "uint256" }, { "name": "newOwner", "type": "address", "internalType": "address" }, { "name": "newLocation", "type": "string", "internalType": "string" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "renounceOwnership", "inputs": [], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "requestCredits", "inputs": [ { "name": "amount", "type": "uint256", "internalType": "uint256" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "safeTransferFrom", "inputs": [ { "name": "from", "type": "address", "internalType": "address" }, { "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "safeTransferFrom", "inputs": [ { "name": "from", "type": "address", "internalType": "address" }, { "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" }, { "name": "data", "type": "bytes", "internalType": "bytes" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "setApprovalForAll", "inputs": [ { "name": "operator", "type": "address", "internalType": "address" }, { "name": "approved", "type": "bool", "internalType": "bool" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "setCreditTokenAddress", "inputs": [ { "name": "newAddress", "type": "address", "internalType": "address" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "setFeeRecipient", "inputs": [ { "name": "newAddress", "type": "address", "internalType": "address" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "setFixedFee", "inputs": [ { "name": "newFee", "type": "uint256", "internalType": "uint256" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "setInactive", "inputs": [ { "name": "tokenId", "type": "uint256", "internalType": "uint256" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "setMinCreditBalance", "inputs": [ { "name": "newMin", "type": "uint256", "internalType": "uint256" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "supportsInterface", "inputs": [ { "name": "interfaceId", "type": "bytes4", "internalType": "bytes4" } ], "outputs": [ { "name": "", "type": "bool", "internalType": "bool" } ], "stateMutability": "view" },
  { "type": "function", "name": "symbol", "inputs": [], "outputs": [ { "name": "", "type": "string", "internalType": "string" } ], "stateMutability": "view" },
  { "type": "function", "name": "tokenIdCounter", "inputs": [], "outputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" },
  { "type": "function", "name": "tokenURI", "inputs": [ { "name": "tokenId", "type": "uint256", "internalType": "uint256" } ], "outputs": [ { "name": "", "type": "string", "internalType": "string" } ], "stateMutability": "view" },
  { "type": "function", "name": "transferFrom", "inputs": [ { "name": "from", "type": "address", "internalType": "address" }, { "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType":"uint256" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "transferOwnership", "inputs": [ { "name": "newOwner", "type": "address", "internalType": "address" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "unbanUser", "inputs": [ { "name": "userAddress", "type": "address", "internalType": "address" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "updateLotInfo", "inputs": [ { "name": "tokenId", "type": "uint256", "internalType": "uint256" }, { "name": "newName", "type": "string", "internalType": "string" }, { "name": "newManufacturer", "type": "string", "internalType": "string" }, { "name": "newHandler", "type": "string", "internalType": "string" }, { "name": "newLocation", "type": "string", "internalType": "string" }, { "name": "newMetadataURI", "type": "string", "internalType": "string" } ], "outputs": [], "stateMutability": "nonpayable" }
]

export default LotTrackerABI;