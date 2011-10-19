# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "head_start/version"

Gem::Specification.new do |s|
  s.name        = "head_start"
  s.version     = HeadStart::VERSION
  s.authors     = ["Adre Du Toit"]
  s.email       = ["adre@foxsoft.co.uk"]
  s.homepage    = ""
  s.summary     = %q{This gem extends Compass with Foxsoft's own SCSS libraries and third party Javascript libraries}
  s.description = %q{TODO: Write a gem description}

  s.rubyforge_project = "head_start"

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]

  s.add_development_dependency "compass"
end
