// tslint:disable: max-file-line-count
import { ERC20TokenMetadata } from '@airgap/ethereum/v1'
import { SubProtocolSymbols } from '../types/protocol'

export const erc20Tokens: Record<string, ERC20TokenMetadata> = {
  'rbtc-erc20': {
    symbol: 'RIF',
    name: 'RSK Infrastructure Framework',
    marketSymbol: 'rif',
    identifier: SubProtocolSymbols.RBTC_ERC20,
    contractAddress: '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5',
    decimals: 18
  },
    'rbtc-erc20': {
    symbol: 'DOC',
    name: 'Dollar On Chain',
    marketSymbol: 'doc',
    identifier: SubProtocolSymbols.RBTC_ERC20,
    contractAddress: '0xE700691Da7B9851F2F35f8b8182C69C53ccad9DB',
    decimals: 18
  },
  
    'rbtc-erc20': {
    symbol: 'BITP',
    name: 'BitPRO ',
    marketSymbol: 'bitp',
    identifier: SubProtocolSymbols.RBTC_ERC20,
    contractAddress: '0x440cd83C160de5C96DDb20246815EA44C7Abbca8',
    decimals: 18
  },
  
    'rbtc-erc20': {
    symbol: 'MOC',
    name: 'Money On Chain',
    marketSymbol: 'moc',
    identifier: SubProtocolSymbols.RBTC_ERC20,
    contractAddress: '0x9aC7Fe28967b30e3a4E6E03286D715B42B453d10',
    decimals: 18
  }
}

export const erc20TokensIdentifiers: string[] = Object.keys(erc20Tokens)
