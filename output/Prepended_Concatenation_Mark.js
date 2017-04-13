// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Prepended_Concatenation_Mark`
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
	loneCodePoints: [
		0x0006DD,
		0x00070F,
		0x0008E2,
		0x0110BD
	],
	ranges: [
		[0x000600, 0x000605]
	]
});
assert(
	/^\p{Prepended_Concatenation_Mark}+$/u.test(matchSymbols),
	"`\\p{Prepended_Concatenation_Mark}` matches all proper symbols"
);
assert(
	/^\p{PCM}+$/u.test(matchSymbols),
	"`\\p{PCM}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x0005FF],
		[0x000606, 0x0006DC],
		[0x0006DE, 0x00070E],
		[0x000710, 0x0008E1],
		[0x0008E3, 0x0110BC],
		[0x0110BE, 0x10FFFF]
	]
});
assert(
	/^\P{Prepended_Concatenation_Mark}+$/u.test(nonMatchSymbols),
	"`\\P{Prepended_Concatenation_Mark}` matches all proper symbols"
);
assert(
	/^\P{PCM}+$/u.test(nonMatchSymbols),
	"`\\P{PCM}` matches all proper symbols"
);
