class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :item_id, :updated_at, :upvotes
  has_one :user
end
