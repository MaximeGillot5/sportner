class EventsController < ApplicationController
  before_action :authenticate_user!

  def index
    events = Event.all
    render json: { events: events }, status: :ok
  end

  def show
    event = Event.find(params[:id])
    participants = event.users

    render json: { event: event, participants: participants }, status: :ok
  end
  def new
    # Code pour afficher le formulaire de création d'un nouvel événement
  end

  def create
    event_params_with_user_id = event_params.merge(user_id: current_user.id)
    event = current_user.events.build(event_params_with_user_id)
  
    if event.save
      render json: { message: 'Événement créé avec succès', event: event }, status: :created
    else
      render json: { error: 'Erreur lors de la création de l\'événement' }, status: :unprocessable_entity
    end
  end

  def update
    event = Event.find_by(id: params[:id], user_id: current_user.id)
    
    if event.update(event_params)
      render json: { message: 'Événement mis à jour avec succès', event: event }, status: :ok
    else
      render json: { error: 'Erreur lors de la mise à jour de l\'événement' }, status: :unprocessable_entity
    end
  end
 

  def destroy
    event = Event.find_by(id: params[:id], user_id: current_user.id)
  
    if event
      event.destroy
      render json: { message: 'Événement supprimé avec succès', event: event }, status: :ok
    else
      render json: { error: 'Erreur lors de la suppression de l\'événement' }, status: :unprocessable_entity
    end
  end
  



  private

  def event_params
    params.require(:event).permit(:event_name, :attendees, :location, :description, :user_id, :sport_id, :event_date, :event_time)
  end
  

end

