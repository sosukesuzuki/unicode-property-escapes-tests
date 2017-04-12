// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Ahom`
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
		[0x011700, 0x011719],
		[0x01171D, 0x01172B],
		[0x011730, 0x01173F]
	]
});
assert(
	/^\p{Script=Ahom}+$/u.test(matchSymbols),
	"`\\p{Script=Ahom}` matches all proper symbols"
);
assert(
	/^\p{Script=Ahom}+$/u.test(matchSymbols),
	"`\\p{Script=Ahom}` matches all proper symbols"
);
assert(
	/^\p{sc=Ahom}+$/u.test(matchSymbols),
	"`\\p{sc=Ahom}` matches all proper symbols"
);
assert(
	/^\p{sc=Ahom}+$/u.test(matchSymbols),
	"`\\p{sc=Ahom}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x0116FF],
		[0x01171A, 0x01171C],
		[0x01172C, 0x01172F],
		[0x011740, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Ahom}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Ahom}` matches all proper symbols"
);
assert(
	/^\P{Script=Ahom}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Ahom}` matches all proper symbols"
);
assert(
	/^\P{sc=Ahom}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Ahom}` matches all proper symbols"
);
assert(
	/^\P{sc=Ahom}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Ahom}` matches all proper symbols"
);
