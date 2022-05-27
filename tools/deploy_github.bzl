def deploy_github(name, srcs, username, email, org, repo, token, visibility=None, **kwargs):
  native.filegroup(
    name = name + "_files",
    srcs = srcs,
  )
  native.genrule(
    name = name,
    srcs = [":"+name+"_files"],
    outs =[":{name}_files"],
    cmd = " && ".join([
        "cd $(location :" + name + "_files)",
        "git init",
        "git remote set-url origin https://" + token + "@github.com/" + org + "/" + repo + ".git",
        "git add --all",
        'git commit -m "update documentation"',
        "git push",
    ]),
    visibility = visibility,
    **kwargs
  )