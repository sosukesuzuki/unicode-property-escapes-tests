// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=New_Tai_Lue`
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
		[0x001980, 0x0019AB],
		[0x0019B0, 0x0019C9],
		[0x0019D0, 0x0019DA],
		[0x0019DE, 0x0019DF]
	]
});
assert(
	/^\p{Script=New_Tai_Lue}+$/u.test(matchSymbols),
	"`\\p{Script=New_Tai_Lue}` matches all proper symbols"
);
assert(
	/^\p{Script=Talu}+$/u.test(matchSymbols),
	"`\\p{Script=Talu}` matches all proper symbols"
);
assert(
	/^\p{sc=New_Tai_Lue}+$/u.test(matchSymbols),
	"`\\p{sc=New_Tai_Lue}` matches all proper symbols"
);
assert(
	/^\p{sc=Talu}+$/u.test(matchSymbols),
	"`\\p{sc=Talu}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x00197F],
		[0x0019AC, 0x0019AF],
		[0x0019CA, 0x0019CF],
		[0x0019DB, 0x0019DD],
		[0x0019E0, 0x10FFFF]
	]
});
assert(
	/^\P{Script=New_Tai_Lue}+$/u.test(nonMatchSymbols),
	"`\\P{Script=New_Tai_Lue}` matches all proper symbols"
);
assert(
	/^\P{Script=Talu}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Talu}` matches all proper symbols"
);
assert(
	/^\P{sc=New_Tai_Lue}+$/u.test(nonMatchSymbols),
	"`\\P{sc=New_Tai_Lue}` matches all proper symbols"
);
assert(
	/^\P{sc=Talu}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Talu}` matches all proper symbols"
);
