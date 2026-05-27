using System.Diagnostics;
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

    private static readonly TagList Tags = new()
    {
        { "http.request.method", "GET" },
        { "url.scheme", "https" },
        { "server.address", "example.com" },
    };

    [Benchmark]
    public void CounterAdd() => Counter.Add(1, Tags);
}

public static class Program
{
    public static void Main(string[] args) =>
        BenchmarkSwitcher.FromAssembly(typeof(Program).Assembly).Run(args);
}
