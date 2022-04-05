import { useWeb3React } from "@web3-react/core"
import { Contract, ethers } from "ethers"
import { useCallback, useState } from "react"

export const useApprove = (contract: Contract, addressToApprove: string): {approve: () => Promise<any>} => {
    const { account } = useWeb3React()
    const [isApproved, setIsApproved] = useState(false)
    
    const handleApprove = useCallback(async () => {
      try {
        return contract.methods.approve(addressToApprove, ethers.constants.MaxUint256).send({ from: account })
      } catch (e) {
        return false
      }
    }, [account, contract, addressToApprove])
  
    return { approve: handleApprove }
}