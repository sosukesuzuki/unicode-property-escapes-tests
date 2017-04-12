// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Balinese`
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
		[0x001B00, 0x001B4B],
		[0x001B50, 0x001B7C]
	]
});
assert(
	/^\p{Script=Balinese}+$/u.test(matchSymbols),
	"`\\p{Script=Balinese}` matches all proper symbols"
);
assert(
	/^\p{Script=Bali}+$/u.test(matchSymbols),
	"`\\p{Script=Bali}` matches all proper symbols"
);
assert(
	/^\p{sc=Balinese}+$/u.test(matchSymbols),
	"`\\p{sc=Balinese}` matches all proper symbols"
);
assert(
	/^\p{sc=Bali}+$/u.test(matchSymbols),
	"`\\p{sc=Bali}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x001AFF],
		[0x001B4C, 0x001B4F],
		[0x001B7D, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Balinese}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Balinese}` matches all proper symbols"
);
assert(
	/^\P{Script=Bali}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Bali}` matches all proper symbols"
);
assert(
	/^\P{sc=Balinese}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Balinese}` matches all proper symbols"
);
assert(
	/^\P{sc=Bali}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Bali}` matches all proper symbols"
);
