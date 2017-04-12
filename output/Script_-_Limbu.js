// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Limbu`
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
	loneCodePoints: [
		0x001940
	],
	ranges: [
		[0x001900, 0x00191E],
		[0x001920, 0x00192B],
		[0x001930, 0x00193B],
		[0x001944, 0x00194F]
	]
});
assert(
	/^\p{Script=Limbu}+$/u.test(matchSymbols),
	"`\\p{Script=Limbu}` matches all proper symbols"
);
assert(
	/^\p{Script=Limb}+$/u.test(matchSymbols),
	"`\\p{Script=Limb}` matches all proper symbols"
);
assert(
	/^\p{sc=Limbu}+$/u.test(matchSymbols),
	"`\\p{sc=Limbu}` matches all proper symbols"
);
assert(
	/^\p{sc=Limb}+$/u.test(matchSymbols),
	"`\\p{sc=Limb}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x00191F
	],
	ranges: [
		[0x000000, 0x0018FF],
		[0x00192C, 0x00192F],
		[0x00193C, 0x00193F],
		[0x001941, 0x001943],
		[0x001950, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Limbu}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Limbu}` matches all proper symbols"
);
assert(
	/^\P{Script=Limb}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Limb}` matches all proper symbols"
);
assert(
	/^\P{sc=Limbu}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Limbu}` matches all proper symbols"
);
assert(
	/^\P{sc=Limb}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Limb}` matches all proper symbols"
);
