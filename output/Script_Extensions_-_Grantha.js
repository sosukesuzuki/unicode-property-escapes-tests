// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Grantha`
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
		0x000BAA,
		0x000BB5,
		0x001CD0,
		0x0020F0,
		0x011350,
		0x011357
	],
	ranges: [
		[0x000951, 0x000952],
		[0x000964, 0x000965],
		[0x000BE6, 0x000BF2],
		[0x001CD2, 0x001CD3],
		[0x001CF2, 0x001CF4],
		[0x001CF8, 0x001CF9],
		[0x011300, 0x011303],
		[0x011305, 0x01130C],
		[0x01130F, 0x011310],
		[0x011313, 0x011328],
		[0x01132A, 0x011330],
		[0x011332, 0x011333],
		[0x011335, 0x011339],
		[0x01133C, 0x011344],
		[0x011347, 0x011348],
		[0x01134B, 0x01134D],
		[0x01135D, 0x011363],
		[0x011366, 0x01136C],
		[0x011370, 0x011374]
	]
});
assert(
	/^\p{Script_Extensions=Grantha}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Grantha}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Gran}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Gran}` matches all proper symbols"
);
assert(
	/^\p{scx=Grantha}+$/u.test(matchSymbols),
	"`\\p{scx=Grantha}` matches all proper symbols"
);
assert(
	/^\p{scx=Gran}+$/u.test(matchSymbols),
	"`\\p{scx=Gran}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x001CD1,
		0x011304,
		0x011329,
		0x011331,
		0x011334
	],
	ranges: [
		[0x000000, 0x000950],
		[0x000953, 0x000963],
		[0x000966, 0x000BA9],
		[0x000BAB, 0x000BB4],
		[0x000BB6, 0x000BE5],
		[0x000BF3, 0x001CCF],
		[0x001CD4, 0x001CF1],
		[0x001CF5, 0x001CF7],
		[0x001CFA, 0x0020EF],
		[0x0020F1, 0x0112FF],
		[0x01130D, 0x01130E],
		[0x011311, 0x011312],
		[0x01133A, 0x01133B],
		[0x011345, 0x011346],
		[0x011349, 0x01134A],
		[0x01134E, 0x01134F],
		[0x011351, 0x011356],
		[0x011358, 0x01135C],
		[0x011364, 0x011365],
		[0x01136D, 0x01136F],
		[0x011375, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Grantha}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Grantha}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Gran}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Gran}` matches all proper symbols"
);
assert(
	/^\P{scx=Grantha}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Grantha}` matches all proper symbols"
);
assert(
	/^\P{scx=Gran}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Gran}` matches all proper symbols"
);
