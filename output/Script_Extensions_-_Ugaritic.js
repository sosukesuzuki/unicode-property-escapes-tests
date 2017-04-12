// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Ugaritic`
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
		0x01039F
	],
	ranges: [
		[0x010380, 0x01039D]
	]
});
assert(
	/^\p{Script_Extensions=Ugaritic}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Ugaritic}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Ugar}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Ugar}` matches all proper symbols"
);
assert(
	/^\p{scx=Ugaritic}+$/u.test(matchSymbols),
	"`\\p{scx=Ugaritic}` matches all proper symbols"
);
assert(
	/^\p{scx=Ugar}+$/u.test(matchSymbols),
	"`\\p{scx=Ugar}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x01039E
	],
	ranges: [
		[0x000000, 0x01037F],
		[0x0103A0, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Ugaritic}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Ugaritic}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Ugar}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Ugar}` matches all proper symbols"
);
assert(
	/^\P{scx=Ugaritic}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Ugaritic}` matches all proper symbols"
);
assert(
	/^\P{scx=Ugar}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Ugar}` matches all proper symbols"
);
