// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Oriya`
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
		[0x000951, 0x000952],
		[0x000964, 0x000965],
		[0x000B01, 0x000B03],
		[0x000B05, 0x000B0C],
		[0x000B0F, 0x000B10],
		[0x000B13, 0x000B28],
		[0x000B2A, 0x000B30],
		[0x000B32, 0x000B33],
		[0x000B35, 0x000B39],
		[0x000B3C, 0x000B44],
		[0x000B47, 0x000B48],
		[0x000B4B, 0x000B4D],
		[0x000B56, 0x000B57],
		[0x000B5C, 0x000B5D],
		[0x000B5F, 0x000B63],
		[0x000B66, 0x000B77]
	]
});
assert(
	/^\p{Script_Extensions=Oriya}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Oriya}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Orya}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Orya}` matches all proper symbols"
);
assert(
	/^\p{scx=Oriya}+$/u.test(matchSymbols),
	"`\\p{scx=Oriya}` matches all proper symbols"
);
assert(
	/^\p{scx=Orya}+$/u.test(matchSymbols),
	"`\\p{scx=Orya}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x000B04,
		0x000B29,
		0x000B31,
		0x000B34,
		0x000B5E
	],
	ranges: [
		[0x000000, 0x000950],
		[0x000953, 0x000963],
		[0x000966, 0x000B00],
		[0x000B0D, 0x000B0E],
		[0x000B11, 0x000B12],
		[0x000B3A, 0x000B3B],
		[0x000B45, 0x000B46],
		[0x000B49, 0x000B4A],
		[0x000B4E, 0x000B55],
		[0x000B58, 0x000B5B],
		[0x000B64, 0x000B65],
		[0x000B78, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Oriya}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Oriya}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Orya}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Orya}` matches all proper symbols"
);
assert(
	/^\P{scx=Oriya}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Oriya}` matches all proper symbols"
);
assert(
	/^\P{scx=Orya}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Orya}` matches all proper symbols"
);
