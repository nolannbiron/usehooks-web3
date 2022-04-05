import { Contract } from "ethers";
export declare const useApprove: (contract: Contract, addressToApprove: string) => {
    approve: () => Promise<any>;
};
