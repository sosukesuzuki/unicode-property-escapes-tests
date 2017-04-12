// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Inscriptional_Parthian`
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
		[0x010B40, 0x010B55],
		[0x010B58, 0x010B5F]
	]
});
assert(
	/^\p{Script_Extensions=Inscriptional_Parthian}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Inscriptional_Parthian}` matches all proper symbols"
);
assert(
	/^\p{Script_Extensions=Prti}+$/u.test(matchSymbols),
	"`\\p{Script_Extensions=Prti}` matches all proper symbols"
);
assert(
	/^\p{scx=Inscriptional_Parthian}+$/u.test(matchSymbols),
	"`\\p{scx=Inscriptional_Parthian}` matches all proper symbols"
);
assert(
	/^\p{scx=Prti}+$/u.test(matchSymbols),
	"`\\p{scx=Prti}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x010B3F],
		[0x010B56, 0x010B57],
		[0x010B60, 0x10FFFF]
	]
});
assert(
	/^\P{Script_Extensions=Inscriptional_Parthian}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Inscriptional_Parthian}` matches all proper symbols"
);
assert(
	/^\P{Script_Extensions=Prti}+$/u.test(nonMatchSymbols),
	"`\\P{Script_Extensions=Prti}` matches all proper symbols"
);
assert(
	/^\P{scx=Inscriptional_Parthian}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Inscriptional_Parthian}` matches all proper symbols"
);
assert(
	/^\P{scx=Prti}+$/u.test(nonMatchSymbols),
	"`\\P{scx=Prti}` matches all proper symbols"
);
