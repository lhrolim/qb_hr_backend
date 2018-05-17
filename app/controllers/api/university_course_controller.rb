class Api::UniversityCourseController < ActionController::Base
  include Response
  include ExceptionHandler

  PAGE_SIZE = 10

  def index
    offers = Course.where(university_id: params["university_id"]).take(PAGE_SIZE)
    json_response(offers)
  end
end
