description "Compass extension for HTML5 Boilerplate located at http://html5boilerplate.com"

if Compass.configuration.project_type == :rails
  file 'stylesheets/rails/boilerplate.scss', :to => 'app/assets/stylesheets/layouts/boilerplate.css.scss'
  file 'stylesheets/template.scss', :to => 'app/assets/stylesheets/boilerplate/template.css.scss'
  file 'stylesheets/_normalize.scss', :to => 'app/assets/stylesheets/boilerplate/_normalize.css.scss'
  file 'stylesheets/_custom_styles.scss', :to => 'app/assets/stylesheets/boilerplate/_custom_styles.css.scss'
  file 'stylesheets/_helpers.scss', :to => 'app/assets/stylesheets/boilerplate/_helpers.css.scss'
  file 'stylesheets/_styling_helpers.scss', :to => 'app/assets/stylesheets/boilerplate/_styling_helpers.css.scss'
  file 'stylesheets/_media.scss', :to => 'app/assets/stylesheets/boilerplate/_media.css.scss'
  file 'stylesheets/_print.scss', :to => 'app/assets/stylesheets/boilerplate/_print.css.scss'

  file 'javascripts/boilerplate.js', :to => 'app/assets/javascripts/layouts/boilerplate.js'

  html '404.html'
  html 'crossdomain.xml'
  html 'htaccess', :to => '.htaccess'
  html 'humans.txt'
  html 'robots.txt'

  file 'layouts/boilerplate.html.haml', :to => 'app/views/layouts/boilerplate.html.haml'
  file 'layouts/_head.html.haml', :to => 'app/views/layouts/boilerplate/_head.html.haml'
  file 'layouts/_header.html.haml', :to => 'app/views/layouts/boilerplate/_header.html.haml'
  file 'layouts/_flashes.html.haml', :to => 'app/views/layouts/boilerplate/_flashes.html.haml'
  file 'layouts/_footer.html.haml', :to => 'app/views/layouts/boilerplate/_footer.html.haml'
  file 'layouts/_javascripts.html.haml', :to => 'app/views/layouts/boilerplate/_javascripts.html.haml'
end

if Compass.configuration.project_type == :stand_alone
  file 'frank_setup.rb', :to => "setup.rb"

  file 'layouts/stand_alone/_flashes.haml', :to => 'dynamic/boilerplate/_flashes.haml'
  file 'layouts/_footer.html.haml', :to => 'dynamic/boilerplate/_footer.haml'
  file 'layouts/stand_alone/_head.haml', :to => 'dynamic/boilerplate/_head.haml'
  file 'layouts/_header.html.haml', :to => 'dynamic/boilerplate/_header.haml'
  file 'layouts/stand_alone/_javascripts.haml', :to => 'dynamic/boilerplate/_javascripts.haml'

  file 'stylesheets/stand_alone/boilerplate.scss', :to => 'dynamic/css/boilerplate.scss'
  file 'stylesheets/stand_alone/_custom_styles.scss', :to => 'dynamic/css/boilerplate/_custom_styles.scss'
  file 'stylesheets/_helpers.scss', :to => 'dynamic/css/boilerplate/_helpers.scss'
  file 'stylesheets/_media.scss', :to => 'dynamic/css/boilerplate/_media.scss'
  file 'stylesheets/_normalize.scss', :to => 'dynamic/css/boilerplate/_normalize.scss'
  file 'stylesheets/_print.scss', :to => 'dynamic/css/boilerplate/_print.scss'
  file 'stylesheets/_styling_helpers.scss', :to => 'dynamic/css/boilerplate/_styling_helpers.scss'
  file 'stylesheets/stand_alone/_template.scss', :to => 'dynamic/css/boilerplate/_template.scss'

  file 'layouts/stand_alone/boilerplate.haml', :to => 'layouts/boilerplate.haml'

  file 'javascripts/stand_alone/boilerplate.js', :to => 'static/js/boilerplate.js'

  file '404.html', :to => "static/404.html"
  file 'crossdomain.xml', :to => "static/crossdomain.xml"
  file 'htaccess', :to => "static/.htaccess"
  file 'humans.txt', :to => "static/humans.txt"
  file 'robots.txt', :to => "static/robots.txt"

end

help %Q{
This is a Compass extension based on HTML5 Boilerplate (2.0) by Paul Irish
(See full docs at: http://github.com/sporkd/compass-html5-boilerplate)


Rails Installation
========================
$ gem install head_start
$ cd my_rails_project
$ compass init rails -r head_start -u head_start/boilerplate --force


Standalone Installation (use for Frank installations)
======================================================
$ gem install head_start
$ cd my_rails_project
$ compass init stand_alone -r head_start -u head_start/boilerplate --force

}

welcome_message %Q{
You've installed Head Start Boilerplate. Good for you!

}
