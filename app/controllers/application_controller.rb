class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
   include Pundit
  before_action :configure_permitted_parameters, if: :devise_controller?
  helper_method :current_cart
  

  #rescue_from ActiveRecord::RecordNotFound, with: :not_found
  #rescue_from Exception, with: :not_found
  #rescue_from ActionController::RoutingError, with: :not_found
  #rescue_from Pundit::NotAuthorizedError, with: :not_found
  
  def raise_not_found
    raise ActionController::RoutingError.new("No route matches #{params[:unmatched_route]}")
  end

  protected
  

  def not_found
    respond_to do |format|
      format.html { render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found }
      format.xml { head :not_found }
      format.any { head :not_found }
    end
  end

  def error
    respond_to do |format|
      format.html { render :file => "#{Rails.root}/public/500", :layout => false, :status => :error }
      format.xml { head :not_found }
      format.any { head :not_found }
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end


  def current_cart

    @user = current_user
    @cart = Cart.find_by(user_id: @user.id)
    if @cart
        @user.current_cart = @cart
    else
      @user.cart = Cart.new
      @user.current_cart = @user.cart
      @user.save
    end
    @user.current_cart
  end
end
