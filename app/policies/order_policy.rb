class OrderPolicy < ApplicationPolicy
  permit_owner_to :index, :edit, :update, :destroy
end
