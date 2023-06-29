class Event < ApplicationRecord
  belongs_to :sport
  belongs_to :user
  has_many :participations
  has_many :users, through: :participations

  attribute :event_date, :date
  attribute :event_time, :time

  validates :event_name, presence: true, length: { maximum: 100 }
  validates :attendees, numericality: { greater_than_or_equal_to: 0 }
  validates :location, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: {maximum: 500}
  validates :user_id, presence: true
  validates :sport_id, presence: true
  validates :event_date, presence: true
  validates :event_time, presence: true
end
