// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Katakana`
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
	loneCodePoints: [
		0x01B000
	],
	ranges: [
		[0x0030A1, 0x0030FA],
		[0x0030FD, 0x0030FF],
		[0x0031F0, 0x0031FF],
		[0x0032D0, 0x0032FE],
		[0x003300, 0x003357],
		[0x00FF66, 0x00FF6F],
		[0x00FF71, 0x00FF9D]
	]
});
assert(
	/^\p{Script=Katakana}+$/u.test(matchSymbols),
	"`\\p{Script=Katakana}` matches all proper symbols"
);
assert(
	/^\p{Script=Kana}+$/u.test(matchSymbols),
	"`\\p{Script=Kana}` matches all proper symbols"
);
assert(
	/^\p{sc=Katakana}+$/u.test(matchSymbols),
	"`\\p{sc=Katakana}` matches all proper symbols"
);
assert(
	/^\p{sc=Kana}+$/u.test(matchSymbols),
	"`\\p{sc=Kana}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x0032FF,
		0x00FF70
	],
	ranges: [
		[0x000000, 0x0030A0],
		[0x0030FB, 0x0030FC],
		[0x003100, 0x0031EF],
		[0x003200, 0x0032CF],
		[0x003358, 0x00FF65],
		[0x00FF9E, 0x01AFFF],
		[0x01B001, 0x10FFFF]
	]
});
assert(
	/^\P{Script=Katakana}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Katakana}` matches all proper symbols"
);
assert(
	/^\P{Script=Kana}+$/u.test(nonMatchSymbols),
	"`\\P{Script=Kana}` matches all proper symbols"
);
assert(
	/^\P{sc=Katakana}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Katakana}` matches all proper symbols"
);
assert(
	/^\P{sc=Kana}+$/u.test(nonMatchSymbols),
	"`\\P{sc=Kana}` matches all proper symbols"
);
