class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :item_id, :updated_at
  has_one :user
end
