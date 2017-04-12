// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Lepcha`
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
		[0x001C00, 0x001C37],
		[0x001C3B, 0x001C49],
		[0x001C4D, 0x001C4F]
	]
});
assert(
	/^\p{Script_Extensions=Lepcha}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Lepcha}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Lepc}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Lepc}` matches all proper symbols"
);
assert(
	/^\p{scx=Lepcha}+$/u.test(matchSymbols),
	"`\\p{scx=Lepcha}` matches all proper symbols"
);
assert(
	/^\p{scx=Lepc}+$/u.test(matchSymbols),
	"`\\p{scx=Lepc}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x001BFF],
		[0x001C38, 0x001C3A],
		[0x001C4A, 0x001C4C],
		[0x001C50, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Lepcha}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Lepcha}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Lepc}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Lepc}` matches all proper symbols"
);
assert(
	/^\P{scx=Lepcha}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Lepcha}` matches all proper symbols"
);
assert(
	/^\P{scx=Lepc}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Lepc}` matches all proper symbols"
);
