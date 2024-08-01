/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { EventFragment, FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {
  OnEvent,
  PromiseOrValue,
  TypedEvent,
  TypedEventFilter,
  TypedListener,
} from './common';

export declare namespace DataTypes {
  export type EIP712SignatureStruct = {
    v: PromiseOrValue<BigNumberish>;
    r: PromiseOrValue<BytesLike>;
    s: PromiseOrValue<BytesLike>;
    deadline: PromiseOrValue<BigNumberish>;
  };

  export type EIP712SignatureStructOutput = [number, string, string, BigNumber] & {
    v: number;
    r: string;
    s: string;
    deadline: BigNumber;
  };
}

export declare namespace IERC721Time {
  export type TokenDataStruct = {
    owner: PromiseOrValue<string>;
    mintTimestamp: PromiseOrValue<BigNumberish>;
  };

  export type TokenDataStructOutput = [string, BigNumber] & {
    owner: string;
    mintTimestamp: BigNumber;
  };
}

export interface LensFollowNFTInterface extends utils.Interface {
  functions: {
    'HUB()': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'burn(uint256)': FunctionFragment;
    'burnWithSig(uint256,(uint8,bytes32,bytes32,uint256))': FunctionFragment;
    'delegate(address)': FunctionFragment;
    'delegateBySig(address,address,(uint8,bytes32,bytes32,uint256))': FunctionFragment;
    'exists(uint256)': FunctionFragment;
    'getApproved(uint256)': FunctionFragment;
    'getDelegatedSupplyByBlockNumber(uint256)': FunctionFragment;
    'getDomainSeparator()': FunctionFragment;
    'getPowerByBlockNumber(address,uint256)': FunctionFragment;
    'initialize(uint256)': FunctionFragment;
    'isApprovedForAll(address,address)': FunctionFragment;
    'mint(address)': FunctionFragment;
    'mintTimestampOf(uint256)': FunctionFragment;
    'name()': FunctionFragment;
    'ownerOf(uint256)': FunctionFragment;
    'permit(address,uint256,(uint8,bytes32,bytes32,uint256))': FunctionFragment;
    'permitForAll(address,address,bool,(uint8,bytes32,bytes32,uint256))': FunctionFragment;
    'safeTransferFrom(address,address,uint256)': FunctionFragment;
    'safeTransferFrom(address,address,uint256,bytes)': FunctionFragment;
    'setApprovalForAll(address,bool)': FunctionFragment;
    'sigNonces(address)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'symbol()': FunctionFragment;
    'tokenByIndex(uint256)': FunctionFragment;
    'tokenDataOf(uint256)': FunctionFragment;
    'tokenOfOwnerByIndex(address,uint256)': FunctionFragment;
    'tokenURI(uint256)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'HUB'
      | 'approve'
      | 'balanceOf'
      | 'burn'
      | 'burnWithSig'
      | 'delegate'
      | 'delegateBySig'
      | 'exists'
      | 'getApproved'
      | 'getDelegatedSupplyByBlockNumber'
      | 'getDomainSeparator'
      | 'getPowerByBlockNumber'
      | 'initialize'
      | 'isApprovedForAll'
      | 'mint'
      | 'mintTimestampOf'
      | 'name'
      | 'ownerOf'
      | 'permit'
      | 'permitForAll'
      | 'safeTransferFrom(address,address,uint256)'
      | 'safeTransferFrom(address,address,uint256,bytes)'
      | 'setApprovalForAll'
      | 'sigNonces'
      | 'supportsInterface'
      | 'symbol'
      | 'tokenByIndex'
      | 'tokenDataOf'
      | 'tokenOfOwnerByIndex'
      | 'tokenURI'
      | 'totalSupply'
      | 'transferFrom',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'HUB', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'burn', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'burnWithSig',
    values: [PromiseOrValue<BigNumberish>, DataTypes.EIP712SignatureStruct],
  ): string;
  encodeFunctionData(functionFragment: 'delegate', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'delegateBySig',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, DataTypes.EIP712SignatureStruct],
  ): string;
  encodeFunctionData(functionFragment: 'exists', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'getApproved',
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getDelegatedSupplyByBlockNumber',
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'getDomainSeparator', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getPowerByBlockNumber',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'isApprovedForAll',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'mint', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'mintTimestampOf',
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'ownerOf', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'permit',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, DataTypes.EIP712SignatureStruct],
  ): string;
  encodeFunctionData(
    functionFragment: 'permitForAll',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      DataTypes.EIP712SignatureStruct,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'setApprovalForAll',
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'sigNonces', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [PromiseOrValue<BytesLike>],
  ): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'tokenByIndex',
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenDataOf',
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenOfOwnerByIndex',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'tokenURI', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;

  decodeFunctionResult(functionFragment: 'HUB', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnWithSig', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'delegate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'delegateBySig', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exists', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getApproved', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getDelegatedSupplyByBlockNumber',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'getDomainSeparator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPowerByBlockNumber', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isApprovedForAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mintTimestampOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'permit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'permitForAll', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'setApprovalForAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sigNonces', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenByIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenDataOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenOfOwnerByIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'ApprovalForAll(address,address,bool)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[string, string, boolean], ApprovalForAllEventObject>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface LensFollowNFT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LensFollowNFTInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    HUB(overrides?: CallOverrides): Promise<[string]>;

    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    burnWithSig(
      tokenId: PromiseOrValue<BigNumberish>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    delegate(
      delegatee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    delegateBySig(
      delegator: PromiseOrValue<string>,
      delegatee: PromiseOrValue<string>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    getDelegatedSupplyByBlockNumber(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getDomainSeparator(overrides?: CallOverrides): Promise<[string]>;

    getPowerByBlockNumber(
      user: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    initialize(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    mintTimestampOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    permit(
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    permitForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'safeTransferFrom(address,address,uint256)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    tokenDataOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[IERC721Time.TokenDataStructOutput]>;

    tokenOfOwnerByIndex(
      owner: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  HUB(overrides?: CallOverrides): Promise<string>;

  approve(
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  burnWithSig(
    tokenId: PromiseOrValue<BigNumberish>,
    sig: DataTypes.EIP712SignatureStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  delegate(
    delegatee: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  delegateBySig(
    delegator: PromiseOrValue<string>,
    delegatee: PromiseOrValue<string>,
    sig: DataTypes.EIP712SignatureStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;

  getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  getDelegatedSupplyByBlockNumber(
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getDomainSeparator(overrides?: CallOverrides): Promise<string>;

  getPowerByBlockNumber(
    user: PromiseOrValue<string>,
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  initialize(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  isApprovedForAll(
    owner: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  mint(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  mintTimestampOf(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  permit(
    spender: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    sig: DataTypes.EIP712SignatureStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  permitForAll(
    owner: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    approved: PromiseOrValue<boolean>,
    sig: DataTypes.EIP712SignatureStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'safeTransferFrom(address,address,uint256)'(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'safeTransferFrom(address,address,uint256,bytes)'(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: PromiseOrValue<string>,
    approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  tokenDataOf(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<IERC721Time.TokenDataStructOutput>;

  tokenOfOwnerByIndex(
    owner: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    HUB(overrides?: CallOverrides): Promise<string>;

    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    burnWithSig(
      tokenId: PromiseOrValue<BigNumberish>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: CallOverrides,
    ): Promise<void>;

    delegate(delegatee: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    delegateBySig(
      delegator: PromiseOrValue<string>,
      delegatee: PromiseOrValue<string>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: CallOverrides,
    ): Promise<void>;

    exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;

    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    getDelegatedSupplyByBlockNumber(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getDomainSeparator(overrides?: CallOverrides): Promise<string>;

    getPowerByBlockNumber(
      user: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    initialize(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    mint(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    mintTimestampOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    permit(
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: CallOverrides,
    ): Promise<void>;

    permitForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: CallOverrides,
    ): Promise<void>;

    'safeTransferFrom(address,address,uint256)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenDataOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<IERC721Time.TokenDataStructOutput>;

    tokenOfOwnerByIndex(
      owner: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
    ): ApprovalEventFilter;

    'ApprovalForAll(address,address,bool)'(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null,
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null,
    ): ApprovalForAllEventFilter;

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
    ): TransferEventFilter;
  };

  estimateGas: {
    HUB(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    burnWithSig(
      tokenId: PromiseOrValue<BigNumberish>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    delegate(
      delegatee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    delegateBySig(
      delegator: PromiseOrValue<string>,
      delegatee: PromiseOrValue<string>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getDelegatedSupplyByBlockNumber(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    getPowerByBlockNumber(
      user: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    initialize(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    mintTimestampOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    permitForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'safeTransferFrom(address,address,uint256)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenDataOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    burn(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    burnWithSig(
      tokenId: PromiseOrValue<BigNumberish>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    delegate(
      delegatee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    delegateBySig(
      delegator: PromiseOrValue<string>,
      delegatee: PromiseOrValue<string>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    exists(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getDelegatedSupplyByBlockNumber(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getDomainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPowerByBlockNumber(
      user: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    initialize(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    mintTimestampOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    permit(
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    permitForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      sig: DataTypes.EIP712SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'safeTransferFrom(address,address,uint256)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    sigNonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    tokenDataOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    tokenOfOwnerByIndex(
      owner: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
