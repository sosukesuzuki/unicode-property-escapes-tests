// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tai_Tham`
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
		[0x001A20, 0x001A5E],
		[0x001A60, 0x001A7C],
		[0x001A7F, 0x001A89],
		[0x001A90, 0x001A99],
		[0x001AA0, 0x001AAD]
	]
});
assert(
	/^\p{Script=Tai_Tham}+$/u.test(matchSymbols),
	"`\\p{Script=Tai_Tham}` matches all proper symbols"
);
assert(
	/^\p{Script=Lana}+$/u.test(matchSymbols),
	"`\\p{Script=Lana}` matches all proper symbols"
);
assert(
	/^\p{sc=Tai_Tham}+$/u.test(matchSymbols),
	"`\\p{sc=Tai_Tham}` matches all proper symbols"
);
assert(
	/^\p{sc=Lana}+$/u.test(matchSymbols),
	"`\\p{sc=Lana}` matches all proper symbols"
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
	/^\P{Script=Tai_Tham}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Tai_Tham}` matches all proper symbols"
);
assert(
	/^\P{Script=Lana}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Lana}` matches all proper symbols"
);
assert(
	/^\P{sc=Tai_Tham}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Tai_Tham}` matches all proper symbols"
);
assert(
	/^\P{sc=Lana}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Lana}` matches all proper symbols"
);
