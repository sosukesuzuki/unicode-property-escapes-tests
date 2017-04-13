// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Linear_A`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

const buildString = ({ loneCodePoints, ranges }) => {
	const CHUNK_SIZE = 10000;
	let result = String.fromCodePoint(...loneCodePoints);
	for (const [start, end] of ranges) {
		const codePoints = [];
		for (let length = 0, codePoint = start; codePoint <= end; codePoint++) {
			codePoints[length++] = codePoint;
			if (length === CHUNK_SIZE) {
				result += String.fromCodePoint(...codePoints);
				codePoints.length = length = 0;
			}
		}
		result += String.fromCodePoint(...codePoints);
	}
	return result;
};

const matchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x010600, 0x010736],
		[0x010740, 0x010755],
		[0x010760, 0x010767]
	]
});
assert(
	/^\p{Script=Linear_A}+$/u.test(matchSymbols),
	"`\\p{Script=Linear_A}` matches all proper symbols"
);
assert(
	/^\p{Script=Lina}+$/u.test(matchSymbols),
	"`\\p{Script=Lina}` matches all proper symbols"
);
assert(
	/^\p{sc=Linear_A}+$/u.test(matchSymbols),
	"`\\p{sc=Linear_A}` matches all proper symbols"
);
assert(
	/^\p{sc=Lina}+$/u.test(matchSymbols),
	"`\\p{sc=Lina}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x0105FF],
		[0x010737, 0x01073F],
		[0x010756, 0x01075F],
		[0x010768, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Linear_A}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Linear_A}` matches all proper symbols"
);
assert(
	/^\P{Script=Lina}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Lina}` matches all proper symbols"
);
assert(
	/^\P{sc=Linear_A}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Linear_A}` matches all proper symbols"
);
assert(
	/^\P{sc=Lina}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Lina}` matches all proper symbols"
);
