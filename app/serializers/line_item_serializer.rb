class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :sub_total
  has_one :item
end
