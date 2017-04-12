// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tagbanwa`
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
		[0x001760, 0x00176C],
		[0x00176E, 0x001770],
		[0x001772, 0x001773]
	]
});
assert(
	/^\p{Script=Tagbanwa}+$/u.test(matchSymbols),
	"`\\p{Script=Tagbanwa}` matches all proper symbols"
);
assert(
	/^\p{Script=Tagb}+$/u.test(matchSymbols),
	"`\\p{Script=Tagb}` matches all proper symbols"
);
assert(
	/^\p{sc=Tagbanwa}+$/u.test(matchSymbols),
	"`\\p{sc=Tagbanwa}` matches all proper symbols"
);
assert(
	/^\p{sc=Tagb}+$/u.test(matchSymbols),
	"`\\p{sc=Tagb}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x00176D,
		0x001771
	],
	ranges: [
		[0x000000, 0x00175F],
		[0x001774, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Tagbanwa}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Tagbanwa}` matches all proper symbols"
);
assert(
	/^\P{Script=Tagb}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Tagb}` matches all proper symbols"
);
assert(
	/^\P{sc=Tagbanwa}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Tagbanwa}` matches all proper symbols"
);
assert(
	/^\P{sc=Tagb}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Tagb}` matches all proper symbols"
);
