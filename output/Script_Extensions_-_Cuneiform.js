// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Cuneiform`
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
		[0x012000, 0x012399],
		[0x012400, 0x01246E],
		[0x012470, 0x012474],
		[0x012480, 0x012543]
	]
});
assert(
	/^\p{Script_Extensions=Cuneiform}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Cuneiform}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Xsux}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Xsux}` matches all proper symbols"
);
assert(
	/^\p{scx=Cuneiform}+$/u.test(matchSymbols),
	"`\\p{scx=Cuneiform}` matches all proper symbols"
);
assert(
	/^\p{scx=Xsux}+$/u.test(matchSymbols),
	"`\\p{scx=Xsux}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x01246F
	],
	ranges: [
		[0x000000, 0x011FFF],
		[0x01239A, 0x0123FF],
		[0x012475, 0x01247F],
		[0x012544, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Cuneiform}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Cuneiform}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Xsux}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Xsux}` matches all proper symbols"
);
assert(
	/^\P{scx=Cuneiform}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Cuneiform}` matches all proper symbols"
);
assert(
	/^\P{scx=Xsux}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Xsux}` matches all proper symbols"
);
