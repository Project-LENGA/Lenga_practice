class StaticsController < ActionController::Base
  def index
    render file: "#{Rails.root}/public/build/index.html"
  end
end
