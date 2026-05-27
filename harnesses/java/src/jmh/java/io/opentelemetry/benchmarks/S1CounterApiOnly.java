package io.opentelemetry.benchmarks;

import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.common.Attributes;
import io.opentelemetry.api.metrics.LongCounter;
import io.opentelemetry.api.metrics.Meter;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.OutputTimeUnit;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.Setup;
import org.openjdk.jmh.annotations.State;

import java.util.concurrent.TimeUnit;

@State(Scope.Benchmark)
@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
public class S1CounterApiOnly {

    private LongCounter counter;

    @Setup
    public void setup() {
        Meter meter = GlobalOpenTelemetry.getMeter("otel-benchmarks");
        counter = meter.counterBuilder("requests").build();
    }

    @Benchmark
    public void s1_counter_add() {
        counter.add(
                1L,
                Attributes.builder()
                        .put("http.request.method", "GET")
                        .put("url.scheme", "https")
                        .put("server.address", "example.com")
                        .build());
    }
}
