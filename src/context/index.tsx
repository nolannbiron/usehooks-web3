import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "../web3React";
import { UseHooksProvider } from "@nolannb/usehooks";

export const UseHooksWeb3Context = React.createContext({});

export const UseHooksWeb3Provider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <UseHooksWeb3Context.Provider value={{}}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <UseHooksProvider>{children}</UseHooksProvider>
      </Web3ReactProvider>
    </UseHooksWeb3Context.Provider>
  );
};
