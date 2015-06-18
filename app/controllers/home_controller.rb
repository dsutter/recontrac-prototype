class HomeController < ApplicationController
  def index
    if !session[:once_in]
      session[:once_in] = 1
    end
  end
end
