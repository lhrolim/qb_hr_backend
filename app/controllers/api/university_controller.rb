class Api::UniversityController < ActionController::Base
  include Response
  include ExceptionHandler

  PAGE_SIZE = 10

  def index
    offers = University.take(PAGE_SIZE)

    respond_to do |format|
      format.json do
        json_response(offers)
      end
    end
  end

  def show
    json_response(University.find(params[:id]))
  end
end
