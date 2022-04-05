import { useCallback, useState } from "react";


export interface RegisterTokenProps{
    tokenAddress: string, 
    tokenSymbol: string, 
    tokenDecimals?: number, 
    tokenImage: string
}


/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @param tokenImage
 * @returns {boolean} true if the token has been added, false otherwise
 */
 export const useRegisterToken = (tokenAddress: string, tokenSymbol: string, tokenImage: string, tokenDecimals = 18): [boolean, () => boolean] => {

    const [isRegistered, setIsRegistered] = useState<boolean>(false);
     
    const register = useCallback(() => {
        try{
            (window as WindowChain).ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage,
                    },
                },
            })
            setIsRegistered(true);
            return true;
        }catch(error){
            console.error(error)
            setIsRegistered(false);
            return false;
        }

    }, [])


    return [isRegistered, register];

  }