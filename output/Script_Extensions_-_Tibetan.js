// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tibetan`
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
		[0x000F00, 0x000F47],
		[0x000F49, 0x000F6C],
		[0x000F71, 0x000F97],
		[0x000F99, 0x000FBC],
		[0x000FBE, 0x000FCC],
		[0x000FCE, 0x000FD4],
		[0x000FD9, 0x000FDA]
	]
});
assert(
	/^\p{Script_Extensions=Tibetan}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Tibetan}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Tibt}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Tibt}` matches all proper symbols"
);
assert(
	/^\p{scx=Tibetan}+$/u.test(matchSymbols),
	"`\\p{scx=Tibetan}` matches all proper symbols"
);
assert(
	/^\p{scx=Tibt}+$/u.test(matchSymbols),
	"`\\p{scx=Tibt}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x000F48,
		0x000F98,
		0x000FBD,
		0x000FCD
	],
	ranges: [
		[0x000000, 0x000EFF],
		[0x000F6D, 0x000F70],
		[0x000FD5, 0x000FD8],
		[0x000FDB, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Tibetan}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Tibetan}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Tibt}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Tibt}` matches all proper symbols"
);
assert(
	/^\P{scx=Tibetan}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Tibetan}` matches all proper symbols"
);
assert(
	/^\P{scx=Tibt}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Tibt}` matches all proper symbols"
);
