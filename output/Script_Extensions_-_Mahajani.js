// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Mahajani`
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
		[0x000964, 0x00096F],
		[0x00A830, 0x00A839],
		[0x011150, 0x011176]
	]
});
assert(
	/^\p{Script_Extensions=Mahajani}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Mahajani}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Mahj}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Mahj}` matches all proper symbols"
);
assert(
	/^\p{scx=Mahajani}+$/u.test(matchSymbols),
	"`\\p{scx=Mahajani}` matches all proper symbols"
);
assert(
	/^\p{scx=Mahj}+$/u.test(matchSymbols),
	"`\\p{scx=Mahj}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x000963],
		[0x000970, 0x00A82F],
		[0x00A83A, 0x01114F],
		[0x011177, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Mahajani}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Mahajani}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Mahj}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Mahj}` matches all proper symbols"
);
assert(
	/^\P{scx=Mahajani}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Mahajani}` matches all proper symbols"
);
assert(
	/^\P{scx=Mahj}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Mahj}` matches all proper symbols"
);
