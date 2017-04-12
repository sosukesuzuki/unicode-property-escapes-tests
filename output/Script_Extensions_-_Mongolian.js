// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Mongolian`
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
		[0x001800, 0x00180E],
		[0x001810, 0x001819],
		[0x001820, 0x001877],
		[0x001880, 0x0018AA],
		[0x011660, 0x01166C]
	]
});
assert(
	/^\p{Script_Extensions=Mongolian}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Mongolian}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Mong}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Mong}` matches all proper symbols"
);
assert(
	/^\p{scx=Mongolian}+$/u.test(matchSymbols),
	"`\\p{scx=Mongolian}` matches all proper symbols"
);
assert(
	/^\p{scx=Mong}+$/u.test(matchSymbols),
	"`\\p{scx=Mong}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x00180F
	],
	ranges: [
		[0x000000, 0x0017FF],
		[0x00181A, 0x00181F],
		[0x001878, 0x00187F],
		[0x0018AB, 0x01165F],
		[0x01166D, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Mongolian}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Mongolian}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Mong}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Mong}` matches all proper symbols"
);
assert(
	/^\P{scx=Mongolian}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Mongolian}` matches all proper symbols"
);
assert(
	/^\P{scx=Mong}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Mong}` matches all proper symbols"
);
