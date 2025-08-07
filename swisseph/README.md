# Swisseph WASM

Place your compiled `swisseph.wasm` and its generated `swisseph.js` loader in
this directory. The library expects an `ephe` folder here containing ephemeris
data files. A minimal `package.json` is provided so that requiring
`./swisseph/swisseph.js` resolves correctly when this package is installed.
