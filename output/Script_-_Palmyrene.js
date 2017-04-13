// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Palmyrene`
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
		[0x010860, 0x01087F]
	]
});
assert(
	/^\p{Script=Palmyrene}+$/u.test(matchSymbols),
	"`\\p{Script=Palmyrene}` matches all proper symbols"
);
assert(
	/^\p{Script=Palm}+$/u.test(matchSymbols),
	"`\\p{Script=Palm}` matches all proper symbols"
);
assert(
	/^\p{sc=Palmyrene}+$/u.test(matchSymbols),
	"`\\p{sc=Palmyrene}` matches all proper symbols"
);
assert(
	/^\p{sc=Palm}+$/u.test(matchSymbols),
	"`\\p{sc=Palm}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x01085F],
		[0x010880, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Palmyrene}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Palmyrene}` matches all proper symbols"
);
assert(
	/^\P{Script=Palm}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Palm}` matches all proper symbols"
);
assert(
	/^\P{sc=Palmyrene}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Palmyrene}` matches all proper symbols"
);
assert(
	/^\P{sc=Palm}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Palm}` matches all proper symbols"
);
