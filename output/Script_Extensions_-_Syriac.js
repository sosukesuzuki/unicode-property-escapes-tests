// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Syriac`
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
		0x00060C,
		0x00061B,
		0x00061F,
		0x000640,
		0x000670
	],
	ranges: [
		[0x00064B, 0x000655],
		[0x000700, 0x00070D],
		[0x00070F, 0x00074A],
		[0x00074D, 0x00074F]
	]
});
assert(
	/^\p{Script_Extensions=Syriac}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Syriac}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Syrc}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Syrc}` matches all proper symbols"
);
assert(
	/^\p{scx=Syriac}+$/u.test(matchSymbols),
	"`\\p{scx=Syriac}` matches all proper symbols"
);
assert(
	/^\p{scx=Syrc}+$/u.test(matchSymbols),
	"`\\p{scx=Syrc}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x00070E
	],
	ranges: [
		[0x000000, 0x00060B],
		[0x00060D, 0x00061A],
		[0x00061C, 0x00061E],
		[0x000620, 0x00063F],
		[0x000641, 0x00064A],
		[0x000656, 0x00066F],
		[0x000671, 0x0006FF],
		[0x00074B, 0x00074C],
		[0x000750, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Syriac}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Syriac}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Syrc}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Syrc}` matches all proper symbols"
);
assert(
	/^\P{scx=Syriac}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Syriac}` matches all proper symbols"
);
assert(
	/^\P{scx=Syrc}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Syrc}` matches all proper symbols"
);
