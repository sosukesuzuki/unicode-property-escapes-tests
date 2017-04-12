// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tifinagh`
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
		0x002D7F
	],
	ranges: [
		[0x002D30, 0x002D67],
		[0x002D6F, 0x002D70]
	]
});
assert(
	/^\p{Script=Tifinagh}+$/u.test(matchSymbols),
	"`\\p{Script=Tifinagh}` matches all proper symbols"
);
assert(
	/^\p{Script=Tfng}+$/u.test(matchSymbols),
	"`\\p{Script=Tfng}` matches all proper symbols"
);
assert(
	/^\p{sc=Tifinagh}+$/u.test(matchSymbols),
	"`\\p{sc=Tifinagh}` matches all proper symbols"
);
assert(
	/^\p{sc=Tfng}+$/u.test(matchSymbols),
	"`\\p{sc=Tfng}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x002D2F],
		[0x002D68, 0x002D6E],
		[0x002D71, 0x002D7E],
		[0x002D80, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Tifinagh}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Tifinagh}` matches all proper symbols"
);
assert(
	/^\P{Script=Tfng}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Tfng}` matches all proper symbols"
);
assert(
	/^\P{sc=Tifinagh}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Tifinagh}` matches all proper symbols"
);
assert(
	/^\P{sc=Tfng}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Tfng}` matches all proper symbols"
);
