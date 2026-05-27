use criterion::{criterion_group, criterion_main, Criterion};
use opentelemetry::{global, KeyValue};

fn s1_counter_add(c: &mut Criterion) {
    let meter = global::meter("otel-benchmarks");
    let counter = meter.u64_counter("requests").build();

    c.bench_function("s1_counter_add", |b| {
        b.iter(|| {
            counter.add(
                1,
                &[
                    KeyValue::new("http.request.method", "GET"),
                    KeyValue::new("url.scheme", "https"),
                    KeyValue::new("server.address", "example.com"),
                ],
            );
        });
    });
}

criterion_group! {
    name = benches;
    config = Criterion::default()
        .warm_up_time(std::time::Duration::from_secs(1))
        .measurement_time(std::time::Duration::from_secs(3));
    targets = s1_counter_add
}
criterion_main!(benches);
