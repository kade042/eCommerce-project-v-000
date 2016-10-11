class Cart < ApplicationRecord
  belongs_to :user
  has_many :line_items, dependent: :destroy
  has_many :items, through: :line_items

  def total
    line_items.collect { |li|
      li.valid? ? (li.quantity * li.item.price) : 0
    }.sum
  end

  def number_of_item
  	line_items.collect(&:quantity).sum
  end
end
