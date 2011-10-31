require "head_start/version"
require "compass"

extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register('head_start', :path => extension_path)

require 'head_start/helpers/head_start_rails_helper'

module HeadStart
  # allows us to run compass command-line without it complaining about uninitialized constant Rails
  if defined?(Rails)
    class Engine < ::Rails::Engine
      initializer "head_start.view_helpers" do
        ActionView::Base.send :include, ::HeadStartRailsHelper
      end
      initializer 'head_start.precompile_assets', :after => "sprockets.environment" do |app|
        Rails.application.config.assets.precompile += %w(modernizr.js boilerplate.js layouts/*.js)
      end
    end
  end

end
