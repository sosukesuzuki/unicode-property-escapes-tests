// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Nko`
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
		[0x0007C0, 0x0007FA]
	]
});
assert(
	/^\p{Script_Extensions=Nko}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Nko}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Nkoo}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Nkoo}` matches all proper symbols"
);
assert(
	/^\p{scx=Nko}+$/u.test(matchSymbols),
	"`\\p{scx=Nko}` matches all proper symbols"
);
assert(
	/^\p{scx=Nkoo}+$/u.test(matchSymbols),
	"`\\p{scx=Nkoo}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x0007BF],
		[0x0007FB, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Nko}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Nko}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Nkoo}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Nkoo}` matches all proper symbols"
);
assert(
	/^\P{scx=Nko}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Nko}` matches all proper symbols"
);
assert(
	/^\P{scx=Nkoo}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Nkoo}` matches all proper symbols"
);
