// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Inherited`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

const buildString = ({ loneCodePoints, ranges }) => {
	let result = String.fromCodePoint(...loneCodePoints);
	for (const [start, end] of ranges) {
		for (let codePoint = start; codePoint <= end; codePoint++) {
			result += String.fromCodePoint(codePoint);
		}
	}
	return result;
};

const matchSymbols = buildString({
	loneCodePoints: [
		0x000670,
		0x001CED,
		0x001CF4,
		0x0101FD,
		0x0102E0
	],
	ranges: [
		[0x000300, 0x00036F],
		[0x000485, 0x000486],
		[0x00064B, 0x000655],
		[0x000951, 0x000952],
		[0x001AB0, 0x001ABE],
		[0x001CD0, 0x001CD2],
		[0x001CD4, 0x001CE0],
		[0x001CE2, 0x001CE8],
		[0x001CF8, 0x001CF9],
		[0x001DC0, 0x001DF5],
		[0x001DFB, 0x001DFF],
		[0x00200C, 0x00200D],
		[0x0020D0, 0x0020F0],
		[0x00302A, 0x00302D],
		[0x003099, 0x00309A],
		[0x00FE00, 0x00FE0F],
		[0x00FE20, 0x00FE2D],
		[0x01D167, 0x01D169],
		[0x01D17B, 0x01D182],
		[0x01D185, 0x01D18B],
		[0x01D1AA, 0x01D1AD],
		[0x0E0100, 0x0E01EF]
	]
});
assert(
	/^\p{Script=Inherited}+$/u.test(matchSymbols),
	"`\\p{Script=Inherited}` matches all proper symbols"
);
assert(
	/^\p{Script=Zinh}+$/u.test(matchSymbols),
	"`\\p{Script=Zinh}` matches all proper symbols"
);
assert(
	/^\p{Script=Qaai}+$/u.test(matchSymbols),
	"`\\p{Script=Qaai}` matches all proper symbols"
);
assert(
	/^\p{sc=Inherited}+$/u.test(matchSymbols),
	"`\\p{sc=Inherited}` matches all proper symbols"
);
assert(
	/^\p{sc=Zinh}+$/u.test(matchSymbols),
	"`\\p{sc=Zinh}` matches all proper symbols"
);
assert(
	/^\p{sc=Qaai}+$/u.test(matchSymbols),
	"`\\p{sc=Qaai}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x001CD3,
		0x001CE1
	],
	ranges: [
		[0x000000, 0x0002FF],
		[0x000370, 0x000484],
		[0x000487, 0x00064A],
		[0x000656, 0x00066F],
		[0x000671, 0x000950],
		[0x000953, 0x001AAF],
		[0x001ABF, 0x001CCF],
		[0x001CE9, 0x001CEC],
		[0x001CEE, 0x001CF3],
		[0x001CF5, 0x001CF7],
		[0x001CFA, 0x001DBF],
		[0x001DF6, 0x001DFA],
		[0x001E00, 0x00200B],
		[0x00200E, 0x0020CF],
		[0x0020F1, 0x003029],
		[0x00302E, 0x003098],
		[0x00309B, 0x00FDFF],
		[0x00FE10, 0x00FE1F],
		[0x00FE2E, 0x0101FC],
		[0x0101FE, 0x0102DF],
		[0x0102E1, 0x01D166],
		[0x01D16A, 0x01D17A],
		[0x01D183, 0x01D184],
		[0x01D18C, 0x01D1A9],
		[0x01D1AE, 0x0E00FF],
		[0x0E01F0, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Inherited}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Inherited}` matches all proper symbols"
);
assert(
	/^\P{Script=Zinh}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Zinh}` matches all proper symbols"
);
assert(
	/^\P{Script=Qaai}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Qaai}` matches all proper symbols"
);
assert(
	/^\P{sc=Inherited}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Inherited}` matches all proper symbols"
);
assert(
	/^\P{sc=Zinh}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Zinh}` matches all proper symbols"
);
assert(
	/^\P{sc=Qaai}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Qaai}` matches all proper symbols"
);
