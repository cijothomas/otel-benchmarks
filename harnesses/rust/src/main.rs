use opentelemetry::{global, KeyValue};
use std::time::Instant;

fn main() {
    let meter = global::meter("otel-benchmarks");
    let counter = meter.u64_counter("requests").build();
    let attrs = [
        KeyValue::new("http.request.method", "GET"),
        KeyValue::new("url.scheme", "https"),
        KeyValue::new("server.address", "example.com"),
    ];

    // Warmup
    for _ in 0..1_000_000_u64 {
        counter.add(1, &attrs);
    }

    // Measurement
    let iterations: u64 = 100_000_000;
    let start = Instant::now();
    for _ in 0..iterations {
        counter.add(1, &attrs);
    }
    let elapsed = start.elapsed();
    let ns_per_op = elapsed.as_nanos() as f64 / iterations as f64;

    let result = serde_json::json!([{
        "name": "s1_counter_add",
        "unit": "ns",
        "value": ns_per_op,
    }]);
    println!("{}", serde_json::to_string_pretty(&result).unwrap());
}
