// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Full_Composition_Exclusion`
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
		0x000374,
		0x00037E,
		0x000387,
		0x0009DF,
		0x000A33,
		0x000A36,
		0x000A5E,
		0x000F43,
		0x000F4D,
		0x000F52,
		0x000F57,
		0x000F5C,
		0x000F69,
		0x000F73,
		0x000F78,
		0x000F81,
		0x000F93,
		0x000F9D,
		0x000FA2,
		0x000FA7,
		0x000FAC,
		0x000FB9,
		0x001F71,
		0x001F73,
		0x001F75,
		0x001F77,
		0x001F79,
		0x001F7B,
		0x001F7D,
		0x001FBB,
		0x001FBE,
		0x001FC9,
		0x001FCB,
		0x001FD3,
		0x001FDB,
		0x001FE3,
		0x001FEB,
		0x001FF9,
		0x001FFB,
		0x001FFD,
		0x002126,
		0x002ADC,
		0x00FA10,
		0x00FA12,
		0x00FA20,
		0x00FA22,
		0x00FB1D,
		0x00FB1F,
		0x00FB3E
	],
	ranges: [
		[0x000340, 0x000341],
		[0x000343, 0x000344],
		[0x000958, 0x00095F],
		[0x0009DC, 0x0009DD],
		[0x000A59, 0x000A5B],
		[0x000B5C, 0x000B5D],
		[0x000F75, 0x000F76],
		[0x001FEE, 0x001FEF],
		[0x002000, 0x002001],
		[0x00212A, 0x00212B],
		[0x002329, 0x00232A],
		[0x00F900, 0x00FA0D],
		[0x00FA15, 0x00FA1E],
		[0x00FA25, 0x00FA26],
		[0x00FA2A, 0x00FA6D],
		[0x00FA70, 0x00FAD9],
		[0x00FB2A, 0x00FB36],
		[0x00FB38, 0x00FB3C],
		[0x00FB40, 0x00FB41],
		[0x00FB43, 0x00FB44],
		[0x00FB46, 0x00FB4E],
		[0x01D15E, 0x01D164],
		[0x01D1BB, 0x01D1C0],
		[0x02F800, 0x02FA1D]
	]
});
assert(
	/^\p{Full_Composition_Exclusion}+$/u.test(matchSymbols),
	"`\\p{Full_Composition_Exclusion}` matches all proper symbols"
);
assert(
	/^\p{Comp_Ex}+$/u.test(matchSymbols),
	"`\\p{Comp_Ex}` matches all proper symbols"
);

const nonMatchSymbols = buildString({
	loneCodePoints: [
		0x000342,
		0x0009DE,
		0x000F74,
		0x000F77,
		0x001F72,
		0x001F74,
		0x001F76,
		0x001F78,
		0x001F7A,
		0x001F7C,
		0x001FCA,
		0x001FFA,
		0x001FFC,
		0x00FA11,
		0x00FA1F,
		0x00FA21,
		0x00FB1E,
		0x00FB37,
		0x00FB3D,
		0x00FB3F,
		0x00FB42,
		0x00FB45
	],
	ranges: [
		[0x000000, 0x00033F],
		[0x000345, 0x000373],
		[0x000375, 0x00037D],
		[0x00037F, 0x000386],
		[0x000388, 0x000957],
		[0x000960, 0x0009DB],
		[0x0009E0, 0x000A32],
		[0x000A34, 0x000A35],
		[0x000A37, 0x000A58],
		[0x000A5C, 0x000A5D],
		[0x000A5F, 0x000B5B],
		[0x000B5E, 0x000F42],
		[0x000F44, 0x000F4C],
		[0x000F4E, 0x000F51],
		[0x000F53, 0x000F56],
		[0x000F58, 0x000F5B],
		[0x000F5D, 0x000F68],
		[0x000F6A, 0x000F72],
		[0x000F79, 0x000F80],
		[0x000F82, 0x000F92],
		[0x000F94, 0x000F9C],
		[0x000F9E, 0x000FA1],
		[0x000FA3, 0x000FA6],
		[0x000FA8, 0x000FAB],
		[0x000FAD, 0x000FB8],
		[0x000FBA, 0x001F70],
		[0x001F7E, 0x001FBA],
		[0x001FBC, 0x001FBD],
		[0x001FBF, 0x001FC8],
		[0x001FCC, 0x001FD2],
		[0x001FD4, 0x001FDA],
		[0x001FDC, 0x001FE2],
		[0x001FE4, 0x001FEA],
		[0x001FEC, 0x001FED],
		[0x001FF0, 0x001FF8],
		[0x001FFE, 0x001FFF],
		[0x002002, 0x002125],
		[0x002127, 0x002129],
		[0x00212C, 0x002328],
		[0x00232B, 0x002ADB],
		[0x002ADD, 0x00F8FF],
		[0x00FA0E, 0x00FA0F],
		[0x00FA13, 0x00FA14],
		[0x00FA23, 0x00FA24],
		[0x00FA27, 0x00FA29],
		[0x00FA6E, 0x00FA6F],
		[0x00FADA, 0x00FB1C],
		[0x00FB20, 0x00FB29],
		[0x00FB4F, 0x01D15D],
		[0x01D165, 0x01D1BA],
		[0x01D1C1, 0x02F7FF],
		[0x02FA1E, 0x10FFFF]
	]
});
assert(
	/^\P{Full_Composition_Exclusion}+$/u.test(nonMatchSymbols),
	"`\\P{Full_Composition_Exclusion}` matches all proper symbols"
);
assert(
	/^\P{Comp_Ex}+$/u.test(nonMatchSymbols),
	"`\\P{Comp_Ex}` matches all proper symbols"
);
