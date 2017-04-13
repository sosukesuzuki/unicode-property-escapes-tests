// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tai_Tham`
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
		[0x001A20, 0x001A5E],
		[0x001A60, 0x001A7C],
		[0x001A7F, 0x001A89],
		[0x001A90, 0x001A99],
		[0x001AA0, 0x001AAD]
	]
});
assert(
	/^\p{Script_Extensions=Tai_Tham}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Tai_Tham}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Lana}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Lana}` matches all proper symbols"
);
assert(
	/^\p{scx=Tai_Tham}+$/u.test(matchSymbols),
	"`\\p{scx=Tai_Tham}` matches all proper symbols"
);
assert(
	/^\p{scx=Lana}+$/u.test(matchSymbols),
	"`\\p{scx=Lana}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x001A5F
	],
	ranges: [
		[0x000000, 0x001A1F],
		[0x001A7D, 0x001A7E],
		[0x001A8A, 0x001A8F],
		[0x001A9A, 0x001A9F],
		[0x001AAE, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Tai_Tham}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Tai_Tham}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Lana}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Lana}` matches all proper symbols"
);
assert(
	/^\P{scx=Tai_Tham}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Tai_Tham}` matches all proper symbols"
);
assert(
	/^\P{scx=Lana}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Lana}` matches all proper symbols"
);
