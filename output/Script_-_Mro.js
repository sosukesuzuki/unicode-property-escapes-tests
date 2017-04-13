// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Mro`
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
		[0x016A40, 0x016A5E],
		[0x016A60, 0x016A69],
		[0x016A6E, 0x016A6F]
	]
});
assert(
	/^\p{Script=Mro}+$/u.test(matchSymbols),
	"`\\p{Script=Mro}` matches all proper symbols"
);
assert(
	/^\p{Script=Mroo}+$/u.test(matchSymbols),
	"`\\p{Script=Mroo}` matches all proper symbols"
);
assert(
	/^\p{sc=Mro}+$/u.test(matchSymbols),
	"`\\p{sc=Mro}` matches all proper symbols"
);
assert(
	/^\p{sc=Mroo}+$/u.test(matchSymbols),
	"`\\p{sc=Mroo}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x016A5F
	],
	ranges: [
		[0x000000, 0x016A3F],
		[0x016A6A, 0x016A6D],
		[0x016A70, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Mro}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Mro}` matches all proper symbols"
);
assert(
	/^\P{Script=Mroo}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Mroo}` matches all proper symbols"
);
assert(
	/^\P{sc=Mro}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Mro}` matches all proper symbols"
);
assert(
	/^\P{sc=Mroo}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Mroo}` matches all proper symbols"
);
