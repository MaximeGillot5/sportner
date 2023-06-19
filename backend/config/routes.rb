Rails.application.routes.draw do
  get 'users/index'
  get 'users/show'
  get 'users/new'
  get 'users/create'
  get 'users/edit'
  get 'users/update'
  get 'users/destroy'
  get 'sports/index'
  get 'sports/show'
  get 'sports/new'
  get 'sports/create'
  get 'sports/edit'
  get 'sports/update'
  get 'sports/destroy'
  get 'participations/index'
  get 'participations/show'
  get 'participations/new'
  get 'participations/create'
  get 'participations/edit'
  get 'participations/update'
  get 'participations/destroy'
  get 'events/index'
  get 'events/show'
  get 'events/new'
  get 'events/create'
  get 'events/edit'
  get 'events/update'
  get 'events/destroy'
  get 'current_user', to: 'current_user#index'
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
