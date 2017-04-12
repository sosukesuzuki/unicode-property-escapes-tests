// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Warang_Citi`
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
		0x0118FF
	],
	ranges: [
		[0x0118A0, 0x0118F2]
	]
});
assert(
	/^\p{Script_Extensions=Warang_Citi}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Warang_Citi}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Wara}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Wara}` matches all proper symbols"
);
assert(
	/^\p{scx=Warang_Citi}+$/u.test(matchSymbols),
	"`\\p{scx=Warang_Citi}` matches all proper symbols"
);
assert(
	/^\p{scx=Wara}+$/u.test(matchSymbols),
	"`\\p{scx=Wara}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01189F],
		[0x0118F3, 0x0118FE],
		[0x011900, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Warang_Citi}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Warang_Citi}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Wara}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Wara}` matches all proper symbols"
);
assert(
	/^\P{scx=Warang_Citi}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Warang_Citi}` matches all proper symbols"
);
assert(
	/^\P{scx=Wara}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Wara}` matches all proper symbols"
);
