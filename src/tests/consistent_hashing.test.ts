import ConsistentHashing from '../consistnt_hashing';

// check hashCalculator output
describe('Check hashCalculator output', () => {
  // test hash function
  test('test hash(two hash) to hex string', () => {
    const consistentHashing = new ConsistentHashing(['1', '2', '3']);
    const result = consistentHashing.getGroupSizeAndSalt();
    expect(result[0]).toStrictEqual(32);
    expect(result[1]).toStrictEqual(0);
  });
});

// check the consistenthash function
describe('Check consistentHash function', () => {
  // test uint8array to hex string
  test('test empty rlp code', () => {
    const consistentHashing = new ConsistentHashing(['1', '2', '3']);
    const element = '1';
    const result = consistentHashing.consistentHash(element);
    // return index
    expect(result).toStrictEqual(14);
  });
});
