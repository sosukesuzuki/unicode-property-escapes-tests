// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Emoji_Presentation`
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
		0x0023F0,
		0x0023F3,
		0x00267F,
		0x002693,
		0x0026A1,
		0x0026CE,
		0x0026D4,
		0x0026EA,
		0x0026F5,
		0x0026FA,
		0x0026FD,
		0x002705,
		0x002728,
		0x00274C,
		0x00274E,
		0x002757,
		0x0027B0,
		0x0027BF,
		0x002B50,
		0x002B55,
		0x01F004,
		0x01F0CF,
		0x01F18E,
		0x01F201,
		0x01F21A,
		0x01F22F,
		0x01F3F4,
		0x01F440,
		0x01F57A,
		0x01F5A4,
		0x01F6CC,
		0x01F9C0
	],
	ranges: [
		[0x00231A, 0x00231B],
		[0x0023E9, 0x0023EC],
		[0x0025FD, 0x0025FE],
		[0x002614, 0x002615],
		[0x002648, 0x002653],
		[0x0026AA, 0x0026AB],
		[0x0026BD, 0x0026BE],
		[0x0026C4, 0x0026C5],
		[0x0026F2, 0x0026F3],
		[0x00270A, 0x00270B],
		[0x002753, 0x002755],
		[0x002795, 0x002797],
		[0x002B1B, 0x002B1C],
		[0x01F191, 0x01F19A],
		[0x01F1E6, 0x01F1FF],
		[0x01F232, 0x01F236],
		[0x01F238, 0x01F23A],
		[0x01F250, 0x01F251],
		[0x01F300, 0x01F320],
		[0x01F32D, 0x01F335],
		[0x01F337, 0x01F37C],
		[0x01F37E, 0x01F393],
		[0x01F3A0, 0x01F3CA],
		[0x01F3CF, 0x01F3D3],
		[0x01F3E0, 0x01F3F0],
		[0x01F3F8, 0x01F43E],
		[0x01F442, 0x01F4FC],
		[0x01F4FF, 0x01F53D],
		[0x01F54B, 0x01F54E],
		[0x01F550, 0x01F567],
		[0x01F595, 0x01F596],
		[0x01F5FB, 0x01F64F],
		[0x01F680, 0x01F6C5],
		[0x01F6D0, 0x01F6D2],
		[0x01F6EB, 0x01F6EC],
		[0x01F6F4, 0x01F6F8],
		[0x01F910, 0x01F93A],
		[0x01F93C, 0x01F93E],
		[0x01F940, 0x01F945],
		[0x01F947, 0x01F94C],
		[0x01F950, 0x01F96B],
		[0x01F980, 0x01F997],
		[0x01F9D0, 0x01F9E6]
	]
});
assert(
	/^\p{Emoji_Presentation}+$/u.test(matchSymbols),
	"`\\p{Emoji_Presentation}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x0026F4,
		0x00274D,
		0x002756,
		0x01F200,
		0x01F237,
		0x01F336,
		0x01F37D,
		0x01F43F,
		0x01F441,
		0x01F54F,
		0x01F93B,
		0x01F93F,
		0x01F946
	],
	ranges: [
		[0x000000, 0x002319],
		[0x00231C, 0x0023E8],
		[0x0023ED, 0x0023EF],
		[0x0023F1, 0x0023F2],
		[0x0023F4, 0x0025FC],
		[0x0025FF, 0x002613],
		[0x002616, 0x002647],
		[0x002654, 0x00267E],
		[0x002680, 0x002692],
		[0x002694, 0x0026A0],
		[0x0026A2, 0x0026A9],
		[0x0026AC, 0x0026BC],
		[0x0026BF, 0x0026C3],
		[0x0026C6, 0x0026CD],
		[0x0026CF, 0x0026D3],
		[0x0026D5, 0x0026E9],
		[0x0026EB, 0x0026F1],
		[0x0026F6, 0x0026F9],
		[0x0026FB, 0x0026FC],
		[0x0026FE, 0x002704],
		[0x002706, 0x002709],
		[0x00270C, 0x002727],
		[0x002729, 0x00274B],
		[0x00274F, 0x002752],
		[0x002758, 0x002794],
		[0x002798, 0x0027AF],
		[0x0027B1, 0x0027BE],
		[0x0027C0, 0x002B1A],
		[0x002B1D, 0x002B4F],
		[0x002B51, 0x002B54],
		[0x002B56, 0x01F003],
		[0x01F005, 0x01F0CE],
		[0x01F0D0, 0x01F18D],
		[0x01F18F, 0x01F190],
		[0x01F19B, 0x01F1E5],
		[0x01F202, 0x01F219],
		[0x01F21B, 0x01F22E],
		[0x01F230, 0x01F231],
		[0x01F23B, 0x01F24F],
		[0x01F252, 0x01F2FF],
		[0x01F321, 0x01F32C],
		[0x01F394, 0x01F39F],
		[0x01F3CB, 0x01F3CE],
		[0x01F3D4, 0x01F3DF],
		[0x01F3F1, 0x01F3F3],
		[0x01F3F5, 0x01F3F7],
		[0x01F4FD, 0x01F4FE],
		[0x01F53E, 0x01F54A],
		[0x01F568, 0x01F579],
		[0x01F57B, 0x01F594],
		[0x01F597, 0x01F5A3],
		[0x01F5A5, 0x01F5FA],
		[0x01F650, 0x01F67F],
		[0x01F6C6, 0x01F6CB],
		[0x01F6CD, 0x01F6CF],
		[0x01F6D3, 0x01F6EA],
		[0x01F6ED, 0x01F6F3],
		[0x01F6F9, 0x01F90F],
		[0x01F94D, 0x01F94F],
		[0x01F96C, 0x01F97F],
		[0x01F998, 0x01F9BF],
		[0x01F9C1, 0x01F9CF],
		[0x01F9E7, 0x10FFFF]
	]
});
assert(
	/^\P{Emoji_Presentation}+$/u.test(nonMatchSymbols),
	"`\\P{Emoji_Presentation}` matches all proper symbols"
);
