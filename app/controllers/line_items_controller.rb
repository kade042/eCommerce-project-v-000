class LineItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_line_item, only: [:show, :create, :edit, :update, :destroy]
  # GET /line_items
  # GET /line_items.json
  def index
    @line_items = LineItem.all
  end

  # GET /line_items/1
  # GET /line_items/1.json
  def show
  end

  # GET /line_items/new
  def new
    @line_item = LineItem.new
  end

  # GET /line_items/1/edit
  def edit
  end

  # POST /line_items
  # POST /line_items.json
  def create

    @cart = current_cart
   
    if @line_item
      self.update
    else

      @line_item = @item.line_items.create(quantity: 1, cart: @cart)

      respond_to do |format|
       if @line_item
          format.html { redirect_to @cart, notice: 'Line item was successfully created.' }
          format.json { render :show, status: :created, location: @cart }
        else
          format.html { render :new }
          format.json { render json: @line_item.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # PATCH/PUT /line_items/1
  # PATCH/PUT /line_items/1.json
  def update
    respond_to do |format|
      if @line_item.update(line_item_params)
        format.html { redirect_to @cart, notice: 'Line item was successfully updated.' }
        format.json { render :show, status: :ok, location: @cart }
      else
        format.html { render :edit }
        format.json { render json: @line_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /line_items/1
  # DELETE /line_items/1.json
  def destroy
    @line_item.destroy
    respond_to do |format|
      format.html { redirect_to cart_url, notice: 'Line item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_line_item
      if params[:id]
        @line_item = LineItem.find(params[:id])
      else
        @item = Item.find_by(id: params[:item_id])
        @line_item = LineItem.find_by(item_id: @item.id)
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def line_item_params
      attr_hash = @line_item.attributes
      attr_hash["quantity"] += 1
      attr_hash
      #params.require(:line_item).permit(:quantity, :unit_price, :sub_total, :item_id)
    end
end
