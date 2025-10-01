Gem::Specification.new do |s|
  s.name = 'rubocop-cache-ventures'
  s.summary = 'Cache Ventures RuboCop config.'
  s.author = 'Jarrett Lusso'
  s.email = 'jclusso@gmail.com'
  s.homepage = 'https://github.com/cacheventures/code-style'

  s.license = 'MIT'

  s.version = '3.1.0'
  s.platform = Gem::Platform::RUBY

  s.add_dependency 'rubocop', '>= 1.79.0'
  s.add_dependency 'rubocop-rails'
  s.add_dependency 'rubocop-performance'
  s.add_dependency 'rubocop-minitest'

  s.files = %w[rubocop.yml]
end
