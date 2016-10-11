Rails.application.routes.draw do

  
  resources :shipping_addresses
  resources :orders
  root to: 'store#index', as: 'store'
  resources :line_items #, only: [:update]
  resources :items
  resources :categories, only: :show
  resources :carts, only: :show
  

  devise_for :users
  get '*unmatched_route', to: 'application#raise_not_found'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
