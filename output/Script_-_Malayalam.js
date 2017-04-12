// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Malayalam`
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
	loneCodePoints: [],
	ranges: [
		[0x000D01, 0x000D03],
		[0x000D05, 0x000D0C],
		[0x000D0E, 0x000D10],
		[0x000D12, 0x000D3A],
		[0x000D3D, 0x000D44],
		[0x000D46, 0x000D48],
		[0x000D4A, 0x000D4F],
		[0x000D54, 0x000D63],
		[0x000D66, 0x000D7F]
	]
});
assert(
	/^\p{Script=Malayalam}+$/u.test(matchSymbols),
	"`\\p{Script=Malayalam}` matches all proper symbols"
);
assert(
	/^\p{Script=Mlym}+$/u.test(matchSymbols),
	"`\\p{Script=Mlym}` matches all proper symbols"
);
assert(
	/^\p{sc=Malayalam}+$/u.test(matchSymbols),
	"`\\p{sc=Malayalam}` matches all proper symbols"
);
assert(
	/^\p{sc=Mlym}+$/u.test(matchSymbols),
	"`\\p{sc=Mlym}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x000D04,
		0x000D0D,
		0x000D11,
		0x000D45,
		0x000D49
	],
	ranges: [
		[0x000000, 0x000D00],
		[0x000D3B, 0x000D3C],
		[0x000D50, 0x000D53],
		[0x000D64, 0x000D65],
		[0x000D80, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Malayalam}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Malayalam}` matches all proper symbols"
);
assert(
	/^\P{Script=Mlym}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Mlym}` matches all proper symbols"
);
assert(
	/^\P{sc=Malayalam}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Malayalam}` matches all proper symbols"
);
assert(
	/^\P{sc=Mlym}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Mlym}` matches all proper symbols"
);
