// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Glagolitic`
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
		[0x002C00, 0x002C2E],
		[0x002C30, 0x002C5E],
		[0x01E000, 0x01E006],
		[0x01E008, 0x01E018],
		[0x01E01B, 0x01E021],
		[0x01E023, 0x01E024],
		[0x01E026, 0x01E02A]
	]
});
assert(
	/^\p{Script=Glagolitic}+$/u.test(matchSymbols),
	"`\\p{Script=Glagolitic}` matches all proper symbols"
);
assert(
	/^\p{Script=Glag}+$/u.test(matchSymbols),
	"`\\p{Script=Glag}` matches all proper symbols"
);
assert(
	/^\p{sc=Glagolitic}+$/u.test(matchSymbols),
	"`\\p{sc=Glagolitic}` matches all proper symbols"
);
assert(
	/^\p{sc=Glag}+$/u.test(matchSymbols),
	"`\\p{sc=Glag}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x002C2F,
		0x01E007,
		0x01E022,
		0x01E025
	],
	ranges: [
		[0x000000, 0x002BFF],
		[0x002C5F, 0x01DFFF],
		[0x01E019, 0x01E01A],
		[0x01E02B, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Glagolitic}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Glagolitic}` matches all proper symbols"
);
assert(
	/^\P{Script=Glag}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Glag}` matches all proper symbols"
);
assert(
	/^\P{sc=Glagolitic}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Glagolitic}` matches all proper symbols"
);
assert(
	/^\P{sc=Glag}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Glag}` matches all proper symbols"
);
