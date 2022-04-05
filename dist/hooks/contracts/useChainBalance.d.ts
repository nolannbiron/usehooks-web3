import BigNumber from "bignumber.js";
declare const useChainBalance: () => {
    balance: BigNumber;
    refresh: () => void;
};
export default useChainBalance;
