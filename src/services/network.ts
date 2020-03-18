import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

export async function getNetworkStatus(): Promise<any> {
    let networkStatus = await Network.getStatus();
    return networkStatus.connected;
}