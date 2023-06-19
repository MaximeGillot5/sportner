class Event < ApplicationRecord
  belongs_to :sport
  has_many :participations
  has_many :users, through: :participations
end
