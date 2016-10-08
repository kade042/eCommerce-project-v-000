class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end


  def current_cart

    @user = current_user
    @cart = Cart.find_by(user_id: @user.id)
    if @cart
        @user.current_cart = @cart
    else
      @user.current_cart = @user.carts.create
      @user.save
    end
    @user.current_cart
  end
end
