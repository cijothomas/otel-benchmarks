# otel-benchmarks (prototype)

This repository is a **prototype** of the model proposed in
[OTEP 5109](https://github.com/open-telemetry/opentelemetry-specification/pull/5109)
("A Central OpenTelemetry Benchmarks Repository"). It is hosted under
a personal account and is **not** an official OpenTelemetry project.

## What it contains

- A scenario definition: [`scenarios/S1-counter-api-only.md`](scenarios/S1-counter-api-only.md).
- A .NET harness for that scenario:
  [`harnesses/dotnet/`](harnesses/dotnet/).
- A manual-dispatch GitHub Actions workflow that runs the harness on
  a specified package version and appends the result to a GitHub
  Pages dashboard:
  [`.github/workflows/run-benchmark.yml`](.github/workflows/run-benchmark.yml).

## Live dashboard

Once data points have been published, the trend dashboard is at:

<https://cijothomas.github.io/otel-benchmarks/dev/bench/>

## What this is not

- Not an official OpenTelemetry artifact.
- Not a regression-detection CI; it records one data point per
  manually-dispatched run.
- Not running on a bare-metal runner — this prototype uses
  `ubuntu-latest`, which has measurable noise. Absolute numbers
  here should not be cited as authoritative.

## How to add a data point

Trigger the
[`run-benchmark`](../../actions/workflows/run-benchmark.yml) workflow,
supplying the language (`dotnet`) and the package version to measure
(e.g. `10.0.8`). The workflow will push the new data point to the
`gh-pages` branch.
