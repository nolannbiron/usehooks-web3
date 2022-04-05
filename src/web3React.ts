import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BscConnector } from "@binance-chain/bsc-connector";
import Web3 from "web3";
import getNodeUrl from "./utils/getRpcUrl";

const rpcUrl = getNodeUrl();
const chainId = parseInt("56", 10);

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  qrcode: true,
});

const bscConnector = new BscConnector({ supportedChainIds: [chainId] });

export const connectorsByName: { [key: string]: any } = {
  ["injected"]: injected,
  ["walletconnect"]: walletconnect,
  ["bsc"]: bscConnector,
};

export const getLibrary = (provider: any): Web3 => {
  return provider;
};
