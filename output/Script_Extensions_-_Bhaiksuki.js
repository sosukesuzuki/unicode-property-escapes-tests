// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Bhaiksuki`
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
	loneCodePoints: [],
	ranges: [
		[0x011C00, 0x011C08],
		[0x011C0A, 0x011C36],
		[0x011C38, 0x011C45],
		[0x011C50, 0x011C6C]
	]
});
assert(
	/^\p{Script_Extensions=Bhaiksuki}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Bhaiksuki}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Bhks}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Bhks}` matches all proper symbols"
);
assert(
	/^\p{scx=Bhaiksuki}+$/u.test(matchSymbols),
	"`\\p{scx=Bhaiksuki}` matches all proper symbols"
);
assert(
	/^\p{scx=Bhks}+$/u.test(matchSymbols),
	"`\\p{scx=Bhks}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x011C09,
		0x011C37
	],
	ranges: [
		[0x000000, 0x011BFF],
		[0x011C46, 0x011C4F],
		[0x011C6D, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Bhaiksuki}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Bhaiksuki}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Bhks}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Bhks}` matches all proper symbols"
);
assert(
	/^\P{scx=Bhaiksuki}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Bhaiksuki}` matches all proper symbols"
);
assert(
	/^\P{scx=Bhks}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Bhks}` matches all proper symbols"
);
