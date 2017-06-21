# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( fpage.css )
Rails.application.config.assets.precompile += %w( spage.css )
Rails.application.config.assets.precompile += %w( connect.css )
Rails.application.config.assets.precompile += %w( tpage.css )
Rails.application.config.assets.precompile += %w( fourp.css )
Rails.application.config.assets.precompile += %w( lastpage.css )
Rails.application.config.assets.precompile += %w( bb.css )


Rails.application.config.assets.precompile += %w( fpage.js )
Rails.application.config.assets.precompile += %w( spage.js )
Rails.application.config.assets.precompile += %w( connect.js )
Rails.application.config.assets.precompile += %w( tpage.js )
Rails.application.config.assets.precompile += %w( fourp.js )
Rails.application.config.assets.precompile += %w( lastpage.js )

