class Info < ActiveRecord::Base
  belongs_to :user

  validates :main_post, presence: true
end
