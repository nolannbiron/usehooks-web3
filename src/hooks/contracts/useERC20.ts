import { useMemo } from "react";
import ERC20_ABI from "../../abis/ERC20";
import { getContract } from "../../utils/getContract";
import useWeb3 from "../useWeb3";

const useERC20 = (address: string) => {
    const web3 = useWeb3();

    return useMemo(() => getContract(ERC20_ABI, address, web3), [address, web3]);
};

export default useERC20;
