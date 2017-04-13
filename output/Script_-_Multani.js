// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Multani`
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
	loneCodePoints: [
		0x011288
	],
	ranges: [
		[0x011280, 0x011286],
		[0x01128A, 0x01128D],
		[0x01128F, 0x01129D],
		[0x01129F, 0x0112A9]
	]
});
assert(
	/^\p{Script=Multani}+$/u.test(matchSymbols),
	"`\\p{Script=Multani}` matches all proper symbols"
);
assert(
	/^\p{Script=Mult}+$/u.test(matchSymbols),
	"`\\p{Script=Mult}` matches all proper symbols"
);
assert(
	/^\p{sc=Multani}+$/u.test(matchSymbols),
	"`\\p{sc=Multani}` matches all proper symbols"
);
assert(
	/^\p{sc=Mult}+$/u.test(matchSymbols),
	"`\\p{sc=Mult}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x011287,
		0x011289,
		0x01128E,
		0x01129E
	],
	ranges: [
		[0x000000, 0x01127F],
		[0x0112AA, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Multani}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Multani}` matches all proper symbols"
);
assert(
	/^\P{Script=Mult}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Mult}` matches all proper symbols"
);
assert(
	/^\P{sc=Multani}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Multani}` matches all proper symbols"
);
assert(
	/^\P{sc=Mult}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Mult}` matches all proper symbols"
);
