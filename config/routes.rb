Rails.application.routes.draw do

  resources :items
  resources :categories, only: :show
  root to: 'store#index', as: 'store'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
