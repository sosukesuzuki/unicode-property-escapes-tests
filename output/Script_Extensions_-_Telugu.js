// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Telugu`
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
		0x001CDA
	],
	ranges: [
		[0x000951, 0x000952],
		[0x000964, 0x000965],
		[0x000C00, 0x000C03],
		[0x000C05, 0x000C0C],
		[0x000C0E, 0x000C10],
		[0x000C12, 0x000C28],
		[0x000C2A, 0x000C39],
		[0x000C3D, 0x000C44],
		[0x000C46, 0x000C48],
		[0x000C4A, 0x000C4D],
		[0x000C55, 0x000C56],
		[0x000C58, 0x000C5A],
		[0x000C60, 0x000C63],
		[0x000C66, 0x000C6F],
		[0x000C78, 0x000C7F]
	]
});
assert(
	/^\p{Script_Extensions=Telugu}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Telugu}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Telu}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Telu}` matches all proper symbols"
);
assert(
	/^\p{scx=Telugu}+$/u.test(matchSymbols),
	"`\\p{scx=Telugu}` matches all proper symbols"
);
assert(
	/^\p{scx=Telu}+$/u.test(matchSymbols),
	"`\\p{scx=Telu}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x000C04,
		0x000C0D,
		0x000C11,
		0x000C29,
		0x000C45,
		0x000C49,
		0x000C57
	],
	ranges: [
		[0x000000, 0x000950],
		[0x000953, 0x000963],
		[0x000966, 0x000BFF],
		[0x000C3A, 0x000C3C],
		[0x000C4E, 0x000C54],
		[0x000C5B, 0x000C5F],
		[0x000C64, 0x000C65],
		[0x000C70, 0x000C77],
		[0x000C80, 0x001CD9],
		[0x001CDB, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Telugu}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Telugu}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Telu}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Telu}` matches all proper symbols"
);
assert(
	/^\P{scx=Telugu}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Telugu}` matches all proper symbols"
);
assert(
	/^\P{scx=Telu}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Telu}` matches all proper symbols"
);
