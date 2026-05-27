# Scenario S1b: HTTP request counter increment, API-only, guarded by `IsEnabled`

## Intent

Same workload as [S1](./S1-counter-api-only.md), but the `Counter.Add(...)`
call is guarded by the language's idiomatic *is-enabled* check that lets
the API short-circuit when no listener / SDK is registered. This isolates
the cost of the guard pattern itself and lets us measure how much
allocation/work an instrumentation author can avoid by adopting it.

## Pseudo-code

```text
counter = meter("otel-benchmarks").create_counter("requests")
loop {
  if counter.is_enabled() {
    counter.add(1, {
      "http.request.method": "GET",
      "url.scheme":          "https",
      "server.address":      "example.com",
    })
  }
}
```

Everything else (workload, attribute set, threading model, output metrics)
matches S1.

## Language interpretations

### .NET

`System.Diagnostics.Metrics.Counter<T>` exposes a stable
[`Counter.Enabled`](https://learn.microsoft.com/dotnet/api/system.diagnostics.metrics.instrument.enabled)
boolean property. The S1b benchmark wraps the call:

```csharp
if (counter.Enabled)
{
    counter.Add(1,
        new KeyValuePair<string, object?>("http.request.method", "GET"),
        new KeyValuePair<string, object?>("url.scheme", "https"),
        new KeyValuePair<string, object?>("server.address", "example.com"));
}
```

### Java — *not measured (API gap)*

As of `opentelemetry-api` 1.51.0, neither the stable `LongCounter`
interface nor the experimental `ExtendedLongCounter` (incubator) expose
an `isEnabled()` method. Only `ExtendedLongHistogram` (incubator) has
one. There is therefore no language-idiomatic guard to benchmark for the
counter API today. This is itself a useful finding — see the S1 result
where the no-op Java counter is ~30–80× slower than the .NET / Rust
counterparts purely because the `Attributes` object is allocated before
the API has any chance to short-circuit.

### Rust — *not measured (API gap)*

The `opentelemetry` crate's `Counter<T>` does not expose an `is_enabled`
method as of 0.32. Recorded here for future onboarding.

## Reporting

Same as S1: time/op and allocations/op, one data point per pinned
package version, with per-data-point environment metadata.
