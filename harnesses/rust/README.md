# Rust harness for Scenario S1

Measures `Counter::add` against the
[`opentelemetry`](https://crates.io/crates/opentelemetry) crate with
no SDK registered, so the call hits the crate's NoOp meter
implementation.

Uses [Criterion](https://crates.io/crates/criterion) — the same
benchmarking framework the upstream
[`opentelemetry-rust`](https://github.com/open-telemetry/opentelemetry-rust/blob/main/opentelemetry-sdk/benches/metrics_counter.rs)
repo uses for its own counter benches.

The version of `opentelemetry` is set by editing `Cargo.toml` before
the build; the workflow does this via `sed`.

## Run locally

```sh
cargo bench --bench s1_counter
```

The workflow uploads the mean from
`target/criterion/s1_counter_add/new/estimates.json` to the
dashboard via the `customSmallerIsBetter` tool.

