using System.Diagnostics.Metrics;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Exporters.Json;
using BenchmarkDotNet.Running;

namespace OtelBenchmarks.Dotnet;

[MemoryDiagnoser]
[JsonExporterAttribute.FullCompressed]
public class S1CounterApiOnly
{
    private static readonly Meter Meter = new("otel-benchmarks.s1");
    private static readonly Counter<long> Counter = Meter.CreateCounter<long>("requests");

    [Benchmark]
    public void CounterAdd() => Counter.Add(
        1,
        new KeyValuePair<string, object?>("http.request.method", "GET"),
        new KeyValuePair<string, object?>("url.scheme", "https"),
        new KeyValuePair<string, object?>("server.address", "example.com"));
}

[MemoryDiagnoser]
[JsonExporterAttribute.FullCompressed]
public class S1bCounterApiOnlyGuarded
{
    private static readonly Meter Meter = new("otel-benchmarks.s1b");
    private static readonly Counter<long> Counter = Meter.CreateCounter<long>("requests");

    [Benchmark]
    public void CounterAddGuarded()
    {
        if (Counter.Enabled)
        {
            Counter.Add(
                1,
                new KeyValuePair<string, object?>("http.request.method", "GET"),
                new KeyValuePair<string, object?>("url.scheme", "https"),
                new KeyValuePair<string, object?>("server.address", "example.com"));
        }
    }
}

public static class Program
{
    public static void Main(string[] args) =>
        BenchmarkSwitcher.FromAssembly(typeof(Program).Assembly).Run(args);
}
