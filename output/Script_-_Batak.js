// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Batak`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
---*/

const buildString = ({ loneCodePoints, ranges }) => {
	const CHUNK_SIZE = 10000;
	let result = String.fromCodePoint(...loneCodePoints);
	for (const [start, end] of ranges) {
		const codePoints = [];
		for (let length = 0, codePoint = start; codePoint <= end; codePoint++) {
			codePoints[length++] = codePoint;
			if (length === CHUNK_SIZE) {
				result += String.fromCodePoint(...codePoints);
				codePoints.length = length = 0;
			}
		}
		result += String.fromCodePoint(...codePoints);
	}
	return result;
};

const matchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x001BC0, 0x001BF3],
		[0x001BFC, 0x001BFF]
	]
});
assert(
	/^\p{Script=Batak}+$/u.test(matchSymbols),
	"`\\p{Script=Batak}` matches all proper symbols"
);
assert(
	/^\p{Script=Batk}+$/u.test(matchSymbols),
	"`\\p{Script=Batk}` matches all proper symbols"
);
assert(
	/^\p{sc=Batak}+$/u.test(matchSymbols),
	"`\\p{sc=Batak}` matches all proper symbols"
);
assert(
	/^\p{sc=Batk}+$/u.test(matchSymbols),
	"`\\p{sc=Batk}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x001BBF],
		[0x001BF4, 0x001BFB],
		[0x001C00, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Batak}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Batak}` matches all proper symbols"
);
assert(
	/^\P{Script=Batk}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Batk}` matches all proper symbols"
);
assert(
	/^\P{sc=Batak}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Batak}` matches all proper symbols"
);
assert(
	/^\P{sc=Batk}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Batk}` matches all proper symbols"
);
