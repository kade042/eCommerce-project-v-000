class Cart < ApplicationRecord
  belongs_to :user
  has_many :line_items, dependent: :destroy
  has_many :items, through: :line_items

  def total
    line_items.collect { |li|
      li.valid? ? (li.quantity * li.item.price) : 0
    }.sum
  end
end
