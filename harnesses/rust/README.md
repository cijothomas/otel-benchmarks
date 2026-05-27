# Rust harness for Scenario S1

Measures `Counter::add` against the
[`opentelemetry`](https://crates.io/crates/opentelemetry) crate with
no SDK (`opentelemetry_sdk`) registered, so the call hits the
crate's NoOp meter implementation.

The version of `opentelemetry` is set by editing `Cargo.toml` before
the build; the workflow does this via `sed`.

## Run locally

```sh
cargo run --release --manifest-path Cargo.toml
```

Stdout is a JSON array compatible with
`benchmark-action/github-action-benchmark`'s `customSmallerIsBetter`
tool.
