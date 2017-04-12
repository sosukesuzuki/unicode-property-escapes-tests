// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Osmanya`
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
		[0x010480, 0x01049D],
		[0x0104A0, 0x0104A9]
	]
});
assert(
	/^\p{Script=Osmanya}+$/u.test(matchSymbols),
	"`\\p{Script=Osmanya}` matches all proper symbols"
);
assert(
	/^\p{Script=Osma}+$/u.test(matchSymbols),
	"`\\p{Script=Osma}` matches all proper symbols"
);
assert(
	/^\p{sc=Osmanya}+$/u.test(matchSymbols),
	"`\\p{sc=Osmanya}` matches all proper symbols"
);
assert(
	/^\p{sc=Osma}+$/u.test(matchSymbols),
	"`\\p{sc=Osma}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01047F],
		[0x01049E, 0x01049F],
		[0x0104AA, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Osmanya}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Osmanya}` matches all proper symbols"
);
assert(
	/^\P{Script=Osma}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Osma}` matches all proper symbols"
);
assert(
	/^\P{sc=Osmanya}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Osmanya}` matches all proper symbols"
);
assert(
	/^\P{sc=Osma}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Osma}` matches all proper symbols"
);
