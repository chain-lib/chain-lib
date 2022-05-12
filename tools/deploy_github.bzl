def deploy_github(name, srcs, username, email, org, repo, visibility=None):
  native.genrule(
    name = name,
    srcs = srcs,
    outs = [srcs],
    cmd = """(
        git config --global user.name "${username}"
        git config --global user.email ${email}
        git clone https://github.com/${org}/${repo}
        cd ${repo}
        git rm -r
        
    )
    """,
    visibility = visibility,
  )