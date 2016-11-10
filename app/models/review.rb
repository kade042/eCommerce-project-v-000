class Review < ApplicationRecord
  belongs_to :user
  belongs_to :item

  def updated_at
    self[:updated_at].strftime('%b %d, %Y');
  end
end
