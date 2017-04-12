// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Bengali`
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
		0x0009B2,
		0x0009D7,
		0x00A8F1
	],
	ranges: [
		[0x000951, 0x000952],
		[0x000964, 0x000965],
		[0x000980, 0x000983],
		[0x000985, 0x00098C],
		[0x00098F, 0x000990],
		[0x000993, 0x0009A8],
		[0x0009AA, 0x0009B0],
		[0x0009B6, 0x0009B9],
		[0x0009BC, 0x0009C4],
		[0x0009C7, 0x0009C8],
		[0x0009CB, 0x0009CE],
		[0x0009DC, 0x0009DD],
		[0x0009DF, 0x0009E3],
		[0x0009E6, 0x0009FB]
	]
});
assert(
	/^\p{Script_Extensions=Bengali}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Bengali}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Beng}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Beng}` matches all proper symbols"
);
assert(
	/^\p{scx=Bengali}+$/u.test(matchSymbols),
	"`\\p{scx=Bengali}` matches all proper symbols"
);
assert(
	/^\p{scx=Beng}+$/u.test(matchSymbols),
	"`\\p{scx=Beng}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x000984,
		0x0009A9,
		0x0009B1,
		0x0009DE
	],
	ranges: [
		[0x000000, 0x000950],
		[0x000953, 0x000963],
		[0x000966, 0x00097F],
		[0x00098D, 0x00098E],
		[0x000991, 0x000992],
		[0x0009B3, 0x0009B5],
		[0x0009BA, 0x0009BB],
		[0x0009C5, 0x0009C6],
		[0x0009C9, 0x0009CA],
		[0x0009CF, 0x0009D6],
		[0x0009D8, 0x0009DB],
		[0x0009E4, 0x0009E5],
		[0x0009FC, 0x00A8F0],
		[0x00A8F2, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Bengali}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Bengali}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Beng}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Beng}` matches all proper symbols"
);
assert(
	/^\P{scx=Bengali}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Bengali}` matches all proper symbols"
);
assert(
	/^\P{scx=Beng}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Beng}` matches all proper symbols"
);
