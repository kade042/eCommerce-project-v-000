class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :inventory, :description, :image

  has_one :category
end
