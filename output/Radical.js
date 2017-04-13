// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Radical`
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
		[0x002E80, 0x002E99],
		[0x002E9B, 0x002EF3],
		[0x002F00, 0x002FD5]
	]
});
assert(
	/^\p{Radical}+$/u.test(matchSymbols),
	"`\\p{Radical}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x002E9A
	],
	ranges: [
		[0x000000, 0x002E7F],
		[0x002EF4, 0x002EFF],
		[0x002FD6, 0x10FFFF]
	]
});
assert(
	/^\P{Radical}+$/u.test(nonMatchSymbols),
	"`\\P{Radical}` matches all proper symbols"
);
