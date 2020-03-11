// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Old_Persian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x0103A0, 0x0103C3],
    [0x0103C8, 0x0103D5]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Old_Persian}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Old_Persian}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Xpeo}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Xpeo}"
);
testPropertyEscapes(
  /^\p{scx=Old_Persian}+$/u,
  matchSymbols,
  "\\p{scx=Old_Persian}"
);
testPropertyEscapes(
  /^\p{scx=Xpeo}+$/u,
  matchSymbols,
  "\\p{scx=Xpeo}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01039F],
    [0x0103C4, 0x0103C7],
    [0x0103D6, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Old_Persian}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Old_Persian}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Xpeo}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Xpeo}"
);
testPropertyEscapes(
  /^\P{scx=Old_Persian}+$/u,
  nonMatchSymbols,
  "\\P{scx=Old_Persian}"
);
testPropertyEscapes(
  /^\P{scx=Xpeo}+$/u,
  nonMatchSymbols,
  "\\P{scx=Xpeo}"
);
