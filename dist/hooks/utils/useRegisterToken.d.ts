export interface RegisterTokenProps {
    tokenAddress: string;
    tokenSymbol: string;
    tokenDecimals?: number;
    tokenImage: string;
}
/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @param tokenImage
 * @returns {boolean} true if the token has been added, false otherwise
 */
export declare const useRegisterToken: (tokenAddress: string, tokenSymbol: string, tokenImage: string, tokenDecimals?: number) => [boolean, () => boolean];
