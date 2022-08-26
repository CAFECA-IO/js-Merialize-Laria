/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint @typescript-eslint/no-explicit-any: "off" */
import MerkleTree from '../merkle_tree';
const keccak = require('@cafeca/keccak');

// check buffer output
describe('Check buildTree output', () => {
  test('test Merkle Tree', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
  });
});

// check insertNodes output
describe('Check insertNodes output', () => {
  test('test insertNodes', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    mktree.insertNodes(Buffer.from([1, 2, 3]));
  });
});

// check insertNodes output
describe('Check getIndex output', () => {
  test('test getIndex', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    // Need to add result
    mktree.getIndex('2');
  });
});

// check insertNodes output
describe('Check getNodeHash output', () => {
  test('test getNodeHash', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    // Need to add result
    expect(mktree.getNodeHash('2')).toStrictEqual(
      new keccak('keccak256').update('2').digest('hex')
    );
  });
});

// check insertNodes output
describe('Check getRoot output', () => {
  test('test getRoot', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    mktree.getRoot();
  });
});

// check remove data output
describe('Check removeNodes output', () => {
  test('test removeNodes', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    const removeStatus = mktree.removeNode('1');
    expect(removeStatus).toStrictEqual(true);
  });
});

// check getFullEvidence output
describe('Check getFullEvidence output', () => {
  test('test getFullEvidence', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    const evidence = mktree.getFullEvidence();
    expect(evidence).toStrictEqual(Buffer.from([1, 2, 3]));
  });
});

// check getPartialEvidence output
describe('Check getPartialEvidence output', () => {
  test('test getPartialEvidence', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    const evidence = mktree.getPartialEvidence();
    expect(evidence).toStrictEqual(Buffer.from([1, 2, 3]));
  });
});

// check proofIndexNode output
describe('Check proofIndexNode output', () => {
  test('test proofIndexNode', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    const status = mktree.proofIndexNode(1);
    expect(status).toStrictEqual(true);
  });
});

// check getPartialEvidenceByData output
describe('Check getPartialEvidenceByData output', () => {
  test('test getPartialEvidenceByData', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    const evidence = mktree.getPartialEvidenceByData('1', ['1', '2', '3']);
    expect(evidence).toStrictEqual([]);
  });
});

// check getPartialEvidenceByData output
describe('Check getPartialEvidenceByHash output', () => {
  test('test getPartialEvidenceByHash', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    const evidence = mktree.getPartialEvidenceByHash('1', ['1', '2', '3']);
    expect(evidence).toStrictEqual([]);
  });
});

// check getPartialEvidenceByData output
describe('Check verifyNodeByData output', () => {
  test('test verifyNodeByData', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    const status = mktree.verifyNodeByData('1', ['1', '2', '3']);
    expect(status).toStrictEqual(true);
  });
});

// check getPartialEvidenceByData output
describe('Check verifyNodeByHash output', () => {
  test('test verifyNodeByHash', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    const status = mktree.verifyNodeByHash('1', ['1', '2', '3']);
    expect(status).toStrictEqual(true);
  });
});

// check getPartialEvidenceByData output
describe('Check proofIndexNode output', () => {
  test('test proofIndexNode', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    const status = mktree.proofIndexNode(1);
    expect(status).toStrictEqual(true);
  });
});

// check getPartialEvidenceByData output
describe('Check doPreOrder output', () => {
  test('test doPreOrder', () => {
    const mktree = new MerkleTree(3, ['1', '2', '3'], new keccak('keccak256'));
    const mktree_test = new MerkleTree(3, ['1', '2', '3']);
    const result = mktree.doPreOrder(['1', '2', '3'], 0);
    expect(result).toStrictEqual([]);
  });
});

// need to put in output evidence
//   doPreOrder(elements, rootIndex): string[] {
//     const items = elements;
//     const result = [];
//     this.preOrder(rootIndex);
//     return result;
//   }
//   // input root index first
//   preOrder(index) {
//     // if (index >= items.length) {
//     //       return result;
//     //   }
//     // result.add(nodesWithRlp[index]);
//     // preOrder((2 * index)+1);
//     // preOrder((2 * index)+2);
//   }

//   verifyNodeByData(data: string | Buffer, hashList: string[] | Buffer[]): boolean {
//     // let nodeHash = this.hashMerkle(data);
//     // const result = verifyNodeByHash( nodeHash , hashList );
//     return true;
//   }
//   verifyNodeByHash(hash: string | Buffer, hashList: string[] | Buffer[]): boolean {
//     // let nodeHash = hash;

//     // for loop element in hashList:
//     //     nodeHash = this.hashMerkle(nodeHash,hashList[i]);

//     // if nodeHash === this.hashList[0]:
//     //     return true;
//     // else:
//     //     return false;
//     return true;
//   }
