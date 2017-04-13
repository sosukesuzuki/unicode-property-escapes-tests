// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Kaithi`
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
		[0x011080, 0x0110C1]
	]
});
assert(
	/^\p{Script=Kaithi}+$/u.test(matchSymbols),
	"`\\p{Script=Kaithi}` matches all proper symbols"
);
assert(
	/^\p{Script=Kthi}+$/u.test(matchSymbols),
	"`\\p{Script=Kthi}` matches all proper symbols"
);
assert(
	/^\p{sc=Kaithi}+$/u.test(matchSymbols),
	"`\\p{sc=Kaithi}` matches all proper symbols"
);
assert(
	/^\p{sc=Kthi}+$/u.test(matchSymbols),
	"`\\p{sc=Kthi}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01107F],
		[0x0110C2, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Kaithi}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Kaithi}` matches all proper symbols"
);
assert(
	/^\P{Script=Kthi}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Kthi}` matches all proper symbols"
);
assert(
	/^\P{sc=Kaithi}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Kaithi}` matches all proper symbols"
);
assert(
	/^\P{sc=Kthi}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Kthi}` matches all proper symbols"
);
