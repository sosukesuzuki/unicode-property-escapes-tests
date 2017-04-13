// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Buhid`
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
		[0x001740, 0x001753]
	]
});
assert(
	/^\p{Script=Buhid}+$/u.test(matchSymbols),
	"`\\p{Script=Buhid}` matches all proper symbols"
);
assert(
	/^\p{Script=Buhd}+$/u.test(matchSymbols),
	"`\\p{Script=Buhd}` matches all proper symbols"
);
assert(
	/^\p{sc=Buhid}+$/u.test(matchSymbols),
	"`\\p{sc=Buhid}` matches all proper symbols"
);
assert(
	/^\p{sc=Buhd}+$/u.test(matchSymbols),
	"`\\p{sc=Buhd}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x00173F],
		[0x001754, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Buhid}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Buhid}` matches all proper symbols"
);
assert(
	/^\P{Script=Buhd}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Buhd}` matches all proper symbols"
);
assert(
	/^\P{sc=Buhid}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Buhid}` matches all proper symbols"
);
assert(
	/^\P{sc=Buhd}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Buhd}` matches all proper symbols"
);
