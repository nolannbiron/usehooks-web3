import { useLastUpdated } from "@nolannb/usehooks"
import { useWeb3React } from "@web3-react/core"
import useWeb3 from "hooks/useWeb3"
import { useEffect, useState } from "react"
import { BIG_ZERO } from "utils/bigNumber"
import BigNumber from "bignumber.js"

const useChainBalance = () => {
    const [balance, setBalance] = useState(BIG_ZERO)
    const { account } = useWeb3React()
    const { lastUpdated, setLastUpdated } = useLastUpdated()
    const web3 = useWeb3()
  
    useEffect(() => {
      const fetchBalance = async () => {
        const walletBalance = await web3.eth.getBalance(account)
        setBalance(new BigNumber(walletBalance))
      }
  
      if (account) {
        fetchBalance()
      }
    }, [account, web3, lastUpdated, setBalance])
  
    return { balance, refresh: setLastUpdated }
}

export default useChainBalance;