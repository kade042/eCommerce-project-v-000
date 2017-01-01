Rails.application.routes.draw do

  root to: 'store#index', as: 'store'
  #get 'item_search/index'
  resources :items_search, only: :index
  resources :reviews
  resources :shipping_addresses
  resources :orders

  resources :carts, only: :show
  resources :line_items
  resources :categories, only: [:show, :index] do
    resources :items
  end
  resources :items do
    resources :reviews;
  end
  #resources :categories, only: :show



  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  get '*unmatched_route', to: 'application#raise_not_found'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
