export declare type handleNetwork = (chainId: number, chainName: string, nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
}, rpcUrls: string[], blockExplorerUrls: string[]) => boolean;
declare const useChangeNetwork: () => [boolean, handleNetwork];
export default useChangeNetwork;
