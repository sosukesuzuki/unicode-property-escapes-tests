// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Sharada`
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
		[0x011180, 0x0111CD],
		[0x0111D0, 0x0111DF]
	]
});
assert(
	/^\p{Script=Sharada}+$/u.test(matchSymbols),
	"`\\p{Script=Sharada}` matches all proper symbols"
);
assert(
	/^\p{Script=Shrd}+$/u.test(matchSymbols),
	"`\\p{Script=Shrd}` matches all proper symbols"
);
assert(
	/^\p{sc=Sharada}+$/u.test(matchSymbols),
	"`\\p{sc=Sharada}` matches all proper symbols"
);
assert(
	/^\p{sc=Shrd}+$/u.test(matchSymbols),
	"`\\p{sc=Shrd}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01117F],
		[0x0111CE, 0x0111CF],
		[0x0111E0, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Sharada}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Sharada}` matches all proper symbols"
);
assert(
	/^\P{Script=Shrd}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Shrd}` matches all proper symbols"
);
assert(
	/^\P{sc=Sharada}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Sharada}` matches all proper symbols"
);
assert(
	/^\P{sc=Shrd}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Shrd}` matches all proper symbols"
);
