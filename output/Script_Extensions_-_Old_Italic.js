// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Old_Italic`
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
		[0x010300, 0x010323]
	]
});
assert(
	/^\p{Script_Extensions=Old_Italic}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Old_Italic}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Ital}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Ital}` matches all proper symbols"
);
assert(
	/^\p{scx=Old_Italic}+$/u.test(matchSymbols),
	"`\\p{scx=Old_Italic}` matches all proper symbols"
);
assert(
	/^\p{scx=Ital}+$/u.test(matchSymbols),
	"`\\p{scx=Ital}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x0102FF],
		[0x010324, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Old_Italic}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Old_Italic}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Ital}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Ital}` matches all proper symbols"
);
assert(
	/^\P{scx=Old_Italic}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Old_Italic}` matches all proper symbols"
);
assert(
	/^\P{scx=Ital}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Ital}` matches all proper symbols"
);
