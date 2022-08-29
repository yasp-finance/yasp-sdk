import {Connection} from "@solana/web3.js";
import {ProviderContextAdapter, ProviderFarmContext, ProviderPoolContext} from "@type/provider";


type OrcaContextAdapterDeps = {
    solanaConnection: Connection
}

export class OrcaContextAdapter implements ProviderContextAdapter {
    async toProviderFarmContext(...arg: any[]): Promise<ProviderFarmContext> {
        return Promise.resolve(undefined);
    }

    async toProviderPoolContext(...arg: any[]): Promise<ProviderPoolContext> {
        return Promise.resolve(undefined);
    }
}
