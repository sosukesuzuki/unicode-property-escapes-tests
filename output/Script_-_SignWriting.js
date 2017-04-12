// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=SignWriting`
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
		[0x01D800, 0x01DA8B],
		[0x01DA9B, 0x01DA9F],
		[0x01DAA1, 0x01DAAF]
	]
});
assert(
	/^\p{Script=SignWriting}+$/u.test(matchSymbols),
	"`\\p{Script=SignWriting}` matches all proper symbols"
);
assert(
	/^\p{Script=Sgnw}+$/u.test(matchSymbols),
	"`\\p{Script=Sgnw}` matches all proper symbols"
);
assert(
	/^\p{sc=SignWriting}+$/u.test(matchSymbols),
	"`\\p{sc=SignWriting}` matches all proper symbols"
);
assert(
	/^\p{sc=Sgnw}+$/u.test(matchSymbols),
	"`\\p{sc=Sgnw}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x01DAA0
	],
	ranges: [
		[0x000000, 0x01D7FF],
		[0x01DA8C, 0x01DA9A],
		[0x01DAB0, 0x10FFFF]
	]
});
assert(
	/^\P{Script=SignWriting}+$/u.test(nonMatchSymbols),
	"`\\P{Script=SignWriting}` matches all proper symbols"
);
assert(
	/^\P{Script=Sgnw}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Sgnw}` matches all proper symbols"
);
assert(
	/^\P{sc=SignWriting}+$/u.test(nonMatchSymbols),
	"`\\P{sc=SignWriting}` matches all proper symbols"
);
assert(
	/^\P{sc=Sgnw}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Sgnw}` matches all proper symbols"
);
