// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Carian`
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
		[0x0102A0, 0x0102D0]
	]
});
assert(
	/^\p{Script_Extensions=Carian}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Carian}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Cari}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Cari}` matches all proper symbols"
);
assert(
	/^\p{scx=Carian}+$/u.test(matchSymbols),
	"`\\p{scx=Carian}` matches all proper symbols"
);
assert(
	/^\p{scx=Cari}+$/u.test(matchSymbols),
	"`\\p{scx=Cari}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01029F],
		[0x0102D1, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Carian}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Carian}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Cari}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Cari}` matches all proper symbols"
);
assert(
	/^\P{scx=Carian}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Carian}` matches all proper symbols"
);
assert(
	/^\P{scx=Cari}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Cari}` matches all proper symbols"
);
