module HeadStartRailsHelper
  # Create a named haml tag to wrap IE conditional around a block
  # http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither
  # helper courtesy of Peter Gumeson's html5-boilerplate gem
  def ie_tag(name=:body, attrs={}, &block)
    attrs.symbolize_keys!
    haml_concat("<!--[if lt IE 7]> #{ tag(name, add_class('ie6 oldie', attrs), true) } <![endif]-->".html_safe)
    haml_concat("<!--[if IE 7]>    #{ tag(name, add_class('ie7 oldie', attrs), true) } <![endif]-->".html_safe)
    haml_concat("<!--[if IE 8]>    #{ tag(name, add_class('ie8 oldie', attrs), true) } <![endif]-->".html_safe)
    haml_concat("<!--[if gt IE 8]><!-->".html_safe)
    haml_tag name, attrs do
      haml_concat("<!--<![endif]-->".html_safe)
      block.call
    end
  end

  def ie_html(attrs={}, &block)
    ie_tag(:html, attrs, &block)
  end
  
  #
  # create a link that looks like a button using button_link_to instead of link_to
  # this works exactly the same as link_to, but will automatically apply appropriate styling
  # In addition, passing in one of the following classes will add a suitable icon to the button:
  # 
  # positive
  # negative
  # index
  # new
  # show
  # create
  # edit
  # update
  # destroy
  # back
  # print
  # download
  #
  def button_link_to(button_text, path, options = {})
    options = add_class "button", options
    name = "<span>#{button_text}</span>".html_safe
    link_to name, path, options
  end

  # the cancel_link helper creates link back to the referring page
  def cancel_link(label = "Cancel")
      ("or " + link_to( label, :back )).html_safe
  end
  
  def context_aware_link_to(name, url, options = {})
    link = link_to_unless_current(name, url, options) do |name,url,options|
      options = add_class "current", options
      link_to(name,url,options)
    end
    link.html_safe
  end

  private

    def add_class(name, attrs)
      classes = attrs[:class] || ''
      classes.strip!
      classes = ' ' + classes if !classes.blank?
      classes = name + classes
      attrs.merge(:class => classes)
    end
  
end