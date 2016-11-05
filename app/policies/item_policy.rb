class ItemPolicy < ApplicationPolicy
  permit_owner_to :index, :edit, :new, :create, :update, :destroy
end
