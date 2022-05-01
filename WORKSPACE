workspace(
    name = "chainlib",
    managed_directories = {
        "@dependencies": ["node_modules"],
    },
)

load("//tools:bazel_deps.bzl", "fetch_dependencies")

fetch_dependencies()

load("//tools:load_env.bzl", "envfile")

envfile(name="envfile",files=["//:.env"])

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(
    node_version = "16.13.2",
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@build_bazel_rules_nodejs//toolchains/esbuild:esbuild_repositories.bzl", "esbuild_repositories")

esbuild_repositories(npm_repository = "npm")

load("@bazel_distribution//github:deps.bzl", github_deps = "deps")
github_deps()

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")
bazel_skylib_workspace()

