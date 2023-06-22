class Event < ApplicationRecord
  belongs_to :sport
  belongs_to :user
  has_many :participations
  has_many :users, through: :participations
end
