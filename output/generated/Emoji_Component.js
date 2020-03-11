// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Emoji_Component`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000023,
    0x00002A,
    0x00200D,
    0x0020E3,
    0x00FE0F
  ],
  ranges: [
    [0x000030, 0x000039],
    [0x01F1E6, 0x01F1FF],
    [0x01F3FB, 0x01F3FF],
    [0x01F9B0, 0x01F9B3],
    [0x0E0020, 0x0E007F]
  ]
});
testPropertyEscapes(
  /^\p{Emoji_Component}+$/u,
  matchSymbols,
  "\\p{Emoji_Component}"
);
testPropertyEscapes(
  /^\p{EComp}+$/u,
  matchSymbols,
  "\\p{EComp}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000022],
    [0x000024, 0x000029],
    [0x00002B, 0x00002F],
    [0x00003A, 0x00200C],
    [0x00200E, 0x0020E2],
    [0x0020E4, 0x00DBFF],
    [0x00E000, 0x00FE0E],
    [0x00FE10, 0x01F1E5],
    [0x01F200, 0x01F3FA],
    [0x01F400, 0x01F9AF],
    [0x01F9B4, 0x0E001F],
    [0x0E0080, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Emoji_Component}+$/u,
  nonMatchSymbols,
  "\\P{Emoji_Component}"
);
testPropertyEscapes(
  /^\P{EComp}+$/u,
  nonMatchSymbols,
  "\\P{EComp}"
);
