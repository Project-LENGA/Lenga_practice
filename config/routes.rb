Rails.application.routes.draw do
  root 'statics#index'

  resources :users

  get '*path', to: redirect('/')
end
