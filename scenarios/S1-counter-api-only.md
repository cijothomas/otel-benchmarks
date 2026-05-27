# Scenario S1: Counter increment, API-only

Mirrors Scenario S1 in
[OTEP 5109](https://github.com/open-telemetry/opentelemetry-specification/pull/5109).

## Definition

- Depends only on the OTel API package; no SDK package is referenced
  or loaded.
- The benchmark increments a `Counter` instrument by 1 in a tight
  loop with the same attribute set on every call. The attribute set
  is these three string attributes:
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
