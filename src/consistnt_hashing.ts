import {h2d} from './utils/hash';

/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint @typescript-eslint/no-explicit-any: "off" */
const keccak = require('@cafeca/keccak');

class ConsistentHashing {
  nodeElements: string[];
  groupSize: number;
  salt: number;

  constructor(elementsList: string[]) {
    this.nodeElements = elementsList;
    this.groupSize = 0;
    this.salt = 0;
    this.hashCalculator(this.nodeElements);
  }

  hashCalculator(elements: string[]) {
    let groupSize = 0;

    // initialize the param
    for (let i = 1; i < 21; i++) {
      const slotSize = Math.pow(2, i);

      if (slotSize > elements.length * 4) {
        groupSize = slotSize;
        break;
      }
    }

    const indexMap: {[k: string]: any} = {};
    // let i = 0;
    // let count = 0;

    for (let i = 0; i < elements.length; i++) {
      const originalHash = new keccak('keccak256').update(elements[i], 'utf8').digest('hex');
      const hash: number = h2d(originalHash);

      indexMap[(hash % groupSize).toString()] = originalHash;
    }

    // while (i < elements.length) {
    //   let originalHash = new keccak('keccak256').update(elements[i]).digest('hex');
    //   let hash: number = h2d(originalHash);

    //   indexMap[(hash % groupSize).toString()] = originalHash;

    //   if (indexMap.hasOwnProperty((hash % groupSize).toString()) !== true) {
    //     if ((count = 0)) {
    //       indexMap[(hash % groupSize).toString()] = originalHash;
    //       console.log(hash % groupSize);
    //     } else {
    //       let saltHash = new keccak('keccak256')
    //         .update(elements[i] + count.toString())
    //         .digest('hex');
    //       saltHash = h2d(saltHash);
    //       // 換個數字做 hash
    //       indexMap[(saltHash % groupSize).toString()] = saltHash;
    //     }
    //     i = i + 1;
    //   } else {
    //     // delete object and do it again
    //     for (var key in indexMap) {
    //       delete indexMap[key];
    //     }
    //     count = count + 1;
    //     i = 0;
    //   }
    // }

    // this.salt = count;
    // this.groupSize = groupSize;
    this.salt = 0;
    this.groupSize = 16;
  }

  consistentHash(element: string) {
    const originalHash = new keccak('keccak256').update(element, 'utf8').digest('hex');
    const hash: number = h2d(originalHash);

    const result = hash % this.groupSize;

    // return index
    return result;
  }

  getGroupSizeAndSalt(): number[] {
    return [this.groupSize, this.salt];
  }
}

export default ConsistentHashing;
