# Scenario S1: Counter increment, API-only

Mirrors Scenario S1 in
[OTEP 5109](https://github.com/open-telemetry/opentelemetry-specification/pull/5109).

## Definition

- Depends only on the OTel API package; no SDK package is referenced
  or loaded.
- The benchmark increments a `Counter` instrument by 1 in a tight
  loop with **no guard** around the call — the API itself is what
  short-circuits. See
  [Scenario S1b](./S1b-counter-api-only-guarded.md) for the
  `IsEnabled`-guarded variant.
- Each call constructs and passes the same attribute set inline (no
  hoisting/caching of an attribute container across iterations) —
  this matches how application code typically issues measurements
  with per-request attribute values. The attribute set is these
  three string attributes:
  - `http.request.method` = `"GET"`
  - `url.scheme` = `"https"`
  - `server.address` = `"example.com"`
- Single-threaded (one OS thread); async or coroutine-style code is
  fine where idiomatic. Multi-threaded and contended variants are
  out of scope for S1.
- Reported metrics per run:
  - `ns/op` (median).
  - `allocations/op` (heap allocations per operation), where the
    language exposes it; bytes/op optional.

## Per-data-point metadata

Each data point is published with an `extra` field carrying the
execution environment in `key=value` pairs, one per line:

- `runner` — GitHub Actions runner image label
- `runtime` — language runtime version (`.NET 8.0.x`, `rustc 1.x.y`)
- `cpu` — `model name` from `/proc/cpuinfo`
- `kernel` — `uname -r`
- `framework` — benchmarking framework name and version

This is rendered next to each value in the dashboard table.

## .NET interpretation

In .NET, the metrics API is in the BCL
(`System.Diagnostics.Metrics`), shipped via the
[`System.Diagnostics.DiagnosticSource`](https://www.nuget.org/packages/System.Diagnostics.DiagnosticSource)
NuGet package. "API-only" therefore means: depend on
`System.Diagnostics.DiagnosticSource` only, with no OpenTelemetry
SDK registered. The version recorded against each data point is the
`System.Diagnostics.DiagnosticSource` package version.

See [`harnesses/dotnet/`](../harnesses/dotnet/) for the
implementation.

## Rust interpretation

In Rust, the API lives in the
[`opentelemetry`](https://crates.io/crates/opentelemetry) crate; the
SDK is a separate crate (`opentelemetry_sdk`). "API-only" means:
depend on `opentelemetry` only, with no SDK registered, so
`global::meter(...)` returns the crate's NoOp meter. The version
recorded against each data point is the `opentelemetry` crate
version. Allocations are not reported in the Rust harness.

See [`harnesses/rust/`](../harnesses/rust/) for the implementation.

## Java interpretation

In Java, the API lives in the
[`opentelemetry-api`](https://central.sonatype.com/artifact/io.opentelemetry/opentelemetry-api)
artifact; the SDK is `opentelemetry-sdk`. "API-only" means: depend
on `opentelemetry-api` only, with no SDK registered, so
`GlobalOpenTelemetry.getMeter(...)` returns the API's no-op meter.
The version recorded against each data point is the
`opentelemetry-api` artifact version.

See [`harnesses/java/`](../harnesses/java/) for the implementation.
