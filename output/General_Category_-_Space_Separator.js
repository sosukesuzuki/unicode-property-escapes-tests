// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Space_Separator`
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
		0x000020,
		0x0000A0,
		0x001680,
		0x00202F,
		0x00205F,
		0x003000
	],
	ranges: [
		[0x002000, 0x00200A]
	]
});
assert(
	/^\p{General_Category=Space_Separator}+$/u.test(matchSymbols),
	"`\\p{General_Category=Space_Separator}` matches all proper symbols"
);
assert(
	/^\p{General_Category=Zs}+$/u.test(matchSymbols),
	"`\\p{General_Category=Zs}` matches all proper symbols"
);
assert(
	/^\p{gc=Space_Separator}+$/u.test(matchSymbols),
	"`\\p{gc=Space_Separator}` matches all proper symbols"
);
assert(
	/^\p{gc=Zs}+$/u.test(matchSymbols),
	"`\\p{gc=Zs}` matches all proper symbols"
);
assert(
	/^\p{Space_Separator}+$/u.test(matchSymbols),
	"`\\p{Space_Separator}` matches all proper symbols"
);
assert(
	/^\p{Zs}+$/u.test(matchSymbols),
	"`\\p{Zs}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x00001F],
		[0x000021, 0x00009F],
		[0x0000A1, 0x00167F],
		[0x001681, 0x001FFF],
		[0x00200B, 0x00202E],
		[0x002030, 0x00205E],
		[0x002060, 0x002FFF],
		[0x003001, 0x10FFFF]
	]
});
assert(
	/^\P{General_Category=Space_Separator}+$/u.test(nonMatchSymbols),
	"`\\P{General_Category=Space_Separator}` matches all proper symbols"
);
assert(
	/^\P{General_Category=Zs}+$/u.test(nonMatchSymbols),
	"`\\P{General_Category=Zs}` matches all proper symbols"
);
assert(
	/^\P{gc=Space_Separator}+$/u.test(nonMatchSymbols),
	"`\\P{gc=Space_Separator}` matches all proper symbols"
);
assert(
	/^\P{gc=Zs}+$/u.test(nonMatchSymbols),
	"`\\P{gc=Zs}` matches all proper symbols"
);
assert(
	/^\P{Space_Separator}+$/u.test(nonMatchSymbols),
	"`\\P{Space_Separator}` matches all proper symbols"
);
assert(
	/^\P{Zs}+$/u.test(nonMatchSymbols),
	"`\\P{Zs}` matches all proper symbols"
);
