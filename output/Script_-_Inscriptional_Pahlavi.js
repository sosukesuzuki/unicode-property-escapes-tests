// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Inscriptional_Pahlavi`
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
		[0x010B60, 0x010B72],
		[0x010B78, 0x010B7F]
	]
});
assert(
	/^\p{Script=Inscriptional_Pahlavi}+$/u.test(matchSymbols),
	"`\\p{Script=Inscriptional_Pahlavi}` matches all proper symbols"
);
assert(
	/^\p{Script=Phli}+$/u.test(matchSymbols),
	"`\\p{Script=Phli}` matches all proper symbols"
);
assert(
	/^\p{sc=Inscriptional_Pahlavi}+$/u.test(matchSymbols),
	"`\\p{sc=Inscriptional_Pahlavi}` matches all proper symbols"
);
assert(
	/^\p{sc=Phli}+$/u.test(matchSymbols),
	"`\\p{sc=Phli}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x010B5F],
		[0x010B73, 0x010B77],
		[0x010B80, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Inscriptional_Pahlavi}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Inscriptional_Pahlavi}` matches all proper symbols"
);
assert(
	/^\P{Script=Phli}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Phli}` matches all proper symbols"
);
assert(
	/^\P{sc=Inscriptional_Pahlavi}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Inscriptional_Pahlavi}` matches all proper symbols"
);
assert(
	/^\P{sc=Phli}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Phli}` matches all proper symbols"
);
