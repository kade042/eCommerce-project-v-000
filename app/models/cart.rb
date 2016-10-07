class Cart < ApplicationRecord
  belongs_to :user
  belongs_to :order
  has_many :line_items, dependent: :destroy
	has_many :items, through: :line_items
end
