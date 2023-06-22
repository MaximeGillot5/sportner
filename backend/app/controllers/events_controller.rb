class EventsController < ApplicationController
  before_action :authenticate_user!

  def index
    # Code pour récupérer et afficher tous les événements
  end

  def show
    # Code pour afficher un événement spécifique
  end

  def new
    # Code pour afficher le formulaire de création d'un nouvel événement
  end

  def create
    event = current_user.events.build(event_params)

    if event.save
      render json: { message: 'Événement créé avec succès', event: event }, status: :created
    else
      render json: { error: 'Erreur lors de la création de l\'événement' }, status: :unprocessable_entity
    end
  end

  def destroy
    # Code pour supprimer un événement spécifique
  end

  private

  def event_params
    params.require(:event).permit(:event_name, :attendees, :location, :description, :user_id, :sport_id)
  end
  
end
