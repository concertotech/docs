---
title: "Authentication"
sidebar_position: 3
---

# Authentication

## Authentication with Private Key

```ts
const streamr = new LogStoreClient({
  auth: {
    privateKey: 'your-private-key',
  },
});
```

Private keys can also be generated using `LogStoreClient.generateEthereumAccount()`.

## Authentication with Web3 Provider

```ts
const streamr = new LogStoreClient({
  auth: {
    ethereum: window.ethereum,
  },
});
```

You can also create an anonymous client instance that can interact with public streams:

```ts
const streamr = new LogStoreClient();
```