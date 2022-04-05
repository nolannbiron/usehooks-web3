import BigNumber from "bignumber.js";
import useTokenBalance from "./useBalance";

/**
 * A hook to check if a wallet's balance is at least the amount passed in
 */
const useHasMinimumBalance = (
  tokenAddress: string,
  minimumBalance: BigNumber
) => {
  const balance = useTokenBalance(tokenAddress);
  return balance.gte(minimumBalance);
};

export default useHasMinimumBalance;
