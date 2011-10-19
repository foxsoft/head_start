This gem extends Compass with Foxsoft's own SCSS libraries and third party Javascript libraries

Installation:

To use the latest version from Github add the following to your gemfile if you're using bundler:

gem 'head_start'

It's best to lock it to a specific version of the gem as development is at an early stage and updates may change the way the gem is used.

Alternatively, if you have a local version of the gem that you want to use then set the source to your local path rather than Github:

gem 'head_start', :path => '/Volumes/work/projects/head-start/jumpstart'

Once you have the gem installed you can check that head_start is available using:

bundle exec compass help -r head_start

You can also get information on individual templates using:

bundle exec compass help -r head_start head_start/boilerplate
