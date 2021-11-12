# Third-party dependencies fetched by Bazel
# Unlike WORKSPACE, the content of this file is unordered.
# We keep them separate to make the WORKSPACE file more maintainable.

# Install the nodejs "bootstrap" package
# This provides the basic tools for running and packaging nodejs programs in Bazel
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

def fetch_dependencies():
    http_archive(
        name = "build_bazel_rules_nodejs",
        sha256 = "c9c5d60d6234d65b06f86abd5edc60cadd1699f739ee49d33a099d2d67eb1ae8",
        urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.4.0/rules_nodejs-4.4.0.tar.gz"],
    )
