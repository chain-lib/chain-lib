def deploy_github(name, srcs, username, email, org, repo, token, visibility=None, **kwargs):
  native.filegroup(
    name = name + "_files",
    srcs = srcs,
  )
  native.genrule(
    name = name,
    srcs = srcs,
    outs = [],
    cmd = """(
        git config --global user.name "{username}"
        git config --global user.email {email}
        ls
        cd ${name}_files
        ls
        git remote set-url origin https://{token}@github.com/{org}/{repo}.git
        git push origin main   
    )
    """,
    visibility = visibility,
    **kwargs
  )