// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Egyptian_Hieroglyphs`
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
		[0x013000, 0x01342E]
	]
});
assert(
	/^\p{Script=Egyptian_Hieroglyphs}+$/u.test(matchSymbols),
	"`\\p{Script=Egyptian_Hieroglyphs}` matches all proper symbols"
);
assert(
	/^\p{Script=Egyp}+$/u.test(matchSymbols),
	"`\\p{Script=Egyp}` matches all proper symbols"
);
assert(
	/^\p{sc=Egyptian_Hieroglyphs}+$/u.test(matchSymbols),
	"`\\p{sc=Egyptian_Hieroglyphs}` matches all proper symbols"
);
assert(
	/^\p{sc=Egyp}+$/u.test(matchSymbols),
	"`\\p{sc=Egyp}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x012FFF],
		[0x01342F, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Egyptian_Hieroglyphs}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Egyptian_Hieroglyphs}` matches all proper symbols"
);
assert(
	/^\P{Script=Egyp}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Egyp}` matches all proper symbols"
);
assert(
	/^\P{sc=Egyptian_Hieroglyphs}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Egyptian_Hieroglyphs}` matches all proper symbols"
);
assert(
	/^\P{sc=Egyp}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Egyp}` matches all proper symbols"
);
