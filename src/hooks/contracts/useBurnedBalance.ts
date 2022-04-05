import { useRefresh } from "@nolannb/usehooks";
import useWeb3 from "hooks/useWeb3";
import { useEffect, useState } from "react";
import useERC20 from "./useERC20";
import BigNumber from "bignumber.js";
import { BIG_ZERO } from "utils/bigNumber";

const useBurnedBalance = (tokenAddress: string) => {
    const contract = useERC20(tokenAddress);
    const [balance, setBalance] = useState(BIG_ZERO)
    const { slowRefresh } = useRefresh()
    const web3 = useWeb3()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await contract.methods.balanceOf('0x000000000000000000000000000000000000dEaD').call()
      setBalance(new BigNumber(res))
    }

    fetchBalance()
  }, [web3, tokenAddress, slowRefresh, contract])

  return balance
}

export default useBurnedBalance;