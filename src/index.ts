import type { Subscription } from 'expo-modules-core';
import { EventEmitter, NativeModulesProxy } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to TokenstreetReactNativeIdnowVideoident.web.ts
// and on native platforms to TokenstreetReactNativeIdnowVideoident.ts
import {
    ChangeEventPayload,
    TokenstreetReactNativeIdnowVideoidentViewProps,
} from './TokenstreetReactNativeIdnowVideoident.types';
import TokenstreetReactNativeIdnowVideoidentModule from './TokenstreetReactNativeIdnowVideoidentModule';

// Get the native constant value.
export const { PI } = TokenstreetReactNativeIdnowVideoidentModule;

export function hello(): string {
    return TokenstreetReactNativeIdnowVideoidentModule.hello();
}

export async function setValueAsync(value: string) {
    return await TokenstreetReactNativeIdnowVideoidentModule.setValueAsync(value);
}

const emitter = new EventEmitter(
    TokenstreetReactNativeIdnowVideoidentModule ?? NativeModulesProxy.TokenstreetReactNativeIdnowVideoident
);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
    return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ChangeEventPayload, TokenstreetReactNativeIdnowVideoidentViewProps };
