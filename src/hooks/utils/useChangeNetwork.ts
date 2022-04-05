import { useCallback, useState } from "react"

export type handleNetwork = (
    chainId: number,
    chainName: string,
    nativeCurrency: {
        name: string,
        symbol: string,
        decimals: number,
    },
    rpcUrls: string[],
    blockExplorerUrls: string[],
) => boolean

const useChangeNetwork = (): [boolean, handleNetwork] => {

    const [networkChanged, setNetworkChanged] = useState<boolean>(false);

    const handleNetwork: handleNetwork = useCallback((chainId, chainName, nativeCurrency, rpcUrls, blockExplorerUrls) => {
        const provider = (window as WindowChain).ethereum
        if (provider) {
            try {
                provider.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId,
                        chainName,
                        nativeCurrency,
                        rpcUrls,
                        blockExplorerUrls
                    }],
                })
                setNetworkChanged(true)
                return true
            } catch (error) {
                console.error(error)
                setNetworkChanged(false)
                return false
            }
        } else {
            console.error("Can't setup the network on metamask because window.ethereum is undefined")
            return false
        }
    }, [])
    
    return [networkChanged, handleNetwork]
}

export default useChangeNetwork