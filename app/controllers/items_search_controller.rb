class ItemsSearchController < ApplicationController
  def index
    if params[:keywords].present?
      search_term = params[:keywords]
      item_search_term = ItemSearchTerm.new(search_term)
      @items = Item.where(
                  item_search_term.where_clause,
                  item_search_term.where_args).
                  order(item_search_term.order)
    else
      @items = []
    end

    respond_to do |format|
      format.json { render json: @items }
    end
  end
end
