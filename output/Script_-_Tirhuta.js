// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tirhuta`
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
		[0x011480, 0x0114C7],
		[0x0114D0, 0x0114D9]
	]
});
assert(
	/^\p{Script=Tirhuta}+$/u.test(matchSymbols),
	"`\\p{Script=Tirhuta}` matches all proper symbols"
);
assert(
	/^\p{Script=Tirh}+$/u.test(matchSymbols),
	"`\\p{Script=Tirh}` matches all proper symbols"
);
assert(
	/^\p{sc=Tirhuta}+$/u.test(matchSymbols),
	"`\\p{sc=Tirhuta}` matches all proper symbols"
);
assert(
	/^\p{sc=Tirh}+$/u.test(matchSymbols),
	"`\\p{sc=Tirh}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01147F],
		[0x0114C8, 0x0114CF],
		[0x0114DA, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Tirhuta}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Tirhuta}` matches all proper symbols"
);
assert(
	/^\P{Script=Tirh}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Tirh}` matches all proper symbols"
);
assert(
	/^\P{sc=Tirhuta}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Tirhuta}` matches all proper symbols"
);
assert(
	/^\P{sc=Tirh}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Tirh}` matches all proper symbols"
);
