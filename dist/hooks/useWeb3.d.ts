import Web3 from 'web3';
/**
 * Provides a web3 instance using the provider provided by useWallet
 * with a fallback of an httpProver
 * Recreate web3 instance only if the provider change
 */
declare const useWeb3: () => Web3;
export default useWeb3;
