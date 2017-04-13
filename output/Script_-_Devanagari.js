// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Devanagari`
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
		[0x000900, 0x000950],
		[0x000953, 0x000963],
		[0x000966, 0x00097F],
		[0x00A8E0, 0x00A8FD]
	]
});
assert(
	/^\p{Script=Devanagari}+$/u.test(matchSymbols),
	"`\\p{Script=Devanagari}` matches all proper symbols"
);
assert(
	/^\p{Script=Deva}+$/u.test(matchSymbols),
	"`\\p{Script=Deva}` matches all proper symbols"
);
assert(
	/^\p{sc=Devanagari}+$/u.test(matchSymbols),
	"`\\p{sc=Devanagari}` matches all proper symbols"
);
assert(
	/^\p{sc=Deva}+$/u.test(matchSymbols),
	"`\\p{sc=Deva}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x0008FF],
		[0x000951, 0x000952],
		[0x000964, 0x000965],
		[0x000980, 0x00A8DF],
		[0x00A8FE, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Devanagari}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Devanagari}` matches all proper symbols"
);
assert(
	/^\P{Script=Deva}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Deva}` matches all proper symbols"
);
assert(
	/^\P{sc=Devanagari}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Devanagari}` matches all proper symbols"
);
assert(
	/^\P{sc=Deva}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Deva}` matches all proper symbols"
);
