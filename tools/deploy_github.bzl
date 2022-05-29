def deploy_github(name, srcs, username, cname, build_target_html_files, org, repo, token, visibility=None, **kwargs):
  native.filegroup(
    name = name + "_files",
    srcs = srcs,
  )
  native.genrule(
    name = name,
    srcs = [":" + name + "_files"],
    outs =[name + ".txt"],
    cmd = " && ".join([ 
        "cd $(location :" + name + "_files)",
        "sed -i '' **/*",
        "for FILE in " + build_target_html_files +" ; do cp --remove-destination `readlink $$FILE` $$FILE; done",
        "echo " + cname + " > CNAME",
        "git init -b main",
        "git add --all",
        'git commit --author "' + username + ' <>" -m "update documentation"',
        "git remote add origin https://" + token + "@github.com/" + org + "/" + repo + ".git",
        "git push -f -u origin main",
        "cd ..",
        "cat > " + name + ".txt"
    ]),
    visibility = visibility,
    **kwargs
  )