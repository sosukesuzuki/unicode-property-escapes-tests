// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Cyrillic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x001D2B,
    0x001D78,
    0x001DF8,
    0x002E43
  ],
  ranges: [
    [0x000400, 0x00052F],
    [0x001C80, 0x001C88],
    [0x002DE0, 0x002DFF],
    [0x00A640, 0x00A69F],
    [0x00FE2E, 0x00FE2F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Cyrillic}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Cyrillic}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Cyrl}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Cyrl}"
);
testPropertyEscapes(
  /^\p{scx=Cyrillic}+$/u,
  matchSymbols,
  "\\p{scx=Cyrillic}"
);
testPropertyEscapes(
  /^\p{scx=Cyrl}+$/u,
  matchSymbols,
  "\\p{scx=Cyrl}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0003FF],
    [0x000530, 0x001C7F],
    [0x001C89, 0x001D2A],
    [0x001D2C, 0x001D77],
    [0x001D79, 0x001DF7],
    [0x001DF9, 0x002DDF],
    [0x002E00, 0x002E42],
    [0x002E44, 0x00A63F],
    [0x00A6A0, 0x00DBFF],
    [0x00E000, 0x00FE2D],
    [0x00FE30, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Cyrillic}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Cyrillic}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Cyrl}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Cyrl}"
);
testPropertyEscapes(
  /^\P{scx=Cyrillic}+$/u,
  nonMatchSymbols,
  "\\P{scx=Cyrillic}"
);
testPropertyEscapes(
  /^\P{scx=Cyrl}+$/u,
  nonMatchSymbols,
  "\\P{scx=Cyrl}"
);
