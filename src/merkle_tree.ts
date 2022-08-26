/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint @typescript-eslint/no-explicit-any: "off" */

const keccak = require('@cafeca/keccak');
import ConsistentHashing from './consistnt_hashing';

class MerkleTree {
  // set type of tree elements
  zeroValue = 0;
  nodeStorage = {}; // Map index to value
  totalLeavesCounts: number;
  groupSize: number;
  consistentHashRing: any;
  salt: number;

  // user constructor to initialize params
  /**
   * use constructor to set rate, capacity, delimitedSuffix, options
   * @param groupSize keccak algorithm given by user
   * @param nodeElements keccak algorithm given by user
   * @param hashFunction hash function which is used by user
   */
  constructor(groupSize: number, nodeElements: string[], hashFunction = new keccak('keccak256')) {
    const hashLeftAndRight = hashFunction;
    this.totalLeavesCounts = 0;
    this.groupSize = 0;
    this.salt = 0;

    if (nodeElements.length > 0) {
      // set totalLeavesCounts, level
      // set totalLeavesCounts = nodeElements.length;
      this.consistentHashRing = new ConsistentHashing(nodeElements);
      this.groupSize = this.consistentHashRing.getGroupSizeAndSalt()[0];
      this.salt = this.consistentHashRing.getGroupSizeAndSalt()[1];
      // call build tree function
      this.buildMerkleTree(this.groupSize, nodeElements, this.salt);
    }
  }

  buildMerkleTree(groupSize: number, elements: string[], salt: number) {
    this.groupSize = groupSize;
    this.getDataBlockHash(groupSize, elements);
  }

  getDataBlockHash(groupSize: number, elements: string[]): string[] {
    return [];
  }

  insertNodes(value: Buffer) {
    // get original element and add sort
    // nodeElements add value
    // this.consistentHashRing = new ConsistentHashing(this.groupSize, nodeElements);
    // // rebuild nodeStorage
    this.groupSize = this.consistentHashRing.getGroupSizeAndSalt()[0];
    this.salt = this.consistentHashRing.getGroupSizeAndSalt()[1];
    // // rebuild merkle tree
    // buildMerkleTree(groupSize, nodeElements, sort);
    // // store nodeStorage size to totalLeavesCount
    // totalLeavesCount = count nodeStorage nodes
  }
  getIndex(targetHashValue: string): string {
    // find targetValue in nodeStorage
    return '1';
  }
  getNodeHash(index: string): string {
    return new keccak('keccak256').update('2').digest('hex');
  }
  getRoot(): string {
    // get root hash (index = 0)
    return 'nodeStorage.get(0)';
  }
  // remove data
  removeNode(value: string): boolean {
    // if (nodeElements contains value) {
    //     // get original element and add sort
    //     nodeElements remove value
    //     this.consistentHashRing = new ConsistentHashing(this.groupSize, nodeElements);

    //     // rebuild nodeStorage
    //     groupSize = this.consistentHashRing.getGroupSizeAndSort()[0];
    //     sort = this.consistentHashRing.getGroupSizeAndSort()[1];

    //     // rebuild merkle tree
    //     buildMerkleTree(groupSize, nodeElements, sort);

    //     // store nodeStorage size to totalLeavesCount
    //     totalLeavesCount = count nodeStorage nodes ;

    return true;

    // } else {
    //     return false;
    // }
  }
  getFullEvidence(): Buffer {
    // let nodesWithRlp = []
    // for loop 1 to nodeStorage.length:
    //     // if it's not 0 value
    //     if (nodeStorage[i] !== 80):
    //         nodesWithRlp.add(rlpConverter(nodeStorage[i])+nodeStorage[i]);
    //     else:
    //         nodesWithRlp.add(80);

    // let result = [];
    // add rlpcode to node
    // return  Buffer.from([groupSize , nodeStorage[0] , sort] + doPreOrder(nodesWithRlp , 0));
    return Buffer.from([1, 2, 3]);
  }
  getPartialEvidence() {
    // return 32 bytes (Buffer.from([groupSize , nodeStorage[0] , sort]));
    return Buffer.from([1, 2, 3]);
  }
  doPreOrder(elements: string[], rootIndex: number): string[] {
    const items = elements;
    const result: string[] = [];
    this.preOrder(rootIndex);
    return result;
  }
  // input root index first
  preOrder(index: number) {
    // if (index >= items.length) {
    //       return result;
    //   }
    // result.add(nodesWithRlp[index]);
    // preOrder((2 * index)+1);
    // preOrder((2 * index)+2);
  }
  proofIndexNode(index: number): boolean {
    // for loop to parents until reach the root:
    //     do Hash(index of node's hash ,siblings hash);
    // if roothash!= previous root hash:
    //     return false;
    // else:
    return true;
  }
  getPartialEvidenceByData(data: string | Buffer, fullTree: string[] | Buffer[]): string[] {
    // get sort (hashConfig)
    // const sort = get sort from fullTree;
    // // get index
    // const index = this.consistentHash(data);
    // // get hash
    // const hash = this.hashMerkle(data, sort);

    // const result = getPartialEvidenceByHash(hash, fullTree);

    return [];
  }
  getPartialEvidenceByHash(hash: string | Buffer, fullTree: string[] | Buffer[]): string[] {
    // result = [];
    const result: string[] = [];

    // remove groupSize and sort from fullTree;

    // // find data in last level
    // if hash not in fullTree :
    //     return -1;

    // transfer fullTree from preorder to original format;

    // // get evidence element from tree
    // for loop siblings index to root index:
    //     check fullTree[index + 2^n-1] is left child or right child:
    //     if it's left child:
    //        result.unshift(fullTree[index], fullTree[index+1])
    //     else:
    //        result.unshift(fullTree[index-1], fullTree[index])

    return result;
  }
  verifyNodeByData(data: string | Buffer, hashList: string[] | Buffer[]): boolean {
    // let nodeHash = this.hashMerkle(data);
    // const result = verifyNodeByHash( nodeHash , hashList );
    return true;
  }
  verifyNodeByHash(hash: string | Buffer, hashList: string[] | Buffer[]): boolean {
    // let nodeHash = hash;

    // for loop element in hashList:
    //     nodeHash = this.hashMerkle(nodeHash,hashList[i]);

    // if nodeHash === this.hashList[0]:
    //     return true;
    // else:
    //     return false;
    return true;
  }
}

export default MerkleTree;
