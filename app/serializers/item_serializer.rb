class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :inventory, :description
end
