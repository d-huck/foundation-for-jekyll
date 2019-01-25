# dhuck's Foundation for Jekyll

This repository is a quick project start combining Foundation 6.5 with Jekyll 3.8.4. Foundation is a wonderful framework to get developing design quickly and Jekyll is the default static site generator for GitHub. These two tools are powerful to quickly design and maintain a small site so you can get back to playing Dwarf Fortress. Read more about [Jekyll](https://jekyllrb.com/) and [Foundation](https://foundation.zurb.com/).

## Requirements and Instructions

This package uses gem to install its required packages. Before you can get started, make sure all the dependencies are met with the following command:

```sh
gem install -g
```

Once everything is installed, you can monitor your site's design by typing the following command into the project directory. This will watch the directory for any changes and reload the browser window when the changes have finished rendering.

```sh
bundle exec jekyll serve --livereload
```

That's it! You're now building a site. Jekyll handles all of the sass building so there is no need to for extra steps like other repositories that have been posted.

## Deployment

This repository includes the default .gitlab-ci.yml for integrating jekyll with Gitlab Pages. Edit this file to choose a branch on your repository that should build upon pushing. Find out more about Gitlab Pages [here](https://about.gitlab.com/features/pages/).

## Acknowledgement

Big shoutout to the maintainers of [this repository](https://github.com/Foundation-for-Jekyll-sites/jekyll-foundation) that was the inspiration of this repository. I would not have been able to build this repository easily without their previous work.
