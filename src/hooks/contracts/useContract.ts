import useWeb3 from "hooks/useWeb3"
import { useMemo } from "react"
import { getContract } from "utils/getContract"

const useContract = (abi: any, address: string) => {
    const web3 = useWeb3()

    return useMemo(() => getContract(abi, address, web3), [address, web3])
}

export default useContract