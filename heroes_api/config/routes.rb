Rails.application.routes.draw do
  resources :heros, only: [:index, :create]
  resources :powers, only: :index
  resources :weapons, only: :index
end
