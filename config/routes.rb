Rails.application.routes.draw do


  resources :shipping_addresses
  resources :orders
  root to: 'store#index', as: 'store'
  resources :line_items #, only: [:update]
  resources :categories, only: [:show, :index] do
    resources :items
  end
  resources :items
  #resources :categories, only: :show
  resources :carts, only: :show


  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  get '*unmatched_route', to: 'application#raise_not_found'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
