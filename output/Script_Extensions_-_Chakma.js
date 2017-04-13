// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Chakma`
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
		[0x0009E6, 0x0009EF],
		[0x001040, 0x001049],
		[0x011100, 0x011134],
		[0x011136, 0x011143]
	]
});
assert(
	/^\p{Script_Extensions=Chakma}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Chakma}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Cakm}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Cakm}` matches all proper symbols"
);
assert(
	/^\p{scx=Chakma}+$/u.test(matchSymbols),
	"`\\p{scx=Chakma}` matches all proper symbols"
);
assert(
	/^\p{scx=Cakm}+$/u.test(matchSymbols),
	"`\\p{scx=Cakm}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x011135
	],
	ranges: [
		[0x000000, 0x0009E5],
		[0x0009F0, 0x00103F],
		[0x00104A, 0x0110FF],
		[0x011144, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Chakma}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Chakma}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Cakm}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Cakm}` matches all proper symbols"
);
assert(
	/^\P{scx=Chakma}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Chakma}` matches all proper symbols"
);
assert(
	/^\P{scx=Cakm}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Cakm}` matches all proper symbols"
);
