# .NET harness for Scenario S1

[`BenchmarkDotNet`](https://benchmarkdotnet.org/) harness measuring a
single `Counter<long>.Add` call with the three S1 attributes, against
the BCL metrics API (`System.Diagnostics.Metrics`) — no OpenTelemetry
SDK registered.

The version of
[`System.Diagnostics.DiagnosticSource`](https://www.nuget.org/packages/System.Diagnostics.DiagnosticSource)
the harness builds against is controlled by the
`SystemDiagnosticsDiagnosticSourceVersion` MSBuild property (default
defined in [`Directory.Build.props`](./Directory.Build.props)) and
overridden by the workflow per run.

## Run locally

```sh
dotnet run -c Release --project OtelBenchmarks.Dotnet \
  -p:SystemDiagnosticsDiagnosticSourceVersion=10.0.8 -- --exporters json
```

Results land under `BenchmarkDotNet.Artifacts/results/`.
