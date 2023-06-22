class EventsController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    @user = current_user
    @event = @user.events.build(event_params)

    if @event.save
      redirect_to event_path(@event), notice: "Event successfully created."
    else
      render :new
    end
  end

  def update
    @event = Event.find(params[:id])

    if @event.update(event_params)
      redirect_to event_path(@event), notice: "Event successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    redirect_to events_path, notice: "Event successfully deleted."
  end

  private

  def event_params
    params.require(:event).permit(:event_name, :attendees, :location, :description, :sport_id)
  end
end
