# otel-benchmarks (prototype)

This repository is a **prototype** of the model proposed in
[OTEP 5109](https://github.com/open-telemetry/opentelemetry-specification/pull/5109)
("A Central OpenTelemetry Benchmarks Repository"). It is hosted under
a personal account and is **not** an official OpenTelemetry project.

## What it contains

- A scenario definition: [`scenarios/S1-counter-api-only.md`](scenarios/S1-counter-api-only.md).
- Language harnesses for that scenario:
  - [`harnesses/dotnet/`](harnesses/dotnet/) — `System.Diagnostics.DiagnosticSource`, BenchmarkDotNet.
  - [`harnesses/rust/`](harnesses/rust/) — `opentelemetry` crate, Criterion.
  - [`harnesses/java/`](harnesses/java/) — `opentelemetry-api`, JMH.
- A manual-dispatch GitHub Actions workflow that runs a harness on
  a specified package version and appends the result to a GitHub
  Pages dashboard:
  [`.github/workflows/run-benchmark.yml`](.github/workflows/run-benchmark.yml).

## Live dashboard

<https://cijothomas.github.io/otel-benchmarks/>

X axis is the measured package version; Y axis is the value reported
by the harness. Current data: Scenario S1 against
`System.Diagnostics.DiagnosticSource` `10.0.8`/`9.0.16`/`8.0.1` and
`opentelemetry` (Rust) `0.32.0`/`0.31.0`/`0.30.0`, measured on
`ubuntu-latest`. All measure `Counter.add` in the sub- to
low-nanosecond range.

## What this is not

- Not an official OpenTelemetry artifact.
- Not a regression-detection CI; it records one data point per
  manually-dispatched run.
- Not running on a bare-metal runner — this prototype uses
  `ubuntu-latest`, which has measurable noise. Absolute numbers
  here should not be cited as authoritative.

## Known prototype limitations / open design questions

- `benchmark-action/github-action-benchmark`'s built-in chart is
  commit/time-indexed; it has no native option for a "version on X
  axis" view. This prototype ignores that chart and ships a small
  custom `index.html` at the gh-pages root which reads the same
  `data.js` and renders by package version.
- Environment metadata (runner image, .NET SDK version, package
  version) is not yet captured alongside each data point. The OTEP
  calls for this so trend breaks caused by environment changes can
  be annotated rather than misread as SDK movements.

## How to add a data point

Trigger the
[`run-benchmark`](../../actions/workflows/run-benchmark.yml) workflow,
supplying the language (`dotnet`, `rust`, or `java`) and the
package version to measure (e.g. `10.0.8`, `0.32.0`, `1.51.0`). The
workflow will push the new data point to the `gh-pages` branch.
