import BigNumber from 'bignumber.js';
/**
 * A hook to check if a wallet's balance is at least the amount passed in
 */
declare const useHasMinimumBalance: (tokenAddress: string, minimumBalance: BigNumber) => boolean;
export default useHasMinimumBalance;
