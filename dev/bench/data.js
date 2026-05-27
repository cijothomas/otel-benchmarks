window.BENCHMARK_DATA = {
  "lastUpdate": 1779899138179,
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
          "id": "7fe8e585c412eba96f75c8d83f6b9c79c925e66c",
          "message": "Capture per-datapoint environment metadata via 'extra' field\n\n- Both jobs collect runner image, runtime version, CPU model, kernel,\n  and benchmarking framework version into the customSmallerIsBetter\n  'extra' string.\n- .NET publish path now mirrors Rust: post-process the framework's\n  native JSON (BenchmarkDotNet report / Criterion estimates) into the\n  same customSmallerIsBetter shape so both languages flow through one\n  schema.\n- Dashboard renders the 'extra' block as an Environment column in\n  each scenario table and in the Chart.js tooltip.",
          "timestamp": "2026-05-27T07:00:42Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/7fe8e585c412eba96f75c8d83f6b9c79c925e66c"
        },
        "date": 1779865308590,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 1.352330696124297,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=.NET 10.0.300\ncpu=AMD EPYC 9V74 80-Core Processor\nkernel=6.17.0-1013-azure\nframework=BenchmarkDotNet 0.14.0"
          },
          {
            "name": "s1_counter_add allocations",
            "value": 0,
            "unit": "B/op",
            "extra": "runner=ubuntu24\nruntime=.NET 10.0.300\ncpu=AMD EPYC 9V74 80-Core Processor\nkernel=6.17.0-1013-azure\nframework=BenchmarkDotNet 0.14.0"
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
          "id": "bbf16ca23c9feac7381757c1662af93abb0bad5a",
          "message": "Add Scenario S1b: counter add guarded by IsEnabled (.NET only)",
          "timestamp": "2026-05-27T16:23:26Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/bbf16ca23c9feac7381757c1662af93abb0bad5a"
        },
        "date": 1779899137813,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 1.695470914776836,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=.NET 10.0.300\ncpu=AMD EPYC 9V74 80-Core Processor\nkernel=6.17.0-1015-azure\nframework=BenchmarkDotNet 0.14.0"
          },
          {
            "name": "s1_counter_add allocations",
            "value": 0,
            "unit": "B/op",
            "extra": "runner=ubuntu24\nruntime=.NET 10.0.300\ncpu=AMD EPYC 9V74 80-Core Processor\nkernel=6.17.0-1015-azure\nframework=BenchmarkDotNet 0.14.0"
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
          "id": "7fe8e585c412eba96f75c8d83f6b9c79c925e66c",
          "message": "Capture per-datapoint environment metadata via 'extra' field\n\n- Both jobs collect runner image, runtime version, CPU model, kernel,\n  and benchmarking framework version into the customSmallerIsBetter\n  'extra' string.\n- .NET publish path now mirrors Rust: post-process the framework's\n  native JSON (BenchmarkDotNet report / Criterion estimates) into the\n  same customSmallerIsBetter shape so both languages flow through one\n  schema.\n- Dashboard renders the 'extra' block as an Environment column in\n  each scenario table and in the Chart.js tooltip.",
          "timestamp": "2026-05-27T07:00:42Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/7fe8e585c412eba96f75c8d83f6b9c79c925e66c"
        },
        "date": 1779865381497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 1.8150920412288263,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=.NET 10.0.300\ncpu=AMD EPYC 7763 64-Core Processor\nkernel=6.17.0-1013-azure\nframework=BenchmarkDotNet 0.14.0"
          },
          {
            "name": "s1_counter_add allocations",
            "value": 0,
            "unit": "B/op",
            "extra": "runner=ubuntu24\nruntime=.NET 10.0.300\ncpu=AMD EPYC 7763 64-Core Processor\nkernel=6.17.0-1013-azure\nframework=BenchmarkDotNet 0.14.0"
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
        "date": 1779864529197,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "OtelBenchmarks.Dotnet.S1CounterApiOnly.CounterAdd",
            "value": 1.3526807299682073,
            "unit": "ns",
            "range": "± 0.004672061050610664"
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
          "id": "7fe8e585c412eba96f75c8d83f6b9c79c925e66c",
          "message": "Capture per-datapoint environment metadata via 'extra' field\n\n- Both jobs collect runner image, runtime version, CPU model, kernel,\n  and benchmarking framework version into the customSmallerIsBetter\n  'extra' string.\n- .NET publish path now mirrors Rust: post-process the framework's\n  native JSON (BenchmarkDotNet report / Criterion estimates) into the\n  same customSmallerIsBetter shape so both languages flow through one\n  schema.\n- Dashboard renders the 'extra' block as an Environment column in\n  each scenario table and in the Chart.js tooltip.",
          "timestamp": "2026-05-27T07:00:42Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/7fe8e585c412eba96f75c8d83f6b9c79c925e66c"
        },
        "date": 1779865454116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 1.8148371648903077,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=.NET 10.0.300\ncpu=AMD EPYC 7763 64-Core Processor\nkernel=6.17.0-1013-azure\nframework=BenchmarkDotNet 0.14.0"
          },
          {
            "name": "s1_counter_add allocations",
            "value": 0,
            "unit": "B/op",
            "extra": "runner=ubuntu24\nruntime=.NET 10.0.300\ncpu=AMD EPYC 7763 64-Core Processor\nkernel=6.17.0-1013-azure\nframework=BenchmarkDotNet 0.14.0"
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
        "date": 1779864714831,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 15.822589910687963,
            "range": "0.17207257120803138",
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
          "id": "7fe8e585c412eba96f75c8d83f6b9c79c925e66c",
          "message": "Capture per-datapoint environment metadata via 'extra' field\n\n- Both jobs collect runner image, runtime version, CPU model, kernel,\n  and benchmarking framework version into the customSmallerIsBetter\n  'extra' string.\n- .NET publish path now mirrors Rust: post-process the framework's\n  native JSON (BenchmarkDotNet report / Criterion estimates) into the\n  same customSmallerIsBetter shape so both languages flow through one\n  schema.\n- Dashboard renders the 'extra' block as an Environment column in\n  each scenario table and in the Chart.js tooltip.",
          "timestamp": "2026-05-27T07:00:42Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/7fe8e585c412eba96f75c8d83f6b9c79c925e66c"
        },
        "date": 1779865638911,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 11.839249262136356,
            "range": "0.004380756115056046",
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=rustc 1.95.0 (59807616e 2026-04-14)\ncpu=AMD EPYC 7763 64-Core Processor\nkernel=6.17.0-1013-azure\nframework=Criterion 0.5"
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
        "date": 1779864591769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 13.754486618307055,
            "range": "0.035921069726192474",
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
          "id": "7fe8e585c412eba96f75c8d83f6b9c79c925e66c",
          "message": "Capture per-datapoint environment metadata via 'extra' field\n\n- Both jobs collect runner image, runtime version, CPU model, kernel,\n  and benchmarking framework version into the customSmallerIsBetter\n  'extra' string.\n- .NET publish path now mirrors Rust: post-process the framework's\n  native JSON (BenchmarkDotNet report / Criterion estimates) into the\n  same customSmallerIsBetter shape so both languages flow through one\n  schema.\n- Dashboard renders the 'extra' block as an Environment column in\n  each scenario table and in the Chart.js tooltip.",
          "timestamp": "2026-05-27T07:00:42Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/7fe8e585c412eba96f75c8d83f6b9c79c925e66c"
        },
        "date": 1779865519200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 10.139417009504953,
            "range": "0.02107242874011417",
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=rustc 1.95.0 (59807616e 2026-04-14)\ncpu=Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz\nkernel=6.17.0-1013-azure\nframework=Criterion 0.5"
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
        "date": 1779864659493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 15.475316986842714,
            "range": "0.002364137114783632",
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
          "id": "7fe8e585c412eba96f75c8d83f6b9c79c925e66c",
          "message": "Capture per-datapoint environment metadata via 'extra' field\n\n- Both jobs collect runner image, runtime version, CPU model, kernel,\n  and benchmarking framework version into the customSmallerIsBetter\n  'extra' string.\n- .NET publish path now mirrors Rust: post-process the framework's\n  native JSON (BenchmarkDotNet report / Criterion estimates) into the\n  same customSmallerIsBetter shape so both languages flow through one\n  schema.\n- Dashboard renders the 'extra' block as an Environment column in\n  each scenario table and in the Chart.js tooltip.",
          "timestamp": "2026-05-27T07:00:42Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/7fe8e585c412eba96f75c8d83f6b9c79c925e66c"
        },
        "date": 1779865578858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 11.844579494615246,
            "range": "0.005972490578910589",
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=rustc 1.95.0 (59807616e 2026-04-14)\ncpu=AMD EPYC 7763 64-Core Processor\nkernel=6.17.0-1013-azure\nframework=Criterion 0.5"
          }
        ]
      }
    ],
    "java / S1 (opentelemetry-api 1.51.0)": [
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
          "id": "744e5a64ad4aab1c937ab9d8fa7bc2753292dde8",
          "message": "Add Java harness for Scenario S1 (JMH + opentelemetry-api)",
          "timestamp": "2026-05-27T15:51:11Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/744e5a64ad4aab1c937ab9d8fa7bc2753292dde8"
        },
        "date": 1779897143086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 115.54952691751771,
            "range": "0.9266439048967378",
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=openjdk version 17.0.19 2026-04-21\ncpu=AMD EPYC 7763 64-Core Processor\nkernel=6.17.0-1013-azure\nframework=JMH"
          }
        ]
      }
    ],
    "java / S1 (opentelemetry-api 1.50.0)": [
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
          "id": "744e5a64ad4aab1c937ab9d8fa7bc2753292dde8",
          "message": "Add Java harness for Scenario S1 (JMH + opentelemetry-api)",
          "timestamp": "2026-05-27T15:51:11Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/744e5a64ad4aab1c937ab9d8fa7bc2753292dde8"
        },
        "date": 1779897230900,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 96.8007863609937,
            "range": "0.28514369958121116",
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=openjdk version 17.0.19 2026-04-21\ncpu=AMD EPYC 9V74 80-Core Processor\nkernel=6.17.0-1013-azure\nframework=JMH"
          }
        ]
      }
    ],
    "java / S1 (opentelemetry-api 1.49.0)": [
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
          "id": "744e5a64ad4aab1c937ab9d8fa7bc2753292dde8",
          "message": "Add Java harness for Scenario S1 (JMH + opentelemetry-api)",
          "timestamp": "2026-05-27T15:51:11Z",
          "url": "https://github.com/cijothomas/otel-benchmarks/commit/744e5a64ad4aab1c937ab9d8fa7bc2753292dde8"
        },
        "date": 1779897331283,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "s1_counter_add",
            "value": 115.67105586076472,
            "range": "1.3384483991449059",
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=openjdk version 17.0.19 2026-04-21\ncpu=AMD EPYC 7763 64-Core Processor\nkernel=6.17.0-1013-azure\nframework=JMH"
          }
        ]
      }
    ]
  }
}