# Java harness for Scenario S1

Measures `LongCounter.add` against the
[`opentelemetry-api`](https://central.sonatype.com/artifact/io.opentelemetry/opentelemetry-api)
artifact with no SDK (`opentelemetry-sdk`) registered, so the call
hits the API's no-op meter.

Uses [JMH](https://github.com/openjdk/jmh) — the de-facto Java
microbenchmark framework, and what the upstream
[`opentelemetry-java`](https://github.com/open-telemetry/opentelemetry-java)
repo uses for its own benches.

The version of `opentelemetry-api` is set via the Gradle property
`otelApiVersion`; the workflow passes `-PotelApiVersion=X.Y.Z`.

## Run locally

```sh
cd harnesses/java
./gradlew jmh -PotelApiVersion=1.51.0
```

The workflow uploads `build/results/jmh/result.json` directly to
the dashboard via the built-in `jmh` tool of
`benchmark-action/github-action-benchmark`.
