const BestDropsSale = [
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_nftContractAddress',
          'type': 'address'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'address',
          'name': 'winner',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256'
        }
      ],
      'name': 'AuctionEnded',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256'
        }
      ],
      'name': 'AuctionStarted',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'address',
          'name': 'trier',
          'type': 'address'
        }
      ],
      'name': 'FalseWithdrawTry',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'address',
          'name': 'bidder',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256'
        }
      ],
      'name': 'HighestBidIncreased',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'previousOwner',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'OwnershipTransferred',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'payer',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'balance',
          'type': 'uint256'
        }
      ],
      'name': 'Received',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'payee',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'balance',
          'type': 'uint256'
        }
      ],
      'name': 'Sent',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'address',
          'name': 'withdrawer',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256'
        }
      ],
      'name': 'Withdraw',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'address',
          'name': 'withdrawer',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256'
        }
      ],
      'name': 'WithdrawError',
      'type': 'event'
    },
    {
      'inputs': [],
      'name': 'owner',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function',
      'constant': true
    },
    {
      'inputs': [],
      'name': 'renounceOwnership',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'transferOwnership',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_auctionPeriod',
          'type': 'uint256'
        }
      ],
      'name': 'setAuctionPeriod',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_commitionRate',
          'type': 'uint256'
        }
      ],
      'name': 'setCommitionRate',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_sellerServiceFee',
          'type': 'uint256'
        }
      ],
      'name': 'setSellerServiceFee',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'claimNFT',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        },
        {
          'internalType': 'address payable',
          'name': 'tokenSeller',
          'type': 'address'
        }
      ],
      'name': 'claimSellerFee',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'withdrawableServiceFeeAmounnt',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function',
      'constant': true
    },
    {
      'inputs': [
        {
          'internalType': 'address payable',
          'name': '_payee',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': '_amount',
          'type': 'uint256'
        }
      ],
      'name': 'withdrawServiceFee',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'bid',
      'outputs': [],
      'stateMutability': 'payable',
      'type': 'function',
      'payable': true
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'withdraw',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'withdrawable',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function',
      'constant': true
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'tokenHighestBid',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function',
      'constant': true
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'tokenHighestBidder',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function',
      'constant': true
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'auctionEndTime',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function',
      'constant': true
    }
  ];


export default BestDropsSale;
