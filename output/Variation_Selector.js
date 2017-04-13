// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Variation_Selector`
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
		[0x00180B, 0x00180D],
		[0x00FE00, 0x00FE0F],
		[0x0E0100, 0x0E01EF]
	]
});
assert(
	/^\p{Variation_Selector}+$/u.test(matchSymbols),
	"`\\p{Variation_Selector}` matches all proper symbols"
);
assert(
	/^\p{VS}+$/u.test(matchSymbols),
	"`\\p{VS}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x00180A],
		[0x00180E, 0x00FDFF],
		[0x00FE10, 0x0E00FF],
		[0x0E01F0, 0x10FFFF]
	]
});
assert(
	/^\P{Variation_Selector}+$/u.test(nonMatchSymbols),
	"`\\P{Variation_Selector}` matches all proper symbols"
);
assert(
	/^\P{VS}+$/u.test(nonMatchSymbols),
	"`\\P{VS}` matches all proper symbols"
);
