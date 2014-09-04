Rails.application.routes.draw do

  root to: 'profile#home'

  post '/visitors/create', to: 'visitors#create'

end
