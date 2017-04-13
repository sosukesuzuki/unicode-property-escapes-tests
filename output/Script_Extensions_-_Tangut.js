// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tangut`
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
		0x016FE0
	],
	ranges: [
		[0x017000, 0x0187EC],
		[0x018800, 0x018AF2]
	]
});
assert(
	/^\p{Script_Extensions=Tangut}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Tangut}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Tang}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Tang}` matches all proper symbols"
);
assert(
	/^\p{scx=Tangut}+$/u.test(matchSymbols),
	"`\\p{scx=Tangut}` matches all proper symbols"
);
assert(
	/^\p{scx=Tang}+$/u.test(matchSymbols),
	"`\\p{scx=Tang}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x016FDF],
		[0x016FE1, 0x016FFF],
		[0x0187ED, 0x0187FF],
		[0x018AF3, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Tangut}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Tangut}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Tang}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Tang}` matches all proper symbols"
);
assert(
	/^\P{scx=Tangut}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Tangut}` matches all proper symbols"
);
assert(
	/^\P{scx=Tang}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Tang}` matches all proper symbols"
);
