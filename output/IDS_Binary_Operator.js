// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `IDS_Binary_Operator`
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
		[0x002FF0, 0x002FF1],
		[0x002FF4, 0x002FFB]
	]
});
assert(
	/^\p{IDS_Binary_Operator}+$/u.test(matchSymbols),
	"`\\p{IDS_Binary_Operator}` matches all proper symbols"
);
assert(
	/^\p{IDSB}+$/u.test(matchSymbols),
	"`\\p{IDSB}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x002FEF],
		[0x002FF2, 0x002FF3],
		[0x002FFC, 0x10FFFF]
	]
});
assert(
	/^\P{IDS_Binary_Operator}+$/u.test(nonMatchSymbols),
	"`\\P{IDS_Binary_Operator}` matches all proper symbols"
);
assert(
	/^\P{IDSB}+$/u.test(nonMatchSymbols),
	"`\\P{IDSB}` matches all proper symbols"
);
