// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tifinagh`
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
	/^\p{Script_Extensions=Tifinagh}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Tifinagh}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Tfng}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Tfng}` matches all proper symbols"
);
assert(
	/^\p{scx=Tifinagh}+$/u.test(matchSymbols),
	"`\\p{scx=Tifinagh}` matches all proper symbols"
);
assert(
	/^\p{scx=Tfng}+$/u.test(matchSymbols),
	"`\\p{scx=Tfng}` matches all proper symbols"
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
	/^\P{Script_Extensions=Tifinagh}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Tifinagh}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Tfng}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Tfng}` matches all proper symbols"
);
assert(
	/^\P{scx=Tifinagh}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Tifinagh}` matches all proper symbols"
);
assert(
	/^\P{scx=Tfng}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Tfng}` matches all proper symbols"
);
