---
title: "Getting Started"
sidebar_position: 2
---

## Installing the SDK

The Log Store Client can be installed using `npm`, `pnpm` or `yarn`.

```bash
npm i @concertodao/logstore-client
```

Then,

```jsx
import LogStoreClient from "@concertodao/logstore-client";

// --- or ---

const LogStoreClient = require("@concertodao/logstore-client");
```

## Streamr

The Log Store Client is an extension of the Streamr Client.

This means that the `LogStoreClient` has the exact same methods and interface as the `StreamrClient` , however dismisses the `resend` function for the `query` function instead.

For reference, please review the StreamrClient documentation to gather a full understanding of all base methods available.

[Read Streamr Docs →](https://docs.streamr.network/usage/streams/creating-streams)

## The LogStoreClient Class

```ts
constructor(config?: LogStoreClientConfig)
```

This is the constructor for the `LogStoreClient` class. It takes an optional configuration object, `config` of type `LogStoreClientConfig`, which can be used to configure the client. .

```ts
import { StreamrClientConfig } from 'streamr-client';

export interface LogStoreClientConfig extends StreamrClientConfig {
	contracts?: StreamrClientConfig['contracts'] & {
		logStoreNodeManagerChainAddress?: string;
		logStoreStoreManagerChainAddress?: string;
		logStoreTheGraphUrl?: string;
	};
}
```