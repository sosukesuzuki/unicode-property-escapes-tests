// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Kaithi`
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
		[0x000966, 0x00096F],
		[0x00A830, 0x00A839],
		[0x011080, 0x0110C1]
	]
});
assert(
	/^\p{Script_Extensions=Kaithi}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Kaithi}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Kthi}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Kthi}` matches all proper symbols"
);
assert(
	/^\p{scx=Kaithi}+$/u.test(matchSymbols),
	"`\\p{scx=Kaithi}` matches all proper symbols"
);
assert(
	/^\p{scx=Kthi}+$/u.test(matchSymbols),
	"`\\p{scx=Kthi}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x000965],
		[0x000970, 0x00A82F],
		[0x00A83A, 0x01107F],
		[0x0110C2, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Kaithi}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Kaithi}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Kthi}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Kthi}` matches all proper symbols"
);
assert(
	/^\P{scx=Kaithi}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Kaithi}` matches all proper symbols"
);
assert(
	/^\P{scx=Kthi}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Kthi}` matches all proper symbols"
);
