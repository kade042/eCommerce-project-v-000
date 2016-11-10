class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :inventory, :description, :image
  has_many :reviews
  #has_one :category
end
