// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Paragraph_Separator`
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
		0x002029
	],
	ranges: []
});
assert(
	/^\p{General_Category=Paragraph_Separator}+$/u.test(matchSymbols),
	"`\\p{General_Category=Paragraph_Separator}` matches all proper symbols"
);
assert(
	/^\p{General_Category=Zp}+$/u.test(matchSymbols),
	"`\\p{General_Category=Zp}` matches all proper symbols"
);
assert(
	/^\p{gc=Paragraph_Separator}+$/u.test(matchSymbols),
	"`\\p{gc=Paragraph_Separator}` matches all proper symbols"
);
assert(
	/^\p{gc=Zp}+$/u.test(matchSymbols),
	"`\\p{gc=Zp}` matches all proper symbols"
);
assert(
	/^\p{Paragraph_Separator}+$/u.test(matchSymbols),
	"`\\p{Paragraph_Separator}` matches all proper symbols"
);
assert(
	/^\p{Zp}+$/u.test(matchSymbols),
	"`\\p{Zp}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x002028],
		[0x00202A, 0x10FFFF]
	]
});
assert(
	/^\P{General_Category=Paragraph_Separator}+$/u.test(nonMatchSymbols),
	"`\\P{General_Category=Paragraph_Separator}` matches all proper symbols"
);
assert(
	/^\P{General_Category=Zp}+$/u.test(nonMatchSymbols),
	"`\\P{General_Category=Zp}` matches all proper symbols"
);
assert(
	/^\P{gc=Paragraph_Separator}+$/u.test(nonMatchSymbols),
	"`\\P{gc=Paragraph_Separator}` matches all proper symbols"
);
assert(
	/^\P{gc=Zp}+$/u.test(nonMatchSymbols),
	"`\\P{gc=Zp}` matches all proper symbols"
);
assert(
	/^\P{Paragraph_Separator}+$/u.test(nonMatchSymbols),
	"`\\P{Paragraph_Separator}` matches all proper symbols"
);
assert(
	/^\P{Zp}+$/u.test(nonMatchSymbols),
	"`\\P{Zp}` matches all proper symbols"
);
