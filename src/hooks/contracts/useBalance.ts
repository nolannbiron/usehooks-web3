import { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { useWeb3React } from "@web3-react/core";
import { BIG_ZERO } from "utils/bigNumber";
import useWeb3 from "../useWeb3";
import { useRefresh, useLastUpdated } from "@nolannb/usehooks";
import useERC20 from "./useERC20";

const useBalance = (tokenAddress: string) => {
  const contract = useERC20(tokenAddress);
  const [balance, setBalance] = useState(BIG_ZERO);
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await contract.methods.balanceOf(account).call();
      setBalance(new BigNumber(res));
    };

    if (account) {
      fetchBalance();
    }
  }, [account, tokenAddress, web3, fastRefresh, contract]);

  return balance;
};

export default useBalance;
