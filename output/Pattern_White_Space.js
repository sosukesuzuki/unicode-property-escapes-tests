// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Pattern_White_Space`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

const buildString = ({ loneCodePoints, ranges }) => {
	let result = String.fromCodePoint(...loneCodePoints);
	for (const [start, end] of ranges) {
		for (let codePoint = start; codePoint <= end; codePoint++) {
			result += String.fromCodePoint(codePoint);
		}
	}
	return result;
};

const matchSymbols = buildString({
	loneCodePoints: [
		0x000020,
		0x000085
	],
	ranges: [
		[0x000009, 0x00000D],
		[0x00200E, 0x00200F],
		[0x002028, 0x002029]
	]
});
assert(
	/^\p{Pattern_White_Space}+$/u.test(matchSymbols),
	"`\\p{Pattern_White_Space}` matches all proper symbols"
);
assert(
	/^\p{Pat_WS}+$/u.test(matchSymbols),
	"`\\p{Pat_WS}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x000008],
		[0x00000E, 0x00001F],
		[0x000021, 0x000084],
		[0x000086, 0x00200D],
		[0x002010, 0x002027],
		[0x00202A, 0x10FFFF]
	]
});
assert(
	/^\P{Pattern_White_Space}+$/u.test(nonMatchSymbols),
	"`\\P{Pattern_White_Space}` matches all proper symbols"
);
assert(
	/^\P{Pat_WS}+$/u.test(nonMatchSymbols),
	"`\\P{Pat_WS}` matches all proper symbols"
);
