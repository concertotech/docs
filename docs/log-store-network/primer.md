---
sidebar_position: 2
title: "Primer"
---

# Primer

The technology leverages the Streamr Network for global transport of data, the Arweave Blockchain for permanent storage of data, the Kyve Network for consensus over data stored, and custom integration software embedded in Nodes and new Smart Contracts to deliver the solution in a decentralised and token-incentivised manner.

The Log Store Network is comprised of two sub-networks bound by their own Blockchain systems, and interlinked via a Streamr stream that behaves as a communication mesh.

The first layer is the Broker Network, where each Node is a Streamr Broker Node that has installed the `logStore` Plugin.

This first layer is effectively a decentralised version of the Streamr Broker Storage Plugin, whereby Nodes receive events over Streams, store those events into a local time-series database, and expose connections over HTTP for query-ability.

Log Store has taken a great effort to embed this layer within the Streamr framework. The developer experience should resemble Streamr’s quite closely. ie. the Log Store Client package shares many of the same methods as the Streamr Client, and only complements the Streamr Client with a new `query` method.

In order to guarantee the operational performance of the Broker layer, the second Validator layer is required.

This Validator layer not only behaves as an authority over the Broker layer — determining which Nodes are rewarded, penalised, how digital assets should be consumed from developers interacting with the network, but also behaves as the storage mechanism so that Streamr data is uploaded to Arweave in a fully decentralised manner.

The Validator layer builds upon the Kyve Network, a blockchain designed for yielding data lakes produced through consensus.

Once data is pushed to Arweave, a recursive process takes place, whereby Nodes within the Broker layer are responsible for reading from this decentralised data lake, and the pushing reports to our Polygon Smart Contract. This reporting process take heavy inspiration from Chainlink’s Off-Chain Reporting (OCR) strategy for minimise gas fees.

:::note
The full litepaper explaining the network, it’s consensus mechanisms and more will release soon.
:::