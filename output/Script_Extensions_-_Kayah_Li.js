// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Kayah_Li`
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
		[0x00A900, 0x00A92F]
	]
});
assert(
	/^\p{Script_Extensions=Kayah_Li}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Kayah_Li}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Kali}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Kali}` matches all proper symbols"
);
assert(
	/^\p{scx=Kayah_Li}+$/u.test(matchSymbols),
	"`\\p{scx=Kayah_Li}` matches all proper symbols"
);
assert(
	/^\p{scx=Kali}+$/u.test(matchSymbols),
	"`\\p{scx=Kali}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x00A8FF],
		[0x00A930, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Kayah_Li}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Kayah_Li}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Kali}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Kali}` matches all proper symbols"
);
assert(
	/^\P{scx=Kayah_Li}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Kayah_Li}` matches all proper symbols"
);
assert(
	/^\P{scx=Kali}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Kali}` matches all proper symbols"
);
