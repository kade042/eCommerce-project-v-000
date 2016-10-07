class LineItem < ApplicationRecord
  belongs_to :item
  belongs_to :cart

  def unit_price
    if persisted?
      self[:unit_price]
    else
      item.price
    end
  end

  def sub_total
    unit_price * quantity
  end

  def finalize
    self[:unit_price] = unit_price
    self[:sub_total] = quantity * self[:unit_price]
  end
end
