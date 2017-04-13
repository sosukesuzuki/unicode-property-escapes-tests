// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Private_Use`
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
		[0x00E000, 0x00F8FF],
		[0x0F0000, 0x0FFFFD],
		[0x100000, 0x10FFFD]
	]
});
assert(
	/^\p{General_Category=Private_Use}+$/u.test(matchSymbols),
	"`\\p{General_Category=Private_Use}` matches all proper symbols"
);
assert(
	/^\p{General_Category=Co}+$/u.test(matchSymbols),
	"`\\p{General_Category=Co}` matches all proper symbols"
);
assert(
	/^\p{gc=Private_Use}+$/u.test(matchSymbols),
	"`\\p{gc=Private_Use}` matches all proper symbols"
);
assert(
	/^\p{gc=Co}+$/u.test(matchSymbols),
	"`\\p{gc=Co}` matches all proper symbols"
);
assert(
	/^\p{Private_Use}+$/u.test(matchSymbols),
	"`\\p{Private_Use}` matches all proper symbols"
);
assert(
	/^\p{Co}+$/u.test(matchSymbols),
	"`\\p{Co}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [],
	ranges: [
		[0x000000, 0x00DFFF],
		[0x00F900, 0x0EFFFF],
		[0x0FFFFE, 0x0FFFFF],
		[0x10FFFE, 0x10FFFF]
	]
});
assert(
	/^\P{General_Category=Private_Use}+$/u.test(nonMatchSymbols),
	"`\\P{General_Category=Private_Use}` matches all proper symbols"
);
assert(
	/^\P{General_Category=Co}+$/u.test(nonMatchSymbols),
	"`\\P{General_Category=Co}` matches all proper symbols"
);
assert(
	/^\P{gc=Private_Use}+$/u.test(nonMatchSymbols),
	"`\\P{gc=Private_Use}` matches all proper symbols"
);
assert(
	/^\P{gc=Co}+$/u.test(nonMatchSymbols),
	"`\\P{gc=Co}` matches all proper symbols"
);
assert(
	/^\P{Private_Use}+$/u.test(nonMatchSymbols),
	"`\\P{Private_Use}` matches all proper symbols"
);
assert(
	/^\P{Co}+$/u.test(nonMatchSymbols),
	"`\\P{Co}` matches all proper symbols"
);
