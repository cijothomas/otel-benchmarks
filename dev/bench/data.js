window.BENCHMARK_DATA = {
  "lastUpdate": 1779864479547,
  "repoUrl": "https://github.com/cijothomas/otel-benchmarks",
  "entries": {
    "dotnet / S1 (System.Diagnostics.DiagnosticSource 10.0.8)": [
      {
        "commit": {
          "author": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijo.thomas@gmail.com"
          },
          "committer": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijo.thomas@gmail.com"
          },
          "id": "21596ea2da39f8a48bd559ffc8fb9658a93df7a3",
          "message": "Initial prototype: S1 scenario, .NET harness, manual-dispatch workflow",
          "timestamp": "2026-05-27T05:49:30Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/21596ea2da39f8a48bd559ffc8fb9658a93df7a3"
        },
        "date": 1779861141081,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "OtelBenchmarks.Dotnet.S1CounterApiOnly.CounterAdd",
            "value": 0.9968569407860438,
            "unit": "ns",
            "range": "± 0.010514508485295941"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "committer": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "id": "8b31bbe0aa23134fd5cedbbed6a45c41babc0fcf",
          "message": "Pass attributes per call in both harnesses\n\nMatch how application code typically issues measurements: construct\nthe KeyValuePair/KeyValue tuple at the Add/add call site rather than\nhoisting a static container outside the hot loop. Matches typical\nreal-world usage where attribute values come from per-request data.",
          "timestamp": "2026-05-27T06:45:25Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/8b31bbe0aa23134fd5cedbbed6a45c41babc0fcf"
        },
        "date": 1779864406328,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "OtelBenchmarks.Dotnet.S1CounterApiOnly.CounterAdd",
            "value": 3.4104531835764647,
            "unit": "ns",
            "range": "± 0.0034312846346188884"
          }
        ]
      }
    ],
    "dotnet / S1 (System.Diagnostics.DiagnosticSource 9.0.16)": [
      {
        "commit": {
          "author": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijo.thomas@gmail.com"
          },
          "committer": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijo.thomas@gmail.com"
          },
          "id": "21596ea2da39f8a48bd559ffc8fb9658a93df7a3",
          "message": "Initial prototype: S1 scenario, .NET harness, manual-dispatch workflow",
          "timestamp": "2026-05-27T05:49:30Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/21596ea2da39f8a48bd559ffc8fb9658a93df7a3"
        },
        "date": 1779861232982,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "OtelBenchmarks.Dotnet.S1CounterApiOnly.CounterAdd",
            "value": 0.9905562340640105,
            "unit": "ns",
            "range": "± 0.003971045130516777"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "committer": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "id": "8b31bbe0aa23134fd5cedbbed6a45c41babc0fcf",
          "message": "Pass attributes per call in both harnesses\n\nMatch how application code typically issues measurements: construct\nthe KeyValuePair/KeyValue tuple at the Add/add call site rather than\nhoisting a static container outside the hot loop. Matches typical\nreal-world usage where attribute values come from per-request data.",
          "timestamp": "2026-05-27T06:45:25Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/8b31bbe0aa23134fd5cedbbed6a45c41babc0fcf"
        },
        "date": 1779864479104,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "OtelBenchmarks.Dotnet.S1CounterApiOnly.CounterAdd",
            "value": 1.8103227171426017,
            "unit": "ns",
            "range": "± 0.003284114984235982"
          }
        ]
      }
    ],
    "dotnet / S1 (System.Diagnostics.DiagnosticSource 8.0.1)": [
      {
        "commit": {
          "author": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijo.thomas@gmail.com"
          },
          "committer": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijo.thomas@gmail.com"
          },
          "id": "21596ea2da39f8a48bd559ffc8fb9658a93df7a3",
          "message": "Initial prototype: S1 scenario, .NET harness, manual-dispatch workflow",
          "timestamp": "2026-05-27T05:49:30Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/21596ea2da39f8a48bd559ffc8fb9658a93df7a3"
        },
        "date": 1779861315021,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "OtelBenchmarks.Dotnet.S1CounterApiOnly.CounterAdd",
            "value": 0.9911568124911615,
            "unit": "ns",
            "range": "± 0.005129789471392988"
          }
        ]
      }
    ],
    "rust / S1 (opentelemetry 0.32.0)": [
      {
        "commit": {
          "author": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "committer": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "id": "204a4a25932762dc859f8c77160eb2d25d839a2c",
          "message": "Add Rust harness for Scenario S1",
          "timestamp": "2026-05-27T06:19:20Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/204a4a25932762dc859f8c77160eb2d25d839a2c"
        },
        "date": 1779862855008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 1.76464344,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "committer": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "id": "624c73620a2ca31633b749269fedf292a85910af",
          "message": "Use Criterion for Rust harness (match upstream opentelemetry-rust benches)",
          "timestamp": "2026-05-27T06:31:34Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/624c73620a2ca31633b749269fedf292a85910af"
        },
        "date": 1779863689059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 1.759350153213528,
            "range": "0.0008509388493718401",
            "unit": "ns"
          }
        ]
      }
    ],
    "rust / S1 (opentelemetry 0.30.0)": [
      {
        "commit": {
          "author": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "committer": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "id": "b223f0ccfcbffa562ddad788d2fb32ee4219b788",
          "message": "Restore Cargo.toml before publish to avoid dirty worktree",
          "timestamp": "2026-05-27T06:21:31Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/b223f0ccfcbffa562ddad788d2fb32ee4219b788"
        },
        "date": 1779862918380,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 1.76104803,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "committer": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "id": "624c73620a2ca31633b749269fedf292a85910af",
          "message": "Use Criterion for Rust harness (match upstream opentelemetry-rust benches)",
          "timestamp": "2026-05-27T06:31:34Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/624c73620a2ca31633b749269fedf292a85910af"
        },
        "date": 1779863558864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 1.5562267814443347,
            "range": "0.0003505950415494689",
            "unit": "ns"
          }
        ]
      }
    ],
    "rust / S1 (opentelemetry 0.31.0)": [
      {
        "commit": {
          "author": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "committer": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "id": "b223f0ccfcbffa562ddad788d2fb32ee4219b788",
          "message": "Restore Cargo.toml before publish to avoid dirty worktree",
          "timestamp": "2026-05-27T06:21:31Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/b223f0ccfcbffa562ddad788d2fb32ee4219b788"
        },
        "date": 1779862951780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 1.88465277,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "committer": {
            "name": "cijothomas",
            "username": "cijothomas",
            "email": "cijothomas@users.noreply.github.com"
          },
          "id": "624c73620a2ca31633b749269fedf292a85910af",
          "message": "Use Criterion for Rust harness (match upstream opentelemetry-rust benches)",
          "timestamp": "2026-05-27T06:31:34Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/624c73620a2ca31633b749269fedf292a85910af"
        },
        "date": 1779863623297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 1.7582304889064466,
            "range": "0.0004470067051537063",
            "unit": "ns"
          }
        ]
      }
    ]
  }
}